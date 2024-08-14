import { Component, Input } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-help-see',
  templateUrl: './help-see.page.html',
  styleUrls: ['./help-see.page.scss'],
})
export class HelpSeePage {

  @Input() user: any;
  replyMessage: string = '';

  constructor(
    private modalController: ModalController,
    private firestore: AngularFirestore,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {}

  async sendReply() {
    if (this.replyMessage.trim() === '') {
      return;
    }
  
    const loading = await this.presentLoading();
  
    const reply = {
      email: this.user.email,
      fullname: this.user.fullname,
      reply: this.replyMessage,
      timestamp: new Date(),
    };
  
    this.firestore.collection('replies').add(reply)
      .then(async () => {
        await loading.dismiss();
        console.log('Reply sent successfully');
        this.replyMessage = '';
  
        const toast = await this.toastController.create({
          message: 'Reply sent successfully.',
          duration: 2000,
          position: 'bottom',
          color: 'success',
        });
        toast.present();
  
        await this.markMessageAsSeen();
        this.closeModal();
      })
      .catch(async (error) => {
        console.error('Error sending reply:', error);
        await loading.dismiss();
  
        const toast = await this.toastController.create({
          message: 'Error sending reply.',
          duration: 2000,
          position: 'bottom',
          color: 'danger',
        });
        toast.present();
      });
  }
  
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();
    return loading;
  }
  
  closeModal() {
    this.modalController.dismiss();
  }
  
  async markMessageAsSeen() {
    if (this.user && this.user.id) {
      try {
        await this.firestore.collection('help').doc(this.user.id).update({
          seen: true
        });
        console.log('Message marked as seen');
      } catch (error) {
        console.error('Error marking message as seen:', error);
      }
    } else {
      console.error('User id is missing');
    }
  }
}
