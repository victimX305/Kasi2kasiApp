import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { City, District, Municipality, Province, Surburb } from './location';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-location-pick',
  templateUrl: './location-pick.page.html',
  styleUrls: ['./location-pick.page.scss'],
})
export class LocationPickPage implements OnInit {


  province: any[] = [];

  selectedProvince: Province | any = null;
  selectedDistrict: District | any = null;
  selectedMunicipality: Municipality | any = null;
  selectedCity: City | any = null;
  selectedSurburb: Surburb | any = null;
  selectedWard: String | any = null;

  isConfirmEnabled: boolean = false;
  showCascadingDropdowns: boolean = false;

  myForm = new FormGroup({
    AddressLine1: new FormControl ('', [Validators.required, Validators.maxLength(50)]),
    AddressLine2: new FormControl ('', [Validators.required, Validators.maxLength(50)]),

  });
  AddressLine1: any;
  AddressLine2: any;

  constructor(
    private modalCtrl: ModalController,
    private toastController: ToastController,

  ) { }


  onProvinceChange() {
    this.showCascadingDropdowns = this.selectedProvince?.name === 'KwaZulu-Natal';
    this.selectedDistrict = null;
    this.selectedMunicipality = null;
    this.selectedCity = null;
    this.selectedSurburb = null;
    this.selectedWard = null;
    this.isConfirmEnabled = false;// Disable the Confirm button here.

    if (!this.showCascadingDropdowns) {
      this.isConfirmEnabled = true; // Enable the Confirm button for other provinces
    }
  }

  onDistrictChange() {
    this.isConfirmEnabled = false; // Disable the Confirm button here.
  }
  onMunicipalityChange() {
    
    this.isConfirmEnabled = false; // Disable the Confirm button here.
  }
  onCityChange() {
    
    this.isConfirmEnabled = false; // Disable the Confirm button here.
  }
  onSurburbChange() {
    
    this.isConfirmEnabled = false; // Disable the Confirm button here.
  }
  onWardChange() {
    
    this.isConfirmEnabled = true; // Disable the Confirm button here.
  }
  provinces: Province[] = [
    {
      name: 'KwaZulu-Natal',
      district: [
        {
          name: 'Amajuba',
          municipality: [
            {
              name: 'Dannhauser',
              city: [
                {
                  names: 'Annieville',
                  surburb: [
                    {
                    name: 'Annieville SP',
                    ward: ['11', '3', '5', '7']
                  }
                ]
                },
                {
                  names: 'Anvile',
                  surburb: [ 
                    {
                    name: 'Anvile SP',
                    ward: ['11', '3', '4', '6', '7']
                  }
                ]
                },
                {
                  names: 'Bright Home',
                  surburb: [ {
                    name: 'Bright Home SP',
                    ward: ['2']
                  }
                ]
                },
                {
                  names: 'Chelmsford',
                  surburb: [ {
                    name: 'Chelmsford Public Resort',
                    ward: ['1']
                  }
                ]
                },
                {
                  names: 'Chester',
                  surburb: [ {
                    name: 'Chester SP',
                    ward: [ '4', '6']
                  }
                ]
                },
                {
                  names: 'Clifton',
                  surburb: [ {
                    name: 'Clifton SP',
                    ward: [ '3', '6', '8']
                  }
                ]
                },
                {
                  names: 'Cloneen',
                  surburb: [ {
                    name: 'Cloneen SP',
                    ward: ['11', '5', '7']
                  }
                ]
                },
                {
                  names: 'Cork',
                  surburb: [ {
                    name: 'Cork SP',
                    ward: ['3', '4', '6']
                  }
                ]
                },
                {
                  names: 'Curragh',
                  surburb: [ {
                    name: 'Curragh SP',
                    ward: ['3', '4', '6']
                  }
                ]
                },
                {
                  names: 'Dannhauser',
                  surburb: [ {
                    name: 'Alletta',
                    ward: ['3', '6']
                  },
                  {
                    name: 'Dannhauser SP',
                    ward: ['1','2','3']
                  },
                  {
                    name: 'Durnaco',
                    ward: ['1','2']
                  },
                ]
                },
                {
                  names: 'Dannhauser NU',
                  surburb: [ {
                    name: 'Dannhauser NU',
                    ward: ['1', '2','3', '4', '5', '6', '8', '10', '21', '24']
                  }
                ]
                },
                {
                  names: 'Doornkop',
                  surburb: [ {
                    name: 'Doornkop SP',
                    ward: ['3', '5', '7']
                  }
                ]
                },
                {
                  names: 'Dorset',
                  surburb: [ {
                    name: 'Dorset SP',
                    ward: ['4']
                  }
                ]
                },
                {
                  names: 'Eastbourne',
                  surburb: [ {
                    name: 'Eastbourne SP',
                    ward: ['9', '10', '11', '15', '17']
                  }
                ]
                },
                {
                  names: 'Emafusini',
                  surburb: [ {
                    name: 'Emafusini SP',
                    ward: ['1', '2']
                  }
                ]
                },
                {
                  names: 'Fairbreeze',
                  surburb: [ {
                    name: 'Fairbreeze',
                    ward: ['6', '8', '9', '11']
                  }
                ]
                },
                {
                  names: 'Flint',
                  surburb: [ {
                    name: 'Flint SP',
                    ward: ['3', '4', '6']
                  }
                ]
                },
                {
                  names: 'Fulathela Sorth',
                  surburb: [ {
                    name: 'Fulathela Sorth SP',
                    ward: ['7', '9']
                  }
                ]
                },
                {
                  names: 'Geduld',
                  surburb: [ {
                    name: 'Geduld SP',
                    ward: ['1', '3']
                  }
                ]
                },
                {
                  names: 'Greenock',
                  surburb: [ {
                    name: 'Greenock SP',
                    ward: ['3', '8']
                  }
                ]
                },
                {
                  names: 'Grootgeluk',
                  surburb: [ {
                    name: 'Grootgeluk SP',
                    ward: ['9', '10']
                  }
                ]
                },
                {
                  names: 'Hattingspruit',
                  surburb: [ {
                    name: 'Hattingspruit',
                    ward: ['2']
                  }
                ]
                },
                {
                  names: 'Hilltop',
                  surburb: [ {
                    name: 'Hilltop SP',
                    ward: ['1', '3']
                  }
                ]
                },
                {
                  names: 'Inverness',
                  surburb: [ {
                    name: 'Inverness SP',
                    ward: ['3', '7', '9']
                  }
                ]
                },
                {
                  names: 'Jokis',
                  surburb: [ {
                    name: 'Jokis SP',
                    ward: ['6', '8', '9']
                  }
                ]
                },
                {
                  names: 'Kempshoek',
                  surburb: [ {
                    name: 'Kempshoek SP',
                    ward: ['3', '4', '7']
                  }
                ]
                },
                {
                  names: 'Kilegethe',
                  surburb: [ {
                    name: 'Kilegethe SP',
                    ward: ['5', '9', '11']
                  }
                ]
                },
                {
                  names: 'Kliprand',
                  surburb: [ {
                    name: 'Kliprand SP',
                    ward: ['2']
                  }
                ]
                },
                {
                  names: 'Lekkerwater',
                  surburb: [ {
                    name: 'Lekkerwater SP',
                    ward: ['9', '10']
                  }
                ]
                },
                {
                  names: 'Mafahlawane',
                  surburb: [ {
                    name: 'Mafahlawane SP',
                    ward: ['3', '8', '9']
                  }
                ]
                },
                {
                  names: 'Martha',
                  surburb: [ {
                    name: 'Martha SP',
                    ward: ['5', '9', '10']
                  }
                ]
                },
                {
                  names: 'Mbanane',
                  surburb: [ {
                    name: 'Mbanane SP',
                    ward: ['5', '9', '10']
                  }
                ]
                },
                {
                  names: 'Meilibult',
                  surburb: [ {
                    name: 'Meilibult SP',
                    ward: ['9']
                  }
                ]
                },
                {
                  names: 'Milford',
                  surburb: [ {
                    name: 'Milford SP',
                    ward: ['4']
                  }
                ]
                },
                {
                  names: 'Moltloung',
                  surburb: [ {
                    name: 'Moltloung Sp',
                    ward: ['3', '6', '8']
                  }
                ]
                },
                {
                  names: 'Mtandeka',
                  surburb: [ {
                    name: 'Mtandeka SP',
                    ward: ['5','9','10','15','16','21']
                  }
                ]
                },
                {
                  names: 'Mullingar',
                  surburb: [ {
                    name: 'Mullingar',
                    ward: ['3', '4', '6']
                  }
                ]
                },
                {
                  names: 'Naas',
                  surburb: [ {
                    name: 'Naas SP',
                    ward: ['8', '9']
                  }
                ]
                },
                {
                  names: 'Nellie',
                  surburb: [ {
                    name: 'Nellie SP',
                    ward: ['6', '7', '11']
                  }
                ]
                },
                {
                  names: 'Nellie Valler',
                  surburb: [ {
                    name: 'Nellie Valler SP',
                    ward: ['6', '11']
                  }
                ]
                },
               
                {
                  names: 'Nguqunguqu',
                  surburb: [ {
                    name: 'Nguqunguqu SP',
                    ward: ['3']
                  }
                ]
                },
                {
                  names: 'Nyanyadu',
                  surburb: [ {
                    name: 'Nyanyadu',
                    ward: ['4', '6']
                  }
                ]
                },
                {
                  names: 'Path Farm',
                  surburb: [ {
                    name: 'Path Farm SP',
                    ward: ['3', '4', '6']
                  }
                ]
                },
                {
                  names: 'Philip',
                  surburb: [ {
                    name: 'Philip',
                    ward: ['6', '8', '9']
                  }
                ]
                },
                {
                  names: 'Poona',
                  surburb: [ {
                    name: 'Poona SP',
                    ward: ['4', '6']
                  }
                ]
                },
                {
                  names: 'Rocky Spruit',
                  surburb: [ {
                    name: 'Rocky Spruit SP',
                    ward: ['1','2']
                  }
                ]
                },
                {
                  names: 'Rutland',
                  surburb: [ {
                    name: 'Rutland SP',
                    ward: ['4', '6', '7', '11']
                  }
                ]
                },
                {
                  names: 'Skombaren',
                  surburb: [ {
                    name: 'Skombaren SP',
                    ward: ['1']
                  }
                ]
                },
                {
                  names: 'Spookmill',
                  surburb: [ {
                    name: 'Spookmill SP',
                    ward: ['3', '8']
                  }
                ]
                },
                {
                  names: 'Springbok Laagte',
                  surburb: [ {
                    name: 'Springbok Laagte SP',
                    ward: ['8']
                  }
                ]
                },
                {
                  names: 'Springlake',
                  surburb: [ {
                    name: 'Springlake Colliery Mine',
                    ward: ['2', '3']
                  }
                ]
                },
                {
                  names: 'Striijbank',
                  surburb: [ {
                    name: 'Striijbank SP',
                    ward: ['3']
                  }
                ]
                },
                
                {
                  names: 'Surrey',
                  surburb: [ {
                    name: 'Surrey',
                    ward: ['3', '8']
                  }
                ]
                },
                {
                  names: 'Twhatgwha',
                  surburb: [ {
                    name: 'Twhatgwha',
                    ward: ['3', '5', '7']
                  }
                ]
                },
                {
                  names: 'Uitkyk',
                  surburb: [ {
                    name: 'Uitkyk SP',
                    ward: ['5', '9', '10']
                  }
                ]
                },
                {
                  names: 'Verdriet',
                  surburb: [ {
                    name: 'Verdriet SP',
                    ward: ['3']
                  }
                ]
                },
                {
                  names: 'Wilts',
                  surburb: [ {
                    name: 'Wilts SP',
                    ward: ['4', '6']
                  }
                ]
                },
                {
                  names: 'Zondo',
                  surburb: [ {
                    name: 'Zondo SP',
                    ward: ['6', '8', '11']
                  }
                ]
                }
              ]
            },
            {
              name: 'Emdlangeni',
              city: [
                {
                names: 'Berouw',
                surburb: [{
                  name: 'Berouw SP',
                  ward: ['2', '3']
                }]
              },
              {
                names: 'Emdlangeni NU',
                surburb: [{
                  name: 'Emdlangeni NU',
                  ward: ['1', '2', '3','4', '6', '7','8', '9', '10', '12', '16', '17', '22']
                }]
              },    
              {
                names: 'Groenvlei',
                surburb: [{
                  name: 'Groenvlei SP',
                  ward: ['4']
                }]
              },    
              {
                names: 'Kingstown',
                surburb: [{
                  name: 'Kingstown SP',
                  ward: ['6', '8', '11']
                }]
              },
              {
                names: 'Utrecht',//
                surburb: [
                  {
                  name: 'Bensdorp',
                  ward: ['2']
                },
                {
                  name: 'Khayalethu',
                  ward: ['2']
                },
                {
                  name: 'Utrecht SP1',
                  ward: ['2']
                },
                {
                  name: 'Utrecht SP1',
                  ward: ['1', '2', '3']
                },
                {
                  name: 'White City',
                  ward: ['2']
                }
              ]
              },
              {
                names: 'Waterval',
                surburb: [{
                  name: 'Waterval SP',
                  ward: ['3']
                }]
              }                 
            ]
            },
            {
              name: 'Newcastle',
              city: [
                {
                  names: 'Alcockspruit',
                  surburb: [
                    {
                    name: 'Alcockspruit SP',
                    ward: ['1', '21']
                  }
                ]
                },
                {
                  names: 'Blaauwbosch Laagte',
                  surburb: [
                    {
                    name: 'Blaauwbosch Laagte SP',
                    ward: ['12', '13', '14', '15', '16', '17', '18', '19']
                  }
                ]
                },
                {
                  names: 'Cavan',
                  surburb: [
                    {
                    name: 'Cavan SP',
                    ward: ['10', '15', '16', '17', '18', '19', '21']
                  }
                ]
                },
                {
                  names: 'Charlestown',
                  surburb: [
                    {
                    name: 'Charlestown SP',
                    ward: ['1', '3', '4']
                  }
                ]
                },
                {
                  names: 'Claremont ',
                  surburb: [
                    {
                    name: 'Claremont SP',
                    ward: ['6', '7', '8', '30']
                  }
                ]
                },
                {
                  names: 'Dicks Halt',
                  surburb: [
                    {
                    name: 'Dicks Halt SP',
                    ward: ['4', '6', '7']
                  }
                ]
                },
                {
                  names: 'Fulathela North',
                  surburb: [
                    {
                    name: 'Fulathela North SP',
                    ward: ['7', '9']
                  }
                ]
                },
                
                {
                  names: 'Inverness',
                  surburb: [
                    {
                    name: 'Inverness SP',
                    ward: ['3', '7', '9']
                  }
                ]
                },
                {
                  names: 'Jakkalspan',
                  surburb: [
                    {
                    name: 'Jakkalspan SP',
                    ward: ['6', '7', '8', '12', '13', '30']
                  }
                ]
                },
                {
                  names: 'Jobstown',
                  surburb: [
                    {
                    name: 'Jobstown SP',
                    ward: ['6']
                  }
                ]
                },
                {
                  names: 'Johnstown',
                  surburb: [
                    {
                    name: 'Johnstown SP',
                    ward: ['6', '12', '13', '14', '18', '30']
                  }
                ]
                },
                {
                  names: 'Leslie',
                  surburb: [
                    {
                    name: 'Leslie SP',
                    ward: ['6', '12', '14', '18', '31']
                  }
                ]
                },
                {
                  names: 'Madadeni',
                  surburb: [
                    {
                    name: 'Madadeni A',
                    ward: ['20', '21', '22']
                  },
                  {
                    name: 'Madadeni B',
                    ward: ['20', '21', '22', '23', '24']
                  },
                  {
                    name: 'Madadeni C',
                    ward: ['1', '20', '22', '23', '24']
                  },
                  {
                    name: 'Madadeni D',
                    ward: ['23', '24', '26','27', '28', '31']
                  },
                  {
                    name: 'Madadeni E',
                    ward: ['2', '24', '27', '28']
                  },
                  {
                    name: 'Madadeni F',
                    ward: ['16', '19', '21', '22', '28', '29']
                  },
                  {
                    name: 'Madadeni G',
                    ward: ['23', '24', '28']
                  },
                  {
                    name: 'Madadeni H',
                    ward: ['16', '19', '21']
                  },
                  {
                    name: 'Madadeni J',
                    ward: ['24', '26', '31']
                  },
                  {
                    name: 'Madadeni K',
                    ward: ['20', '23', '24', '26', '31']
                  },
                  {
                    name: 'Madadeni L',
                    ward: ['14', '16', '19','27', '29']
                  },
                  {
                    name: 'Madadeni M',
                    ward: ['14', '16', '19','29', '31']
                  },
                  {
                    name: 'Madadeni N',
                    ward: ['12', '14', '16', '18']
                  },
                  {
                    name: 'Madadeni P',
                    ward: ['6', '14', '16', '18', '31']
                  },
                  {
                    name: 'Madadeni R',
                    ward: ['14', '27', '29', '31']
                  },
                  {
                    name: 'Madadeni SP',
                    ward: ['31']
                  }
                  
                ]
                },
                {
                  names: 'Manzana',
                  surburb: [
                    {
                    name: 'Manzana SP',
                    ward: ['6', '7', '8', '30']
                  }
                ]
                },
                {
                  names: 'Masondale',
                  surburb: [
                    {
                    name: 'Masondale SP',
                    ward: ['4','6', '31']
                  }
                ]
                },
                {
                  names: 'Mndozo',
                  surburb: [
                    {
                    name: 'Mndozo SP',
                    ward: ['3', '4', '6', '7']
                  }
                ]
                },
                {
                  names: 'Muiskraal',
                  surburb: [
                    {
                    name: 'Muiskraal SP',
                    ward: ['6', '14', '24', '26','27', '29', '31']
                  }
                ]
                },
                {
                  names: 'Newcastle',
                  surburb: [
                    {
                    name: 'Airpot Industrial',
                    ward: ['1', '20', '21', '25']
                  },
                  {
                    name: 'Ameil Park',
                    ward: ['1', '2', '4']
                  },
                  {
                    name: 'Arbor Park',
                    ward: ['1', '25']
                  },
                  {
                    name: 'Aviary Hill',
                    ward: ['1', '2']
                  },
                  {
                    name: 'Barry Hertzog Park',
                    ward: ['1', '2', '4', '5', '25']
                  },
                  {
                    name: 'Fairleigh',
                    ward: ['1', '25']
                  },
                  {
                    name: 'Leslie SP',
                    ward: ['6', '12', '14', '18', '31']
                  },
                  {
                    name: 'Fernwood',
                    ward: ['1', '3']
                  },
                  {
                    name: 'Ghandi Park',
                    ward: ['3']
                  },
                  {
                    name: 'Hutten Heights',
                    ward: ['1', '2', '4']
                  },
                  {
                    name: 'Kwamathukuza',
                    ward: ['20', '21', '22']
                  },
                  {
                    name: 'Lennoxton',
                    ward: ['1', '2', '4', '25', ]
                  },
                  {
                    name: 'Lenville',
                    ward: ['1', '25']
                  },
                  {
                    name: 'Ncadu Park',
                    ward: ['5', '25']
                  },
                  {
                    name: 'Newcastle CBD',
                    ward: ['4', '25']
                  },
                  {
                    name: 'Newcastle Central',
                    ward: ['3','4', '25']
                  },
                  {
                    name: 'Paradise',
                    ward: ['1', '4']
                  },
                  {
                    name: 'Pioneer Park',
                    ward: ['2', '4', '5']
                  },
                  {
                    name: 'Richview',
                    ward: ['1', '3', '25']
                  },
                  {
                    name: 'Riverside Industrial',
                    ward: ['1', '4', '5', '20', '25']
                  },
                  {
                    name: 'Schuinshoogte',
                    ward: ['2']
                  },
                  {
                    name: 'Signal Hill',
                    ward: ['1', '2']
                  },
                  {
                    name: 'Sunnyridge',
                    ward: ['1', '2', '4', '5']
                  },
                  {
                    name: 'Sunset View',
                    ward: ['3']
                  },
                  {
                    name: 'Sury Aville',
                    ward: ['1', '3', '4']
                  },
                  {
                    name: 'Vlam',
                    ward: ['25']
                  }
                  
                ]
                },
                {
                  names: 'Newcastle NU',
                  surburb: [
                    {
                    name: 'Cambrain Coal Mine',
                    ward: ['1', '21']
                  },
                  {
                    name: 'Kilbarchan Coal Mine',
                    ward: ['1', '21']
                  },
                  {
                    name: 'Newcastle NU',
                    ward: ['1', '2', '3', '4', '5', '6', '10', '15', '16', '19', '20', '21', '24', '25', '28', '29', '31']
                  },
                  {
                    name: 'Northdown',
                    ward: ['1', '5', '20', '31']
                  }
                ]
                },
                {
                  names: 'Ngangane',
                  surburb: [
                    {
                    name: 'Ngangane SP',
                    ward: ['21']
                  }
                ]
                },
                {
                  names: 'Ngangane Colliery',
                  surburb: [
                    {
                    name: 'Ngangane Colliery SP',
                    ward: ['21']
                  }
                ]
                },
                {
                  names: 'Osizweni',
                  surburb: [
                    {
                    name: 'Osizweni A',
                    ward: ['8', '10', '11', '12', '13', '17', '18', '30']
                  },
                  {
                    name: 'Osizweni C',
                    ward: ['7', '8', '9', '10']
                  },
                  {
                    name: 'Osizweni D',
                    ward: ['7', '9', '10']
                  },
                  {
                    name: 'Osizweni E',
                    ward: ['9', '10']
                  },
                  {
                    name: 'Osizweni F',
                    ward: ['9', '10', '11', '15', '17', '18']
                  }
                ]
                },
                {
                  names: 'Suspense',
                  surburb: [
                    {
                    name: 'Suspense SP',
                    ward: ['4', '6','31']
                  }
                ]
                },
                {
                  names: 'Taum',
                  surburb: [
                    {
                    name: 'Taum SP',
                    ward: ['20','21']
                  }
                ]
                },
              ]
              },
          
          ]
        }, 
        {
          name: 'eThekwini',
          municipality: [
            {
            name: 'eThekwini',
            city: [
              {
                names: 'Adams Rural',
                surburb: [
                  {
                  name: 'Adams Mission',
                  ward: ['67','96']
                },
                {
                  name: 'Emansomini',
                  ward: ['67','94','96']
                },
                {
                  name: 'Emsahweni',
                  ward: ['67','96','98']
                },
                {
                  name: 'Enkanyiswini Shozi',
                  ward: ['1','2','67','96','98']    
                },
                {
                  name: 'Izwelisha',
                  ward: ['67','96','98']    
                },
                {
                  name: 'KwaHlongwa',
                  ward: ['67']    
                }
              ]
              },
              {
                names: 'Amagcino',
                surburb: [
                  {
                  name: 'Amagcino SP', 
                  ward: ['98']
                }
              ]
              },
              {
                names: 'Amanzimtoti',
                surburb: [
                  {
                  name: 'Amanzimtoti SP',
                  ward: ['67','93','97'] 
                  }
              ]
              },
              {
                names: 'Baphehli',
                surburb: [
                  {
                  name: 'Baphehli SP',
                  ward: ['67','93','97', '98'] 
                }
              ]
              },
              {
                names: 'Bhekulwandle',
                surburb: [
                  {
                  name: 'Bhekulwandle SP',
                  ward: ['67','94'] 
                }
              ]
              },
              {
                names: 'Blackburn',
                surburb: [
                  {
                  name: 'Blackburn Estate',
                  ward: ['102', '50']
                },
                {
                  name: 'Blackburn Village',
                  ward: ['102']
                },
                {
                  name: 'Flanders',
                  ward: ['35', '58', '102']
                },
                {
                  name: 'Hawaan',
                  ward: ['35', '102']
                },
                {
                  name: 'Hawaan Forest Estate',
                  ward: ['35']
                },
                {
                  name: 'Hillhead',
                  ward: ['35', '58', '102']
                },
                {
                  name: 'Ottawa South',
                  ward: ['50', '51', '58', '102']
                },
                {
                  name: 'Waterloo',
                  ward: ['58', '102']
                },
                {
                  name: 'Waterloo Village',
                  ward: ['58']
                },
              ]
              },
              {
                names: 'Bothas Hill',
                surburb: [
                  {
                  name: 'Bothas Hill SP',
                  ward: ['8', '103']
                }
              ]
              },
              {
                names: 'Cato Ridge',
                surburb: [
                  {
                  name: 'Cato Ridge SP',
                  ward: ['1', '5']
                },
                {
                  name: 'Craiglea',
                  ward: ['1', '4']
                },
                {
                  name: 'Doornrug',
                  ward: ['1']
                },
                {
                  name: 'Harrison',
                  ward: ['1', '4', '5']
                },
              ]
              },
              {
                names: 'Chatsworth',
                surburb: [
                  {
                  name: 'Arena Park',
                  ward: ['70', '71', '72', '73']
                },
                {
                  name: 'Bayview',
                  ward: ['69', '70']
                },
                {
                  name: 'Bottlebrush',
                  ward: ['70', '71']
                },
                {
                  name: 'Croftdene',
                  ward: ['70', '73']
                },
                {
                  name: 'Crossmoor',
                  ward: ['17', '71', '72']
                },
                {
                  name: 'Hevenside',
                  ward: ['64', '69', '70', '74', '80']
                },
                {
                  name: 'Kharwastan',
                  ward: ['65', '70']
                },
                {
                  name: 'Lamontville',
                  ward: ['69', '74', '75', '76', '80']
                },
                {
                  name: 'Mentford',
                  ward: ['72', '73', '77']
                },
                {
                  name: 'Moorten',
                  ward: ['17', '71', '72', '73']
                },
                {
                  name: 'Risecliff',
                  ward: ['71', '72', '73','77']
                },
                {
                  name: 'Silverglen',
                  ward: ['69', '70', '73']
                },
                {
                  name: 'Umhlatuzana',
                  ward: ['64', '65', '70']
                },
                {
                  name: 'Welbedacht',
                  ward: ['70','71','72', '73', '77', '79', '84']
                },
                {
                  name: 'Welbedacht Mine',
                  ward: ['69', '70', '73', '79', '80', '81']
                },
                {
                  name: 'Westcliff',
                  ward: ['69', '70','71', '73',]
                },
                {
                  name: 'Woodhurst',
                  ward: ['64', '65', '69', '70', '71']
                }
              ]
              },
              {
                names: 'Chuphuluka',
                surburb: [
                  {
                  name: 'Chuphuluka SP',
                  ward: ['2', '6', '8']
                }
              ]
              },
              {
                names: 'Cibane',
                surburb: [
                  {
                  name: 'Mgezanyoni',
                  ward: ['2','16', '17', '18']
                }
              ]
              },
              {
                names: 'Clansthal',
                surburb: [
                  {
                    name: 'Amahlongwa',
                    ward: ['1', '99']
                  },
                  {
                  name: 'Clansthal SP',
                  ward: ['1','2', '3', '4', '99']
                  },
                  {
                    name: 'Willow Glen',
                    ward: ['1','99']
                  }
              ]
              },
              {
                names: 'Clermont',
                surburb: [
                  {
                  name: 'Chris Hani',
                  ward: ['21', '20']
                },
                {
                  name: 'Clermont Emngeni',
                  ward: ['19', '20', '21', '22', '92']
                }
              ]
              },
              {
                names: 'Cliffdale',
                surburb: [
                  {
                  name: 'Cliffdale SP',
                  ward: ['4', '103']
                }
              ]
              },
              {
                names: 'Clifton Heights',
                surburb: [
                  {
                  name: 'Clifton Heights SP',
                  ward: ['6', '100']
                }
              ]
              },
              {
                names: 'Congo',
                surburb: [
                  {
                  name: 'Congo SP',
                  ward: ['9']
                }
              ]
              },
              {
                names: 'Craigieburn',
                surburb: [
                  {
                  name: 'Craigieburn Mine',
                  ward: ['99']
                },
                {
                  name: 'Craigieburn SP',
                  ward: ['99']
                },
                {
                  name: 'Mkomazi Drift SH',
                  ward: ['99']
                },
                {
                  name: 'Naidooville',
                  ward: ['99']
                }              ]
              },
              {
                names: 'Danganya',
                surburb: [
                  {
                  name: 'Danganya SP',
                  ward: [ '98', '99']
                }
              ]
              },
              {
                names: 'Denge',
                surburb: [
                  {
                  name: 'Denge SP',
                  ward: ['1']
                }
              ]
              },
              {
                names: 'Desainager',
                surburb: [
                  {
                  name: 'Desainager SP',
                  ward: ['58']
                }
              ]
              },
              {
                names: 'Dimane',
                surburb: [
                  {
                  name: 'Dimane SP',
                  ward: ['2', '8']
                }
              ]
              },
              {
                names: 'Diphini',
                surburb: [
                  {
                  name: 'Diphini SP',
                  ward: ['4']
                }
              ]
              },
              {
                names: 'Drummond',
                surburb: [
                  {
                  name: 'Drummond SP',
                  ward: ['4', '8', '103']
                }
              ]
              },
              {
                names: 'Durban',
                surburb: [
                  {
                  name: 'Athlone',
                  ward: ['36']
                },
                {
                  name: 'Athlone Park',
                  ward: ['90','93']
                },
                {
                  name: 'Avoca',
                  ward: ['34', '35']
                },
                {
                  name: 'Bayhead',
                  ward: ['32', '33', '64', '66']
                },
                {
                  name: 'Beachwood Mangroves',
                  ward: ['27','36']
                },
                {
                  name: 'Bellair',
                  ward: ['29', '64', '65', '101']
                },
                {
                  name: 'Berea',
                  ward: ['25','26','27','28','29','30', '31', '32', '33', '64', '65', '101']
                },
                {
                  name: 'Bluff',
                  ward: ['26', '32', '66', '68', '75', '76', '90']
                },
                {
                  name: 'Bonela',
                  ward: ['24', '29', '30', '31', '101']
                },
                {
                  name: 'Brairdene',
                  ward: ['25','27','34','36']
                },
                {
                  name: 'Broadway',
                  ward: ['35','36']
                },
                {
                  name: 'Carrington Heights',
                  ward: ['33', '65', '101']
                },
                {
                  name: 'Cato Crest',
                  ward: ['30', '101']
                },
                {
                  name: 'Chesterville',
                  ward: ['24', '29', '30']
                },
                {
                  name: 'Clairwood',
                  ward: ['32', '64', '66', '75']
                },
                {
                  name: 'Clare Hills',
                  ward: ['23', '25', '30', '31']
                },
                {
                  name: 'Coedmore Mine',
                  ward: ['64', '65']
                },
                {
                  name: 'Congela',
                  ward: ['32', '33', '64']
                },
                {
                  name: 'Durban Central',
                  ward: ['26', '28', '32']
                },
                {
                  name: 'Durban Harbour',
                  ward: ['26', '32', '66']
                },
                {
                  name: 'Durban International Airport',
                  ward: ['25', '27', '31']
                },
                {
                  name: 'Essenwood',
                  ward: ['25', '27', '31']
                },
                {
                  name: 'Fynnlands',
                  ward: ['32', '66']
                },
                {
                  name: 'Glen Anil',
                  ward: ['35', '36', '102']
                },
                {
                  name: 'Glen Ashley',
                  ward: ['35', '36']
                },
                {
                  name: 'Glen Hill',
                  ward: ['35', '36']
                },
                {
                  name: 'Glenmore',
                  ward: ['33', '101']
                },
                {
                  name: 'Greenwood Park',
                  ward: ['34', '36']
                },
                {
                  name: 'Hillary',
                  ward: ['29', '63', '65']
                },
                {
                  name: 'Isipingo Beach',
                  ward: ['90', '93']
                },
                {
                  name: 'Isipingo Hills',
                  ward: ['89', '90']
                },
                {
                  name: 'Isipingo Rail',
                  ward: ['76', '88', '89', '90']
                },
                {
                  name: 'Joe Slovo',
                  ward: ['69', '75']
                },
                {
                  name: 'Kenneth Stainbank',
                  ward: ['64', '65']
                },
                {
                  name: 'Kenville',
                  ward: ['34']
                },
                {
                  name: 'Lotus Park',
                  ward: ['89', '90', '93']
                },
                {
                  name: 'Lower Kennedy Road',
                  ward: ['25']
                },
                {
                  name: 'Malaba Hills',
                  ward: ['76', '88', '90']
                },
                {
                  name: 'Memorial Park',
                  ward: ['63', '65']
                },
                {
                  name: 'Mobeni East',
                  ward: ['32', '64', '66', '68', '75']
                },
                {
                  name: 'Mobeni Heights',
                  ward: ['64', '69', '74']
                },
                {
                  name: 'Mobeni West',
                  ward: ['64', '69', '74', '75', '76']
                },
                {
                  name: 'Montclair',
                  ward: ['32', '64', '75']
                },
                {
                  name: 'Mount Vernon',
                  ward: ['65']
                },
                {
                  name: 'Mowat',
                  ward: ['64', '65']
                },
                {
                  name: 'North Beach',
                  ward: ['26', '27', '28']
                },
                {
                  name: 'Palmiet',
                  ward: ['23', '24', '25', '30']
                },
                {
                  name: 'Park Hill',
                  ward: ['34', '35', '36']
                },
                {
                  name: 'Point',
                  ward: ['26']
                },
                {
                  name: 'Prospect Hall',
                  ward: ['36']
                },
                {
                  name: 'Prospecton',
                  ward: ['76', '89', '90', '93']
                },
                {
                  name: 'Red Hill',
                  ward: ['34', '35', '36', '102']
                },
                {
                  name: 'Reservior Hills',
                  ward: ['76', '89', '90', '93']
                },
                {
                  name: 'Ridgeview',
                  ward: ['23', '25', '34', '37', '92']
                },
                {
                  name: 'Sapref',
                  ward: ['68', '90']
                },
                {
                  name: 'Sea Cow Lake',
                  ward: ['11','34']
                },
                {
                  name: 'Sea View',
                  ward: ['32', '33', '65', '65']
                },
                {
                  name: 'Sherwood',
                  ward: ['23', '24', '25', '30', '31']
                },
                {
                  name: 'South Beach',
                  ward: ['26', '28', '32']
                },
                {
                  name: 'Sparks ',
                  ward: ['25', '30', '31', '101']
                },
                {
                  name: 'Springfield',
                  ward: ['25', '27', '31']
                },
                {
                  name: 'Stamford Hill',
                  ward: ['26', '27', '28', '36']
                },
                {
                  name: 'Umbogintwini',
                  ward: ['90', '93']
                },
                {
                  name: 'Umgneni Business Park ',
                  ward: ['23', '25', '27', '34', '36']
                },
                {
                  name: 'Umngeni Park',
                  ward: ['27', '34', '36']
                },
                {
                  name: 'uMkhumbaan',
                  ward: ['24', '29', '65', '101']
                },
                {
                  name: 'Virginia',
                  ward: ['35', '36']
                },
                {
                  name: 'Wiggins',
                  ward: ['24', '29', '30', '101']
                },
                {
                  name: 'Woodhaven',
                  ward: ['64', '69']
                },
                {
                  name: 'Woodlands',
                  ward: ['64', '69', '75']
                },
                {
                  name: 'Woodhaven',
                  ward: ['64', '65', '69', '70']
                },
              ]
              },
              {
                names: 'Ebhobhonono',
                surburb: [
                  {
                  name: 'Ebhobhonono SP',
                  ward: ['1', '2']
                }
              ]
              },
              {
                names: 'Ediphini Section',
                surburb: [
                  {
                  name: 'Ediphini Section SP',
                  ward: [ '7', '100']
                }
              ]
              },
              {
                names: 'Egwadeni Section',
                surburb: [
                  {
                  name: 'Egwadeni Section SP',
                  ward: ['7']
                }
              ]
              },
              {
                names: 'Ehlanzeni',
                surburb: [
                  {
                  name: 'Ehlanzeni SP',
                  ward: ['72', '77', '78', '84', '100']
                }
              ]
              },
              {
                names: 'Ekwandeni',
                surburb: [
                  {
                  name: 'Ekwandeni ',
                  ward: [ '6', '7', '91']
                }
              ]
              },
              {
                names: 'Emachobeni',
                surburb: [
                  {
                  name: 'Emachobeni SP',
                  ward: ['9', '19', '38', '43', '44']
                }
              ]
              },
              {
                names: 'Emagezeni',
                surburb: [
                  {
                  name: 'Emagezeni SP',
                  ward: ['7', '100']
                }
              ]
              },
              {
                names: 'Emalangeni',
                surburb: [
                  {
                  name: 'Emalangeni SP',
                  ward: [ '6', '7', '91']
                }
              ]
              },
              {
                names: 'Emangabazini',
                surburb: [
                  {
                  name: 'Emangabazini SP',
                  ward: ['7', '100']
                }
              ]
              },
              {
                names: 'Emvini',
                surburb: [
                  {
                  name: 'Emvini SP',
                  ward: ['1', '2']
                }
              ]
              },
              {
                names: 'Esidweni',
                surburb: [
                  {
                  name: 'Esidweni SP',
                  ward: ['84', '95', '96', '100']
                }
              ]
              },
              {
                names: 'Eskhelekehleni',
                surburb: [
                  {
                  name: 'Eskhelekehleni SP',
                  ward: [ '4']
                }
              ]
              },
              {
                names: 'Ethekwini',
                surburb: [
                  {
                  name: 'Ethekwini SP',
                  ward: ['2', '97', '98']
                }
              ]
              },
              {
                names: 'Ethekwini NU',
                surburb: [
                  {
                  name: 'AF Sterk Spruit Mine',
                  ward: ['7', '103']
                },
                {
                  name: 'Emona AH',
                  ward: ['12', '21', '61', '62']
                },
                {
                  name: 'Ethekwini NU',
                  ward: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '12'
                          ,'14', '15', '21', '22', '53', '56', '58', '59', '60', '61', '62', '91', '99', '100', '102', '103' 
                ]
                },
              ]
              },
              {
                names: 'Everton',
                surburb: [
                  {
                  name: 'Everton H C',
                  ward: ['8', '9', '10']
                }
              ]
              },
              {
                names: 'Ezakhiweni',
                surburb: [
                  {
                  name: 'Ezakhiweni SP',
                  ward: ['7', '100']
                }
              ]
              },
              {
                names: 'Ezihyathini',
                surburb: [
                  {
                  name: 'Ezihyathini SP',
                  ward: [ '72', '100']
                }
              ]
              },
              {
                names: 'Ezimangweni',
                surburb: [
                  {
                  name: 'Ezimangweni SP',
                  ward: ['67', '93', '94', '97']
                }
              ]
              },
              {
                names: 'Ezimbokodweni',
                surburb: [
                  {
                  name: 'Mancane ',
                  ward: ['93']
                },
                {
                  name: 'Msinsini',
                  ward: ['93']
                },
                {
                  name: 'New City ',
                  ward: ['67', '86', '89', '93', '94']
                },
                {
                  name: "Qhiph'Khowe ",
                  ward: ['93']
                },
              ]
              },
              {
                names: 'Ezimpisini',
                surburb: [
                  {
                  name: 'Ezimpisini SP',
                  ward: ['100']
                }
              ]
              },
              {
                names: 'Ezinyathini',
                surburb: [
                  {
                  name: 'Ezinyathini SP',
                  ward: ['84', '100']
                }
              ]
              },
              {
                names: 'Ezitendeni',
                surburb: [
                  {
                  name: 'Ezitendeni SP',
                  ward: ['4', '6', '7', '91']
                }
              ]
              },
              {
                names: 'Folweni',
                surburb: [
                  {
                  name: 'Folweni A',
                  ward: [ '95', '96']
                },
                {
                  name: 'Folweni B',
                  ward: ['67', '95', '96']
                },
                {
                  name: 'Folweni C',
                  ward: ['67', '95']
                },
              ]
              },
              {
                names: 'Gasa Section',
                surburb: [
                  {
                  name: 'Gasa Section SP',
                  ward: [ '4']
                }
              ]
              },
              {
                names: 'Ganazzano',
                surburb: [
                  {
                  name: 'Ganazzano SP',
                  ward: ['58']
                }
              ]
              },
              {
                names: 'Georgedale',
                surburb: [
                  {
                  name: 'Georgedale SP',
                  ward: ['5', '6']
                }
              ]
              },
              {
                names: 'Gillits',
                surburb: [
                  {
                  name: 'Chelmsfordville',
                  ward: ['10']
                }, 
                {
                  name: 'Clifton Park',
                  ward: ['10']
                }, 
                {
                  name: 'Everton ',
                  ward: ['8', '10']
                }, 
                {
                  name: 'Gillits SP',
                  ward: ['10']
                }, 
                {
                  name: 'St Helier',
                  ward: ['8', '10']
                },
                {
                  name: 'Winston Park',
                  ward: ['10', '15']
                } 
              ]
              },
              {
                names: 'Golokodo',
                surburb: [
                  {
                    name: 'Emakhazini',
                    ward: ['67', '94', '95']
                  }, 
                  {
                    name: 'Ensimbini',
                    ward: ['84', '85', '86', '94', '95', '96', '100']
                  },
                  {
                    name: 'Golokodo SP',
                    ward: ['67', '94', '95']
                  } 
              ]
              },
              {
                names: 'Graylands',
                surburb: [
                  {
                  name: 'Graylands SP',
                  ward: ['22', '58', '62']
                }
              ]
              },
              {
                names: 'Gunjini',
                surburb: [
                  {
                  name: 'Gunjini SP',
                  ward: ['3', '14', '18', '59', '60']
                }
              ]
              },
              {
                names: 'Hambanathi',
                surburb: [
                  {
                  name: 'Hambanathi SP',
                  ward: ['21', '61', '62']
                },
                {
                  name: 'Staramii',
                  ward: ['61']
                },
              ]
              },
              {
                names: 'Herare A',
                surburb: [
                  {
                  name: 'Herare A SP',
                  ward: ['4']
                }
              ]
              },
              {
                names: 'Herare B',
                surburb: [
                  {
                  name: 'Herare B SP',
                  ward: ['4']
                }
              ]
              },
              {
                names: 'Hezelmere ',
                surburb: [
                  {
                  name: 'Hezelmere SP',
                  ward: [ '60', '61']
                }
              ]
              },
              {
                names: 'Hillcrest',
                surburb: [
                  {
                  name: 'Albany',
                  ward: ['8']
                },
                {
                  name: 'Albina ',
                  ward: ['8']
                },
                {
                  name: 'Belvedere',
                  ward: ['8', '11']
                },
                {
                  name: 'Belvedere Ext 1',
                  ward: ['8']
                },
                {
                  name: 'Cotswold Down Golf & Country Estate',
                  ward: ['8', '9', '10']
                },
                {
                  name: 'Hillcrest SP',
                  ward: ['8', '9']
                },
                {
                  name: 'Hilldene',
                  ward: ['8', '9']
                },
                {
                  name: 'Plantations',
                  ward: ['10']
                },
                {
                  name: 'West Riding',
                  ward: ['8']
                },
              ]
              },
              {
                names: 'Illovo North',
                surburb: [
                  {
                  name: 'Illovo North SP',
                  ward: ['2', '67', '97', '98']
                }
              ]
              },
              {
                names: 'Imbozamo',
                surburb: [
                  {
                  name: 'Imbozamo SP',
                  ward: [ '2', '3', '17']
                }
              ]
              },
              {
                names: 'Inanda',
                surburb: [
                  {
                  name: 'Inanda Congo',
                  ward: ['44', '55', '56', '57']
                }
              ]
              },
              {
                names: 'Inanda A',
                surburb: [
                  {
                  name: 'Amatikwe',
                  ward: ['3', '56']
                },
                {
                  name: 'Amatikwe Area 10',
                  ward: ['3', '56']
                },
                {
                  name: 'Amatikwe Area 8',
                  ward: ['56', '57']
                },
                {
                  name: 'Amatikwe Area 9',
                  ward: [ '56']
                },
                {
                  name: 'Bhambayi',
                  ward: ['42', '52', '54', '55', '57']
                },
                {
                  name: 'Ezimangweni',
                  ward: ['42', '54', '55']
                },
                {
                  name: 'Glebe',
                  ward: ['3', '43', '44']
                },
                {
                  name: 'Goqokazi',
                  ward: [ '56', '57']
                },
                {
                  name: 'Ezimangweni',
                  ward: ['42', '54', '55']
                },
                {
                  name: 'Glebe',
                  ward: ['3', '43', '44']
                },
                {
                  name: 'Goqokazi',
                  ward: [ '56', '57']
                },
                {
                  name: 'Inanda A SP',
                  ward: ['42', '43', '43', '55']
                },
                {
                  name: 'Langalibalele',
                  ward: ['52', '53', '55', '56', '57']
                },
                {
                  name: 'Lindley',
                  ward: ['44', '55', '56', '57']
                },
                {
                  name: 'Mshayazafe',
                  ward: ['44', '55']
                },
                {
                  name: 'Newtown B',
                  ward: [ '42', '55']
                },
                {
                  name: 'Newtown C',
                  ward: ['42', '54', '57']
                },
                {
                  name: 'Nhlungwane',
                  ward: ['42', '47', '54']
                },
                {
                  name: 'Shembes Village',
                  ward: ['42', '54', '55', '57']
                },
                {
                  name: 'Soweto',
                  ward: ['42', '43', '44', '55']
                },
                {
                  name: 'Tafula',
                  ward: ['3', '56']
                }
              ]
              },
              {
                names: 'Inanda B',
                surburb: [
                  {
                  name: 'Inanda B SP',
                  ward: ['8', '103']
                }
              ]
              },
              {
                names: 'Inchanga',
                surburb: [
                  {
                  name: 'Inchanga SP',
                  ward: ['4', '103']
                },
                {
                  name: 'Inchanga West',
                  ward: ['1', '4']
                }
              ]
              },
              {
                names: 'Inkangala',
                surburb: [
                  {
                  name: 'Inkangala SP',
                  ward: ['2', '8', '16']
                }
              ]
              },
              {
                names: 'Inthuthuko',
                surburb: [
                  {
                  name: 'Inthuthuko SP',
                  ward: ['2', '4', '103']
                }
              ]
              },
              {
                names: 'Inwaba',
                surburb: [
                  {
                  name: 'Inwaba SP',
                  ward: ['13', '72', '84', '100']
                }
              ]
              },
              {
                names: 'Iqadi B',
                surburb: [
                  {
                  name: 'Phola Mission',
                  ward: ['3', '9', '44']
                }
              ]
              },
              {
                names: 'Isiqhoqhoqho',
                surburb: [
                  {
                  name: 'Isiqhoqhoqho SP',
                  ward: ['7', '103']
                }
              ]
              },
              {
                names: 'Iziko',
                surburb: [
                  {
                  name: 'Iziko SP',
                  ward: ['93', '94']
                }
              ]
              },
              {
                names: 'Kamba',
                surburb: [
                  {
                  name: 'Kamba SP',
                  ward: ['5']
                }
              ]
              },
              {
                names: 'Kingsburg',
                surburb: [
                  {
                  name: 'Astra Park',
                  ward: ['97', '98']
                },
                {
                  name: 'Doon Heights',
                  ward: ['97']
                },{
                  name: 'Doonside',
                  ward: ['97']
                },{
                  name: 'Illovo Beach',
                  ward: ['97']
                },{
                  name: 'Illovo Glen',
                  ward: ['97', '98']
                },{
                  name: 'Karridene ',
                  ward: ['97', '98']
                },{
                  name: 'Panorama Park',
                  ward: ['97', '98']
                },{
                  name: 'Shulton Park',
                  ward: ['67','97', '98']
                },{
                  name: 'St Winifreds',
                  ward: ['97']
                },{
                  name: 'Warner Beach',
                  ward: ['97']
                },
                {
                  name: 'Winklespruit',
                  ward: ['97', '98']
                }
              ]
              },
              {
                names: 'Klaarwater',
                surburb: [
                  {
                  name: 'Demat',
                  ward: ['13', '17', '71', '72', '77', '84', '100']
                },
                {
                  name: 'Klaarwater SP',
                  ward: ['17', '72']
                }
              ]
              },
              {
                names: 'Kloof',
                surburb: [
                  {
                  name: 'Ekuthuleni',
                  ward: ['19']
                },
                {
                  name: 'Forest Hill',
                  ward: ['9', '10']
                },
                {
                  name: 'Hilltop Gardens',
                  ward: ['9', '19']
                },
                {
                  name: 'Kloof SP',
                  ward: ['9', '10', '15', '18', '19', '21']
                },
                {
                  name: 'Krantzkloof Nature Reserve',
                  ward: ['9', '10', '19']
                },
                {
                  name: 'Motalabad',
                  ward: ['19', '21']
                },
                {
                  name: 'Ronaldskloof Ext',
                  ward: ['9', '10', '19']
                },
                {
                  name: 'Stockville',
                  ward: ['10', '15']
                },
                {
                  name: 'Zamokhuhe',
                  ward: ['9', '10', '19', '21']
                },
              ]
              },
              {
                names: 'Kontinga',
                surburb: [
                  {
                  name: 'Kontinga SP',
                  ward: ['7']
                }
              ]
              },
              {
                names: 'KwaCele',
                surburb: [
                  {
                  name: 'KwaCele SP',
                  ward: ['4']
                }
              ]
              },
              {
                names: 'KwaDabeka',
                surburb: [
                  {
                  name: 'KwaDabeka A',
                  ward: ['19', '20', '22', '92']
                },
                {
                  name: 'KwaDabeka B',
                  ward: ['19', '20', '92']
                },
                {
                  name: 'KwaDabeka C',
                  ward: ['20', '92']
                },
                {
                  name: 'KwaDabeka D',
                  ward: ['19', '20', '92']
                },
                {
                  name: 'KwaDabeka E',
                  ward: ['19', '20', '44']
                },
                {
                  name: 'KwaDabeka F',
                  ward: ['19', '20', '44']
                },
                {
                  name: 'KwaDabeka G',
                  ward: ['19', '20']
                },
                {
                  name: 'KwaDabeka H',
                  ward: ['19']
                },
                {
                  name: 'KwaDabeka J',
                  ward: ['19', '20']
                },
                {
                  name: 'KwaDabeka K',
                  ward: ['20', '22']
                },
                {
                  name: 'KwaDabeka L',
                  ward: ['20', '22', '92']
                },
                {
                  name: 'KwaDabeka R',
                  ward: ['19']
                },
                {
                  name: 'KwaDabeka S',
                  ward: ['19', '20', '22']
                },
                {
                  name: 'KwaDabeka SB',
                  ward: ['19', '20', '22', '37', '38', '44', '92']
                },
                {
                  name: 'KwaDabeka T',
                  ward: ['19', '20']
                },
                {
                  name: 'Siphumelele',
                  ward: ['9', '19', '44']
                }
              ]
              },
              {
                names: 'KwaDlembe',
                surburb: [
                  {
                  name: 'KwaDlembe SP',
                  ward: ['7']
                }
              ]
              },
              {
                names: 'KwaLandeza',
                surburb: [
                  {
                  name: 'KwaLandeza SP',
                  ward: ['5', '6']
                }
              ]
              },
              {
                names: 'KwaMashu',
                surburb: [
                  {
                  name: 'Besters',
                  ward: ['47', '54']
                  },{
                    name: 'Bridge City',
                    ward: ['46', '47', '48', '54']
                    },
                    {
                      name: 'Corovoca Township',
                      ward: ['11', '39', '40', '102']
                      },{
                        name: 'Dalefarm',
                        ward: ['48', '54', '102']
                        },

                        {
                          name: 'Duffs Road',
                          ward: ['39', '54', '102']
                          },
                          {
                            name: 'Emakhosini',
                            ward: ['46', '47', '54']
                            },
                            {
                              name: 'Emgidweni',
                              ward: ['39', '40', '46', '102']
                              },
                              {
                                name: 'Emlandweni',
                                ward: ['45', '46', '47']
                                },
                                {
                                  name: 'Emlanjeni',
                                  ward: ['11','40', '41', '45', '46']
                                  },
                                  {
                                    name: 'Enkanyisweni',
                                    ward: ['46', '47']
                                    },
                                    {
                                      name: 'KwaMashu A',
                                      ward: ['39', '40', '46', '54', '102']
                                      },
                                      {
                                        name: 'KwaMashu J',
                                        ward: ['41', '45', '47']
                                        },
                                        {
                                          name: 'KwaMashu K',
                                          ward: ['38', '41', '45']
                                          },
                                          {
                                            name: 'KwaMashu M',
                                            ward: ['45', '47', '54']
                                            },
                                            {
                                              name: 'KwaMashu N',
                                              ward: ['45', '47']
                                              },
                                              {
                                                name: 'KwaMashu P',
                                                ward: ['41', '45', '46', '47']
                                              },
                                                {
                                                  name: 'KwaMashu Q',
                                                  ward: ['46', '47', '54']
                                                  },
                                                  {
                                                    name: 'Mount Moriah',
                                                    ward: ['34', '35', '48', '102']
                                                    },
              ]
              },
              {
                names: 'KwaMbiza',
                surburb: [
                  {
                  name: 'KwaMbiza SP',
                  ward: ['7']
                }
              ]
              },
              {
                names: 'KwaMtamtengayo ',
                surburb: [
                  {
                  name: 'KwaMtamtengayo SP',
                  ward: ['6', '7', '100']
                }
              ]
              },
              {
                names: 'KwaNdengezi',
                surburb: [
                  {
                  name: 'Angola Block E',
                  ward: ['13', '14']
                },
                {
                  name: 'Coffee Farm',
                  ward: ['12', '14', '100']
                },
                {
                  name: 'Dassenhoek',
                  ward: ['14','15']
                },
                {
                  name: 'Emansenseni A',
                  ward: ['7','12', '14','15']
                },
                {
                  name: 'Epitoli',
                  ward: ['12']
                },
                {
                  name: 'Kwalinda SP',
                  ward: ['7','12', '14']
                },
                {
                  name: 'KwaNdengezi SP',
                  ward: ['7','12', '14','100']
                },
                {
                  name: 'Lusaka Block D',
                  ward: ['13', '14','15']
                },
                {
                  name: 'Mozambique B',
                  ward: ['14', '15']
                },
                {
                  name: 'Namibia C',
                  ward: ['12', '14']
                }
              ]
              },
              {
                names: 'KwaNgcolosi',
                surburb: [
                  {
                  name: 'KwaNgcolosi SP',
                  ward: ['8', '9']
                }
              ]
              },
              {
                names: 'KwaNqetho',
                surburb: [
                  {
                  name: 'KwaNqetho SP',
                  ward: ['8', '9']
                }
              ]
              },
              {
                names: 'Kwantamnteng',
                surburb: [
                  {
                  name: 'Kwantamnteng SP',
                  ward: ['7', '100']
                }
              ]
              },
              {
                names: 'KwaNyuswa ',
                surburb: [
                  {
                  name: 'KwaNyuswa SP',
                  ward: ['2', '103']
                }
              ]
              },
              {
                names: 'KwaSondela',
                surburb: [
                  {
                  name: 'KwaSondela SP',
                  ward: ['4', '103']
                }
              ]
              },
              {
                names: 'La Mercy',
                surburb: [
                  {
                  name: 'La Mercy Airport',
                  ward: ['58', '61']
                },
                {
                  name: 'La Mercy SP',
                  ward: ['58']
                }
              ]
              },
              {
                names: 'Lower Molweni',
                surburb: [
                  {
                  name: 'Lower Molweni SP',
                  ward: ['9', '19']
                }
              ]
              },
              {
                names: 'Luganda',
                surburb: [
                  {
                  name: 'Luganda SP',
                  ward: ['13', '72', '100']
                }
              ]
              },
              {
                names: 'Luthele',
                surburb: [
                  {
                  name: 'Luthele SP',
                  ward: ['9']
                }
              ]
              },
              {
                names: 'Luthuli',
                surburb: [
                  {
                  name: 'Luthuli SP',
                  ward: ['6', '7']
                }
              ]
              },
              {
                names: 'Mabedlana A',
                surburb: [
                  {
                  name: 'Mabedlana A SP',
                  ward: ['2']
                }
              ]
              },
              {
                names: 'Mabedlana B',
                surburb: [
                  {
                  name: 'Mabedlana B SP',
                  ward: ['2']
                }
              ]
              },
              {
                names: 'Mabedlana C',
                surburb: [
                  {
                  name: 'Mabedlana C SP',
                  ward: ['2', '103']
                }
              ]
              },
              {
                names: 'Mabedlana D',
                surburb: [
                  {
                  name: 'Mabedlana D SP',
                  ward: ['2']
                }
              ]
              },
              {
                names: 'Mabedlana E',
                surburb: [
                  {
                  name: 'Mabedlana E SP',
                  ward: ['2', '8']
                }
              ]
              },
              {
                names: 'Madudubala',
                surburb: [
                  {
                  name: 'Madudubala SP',
                  ward: ['3', '99']
                }
              ]
              },
              {
                names: 'Madundube',
                surburb: [
                  {
                  name: 'Madundube SP',
                  ward: ['1', '5', '84', '96', '100']
                }
              ]
              },
              {
                names: 'Madwaleni',
                surburb: [
                  {
                  name: 'Madwaleni SP',
                  ward: ['4']
                }
              ]
              },
              {
                names: 'Magabeni',
                surburb: [
                  {
                  name: 'Magabeni SP',
                  ward: ['99']
                }
              ]
              },
              {
                names: 'Mahlabathini',
                surburb: [
                  {
                  name: 'Mahlabathini SP',
                  ward: ['2', '3', '8', '9']
                }
              ]
              },{
                names: 'Malagazi',
                surburb: [
                  {
                  name: 'Ebhodini ',
                  ward: ['93']
                },
                {
                  name: 'Emahlabathini ',
                  ward: ['93']
                },
                {
                  name: 'Eplangweni ',
                  ward: ['93', '94']
                },
                {
                  name: 'Ezimbokodweni ',
                  ward: ['89', '90', '93']
                },
                {
                  name: 'KwaMakhutha ',
                  ward: ['67', '93', '94']
                },
                {
                  name: 'Rhemia ',
                  ward: [ '93']
                }
              ]
              },
              {
                names: 'Malukazi',
                surburb: [
                  {
                  name: 'Malukazi SP',
                  ward: ['85', '86', '89', '90', '93']
                }
              ]
              },{
                names: 'Mandlakazi B',
                surburb: [
                  {
                  name: 'Mandlakazi B SP',
                  ward: ['7']
                }
              ]
              },
              {
                names: 'Maromeni',
                surburb: [
                  {
                  name: 'Maromeni SP',
                  ward: ['9']
                }
              ]
              },
              {
                names: 'Matabetule',
                surburb: [
                  {
                  name: 'Lower Manaza',
                  ward: ['2', '3', '8', '9', '44', '56']
                }
              ]
              },
              {
                names: 'Mawothi',
                surburb: [
                  {
                  name: 'Cuba ',
                  ward: ['53', '59']
                },
                {
                  name: 'eKafuleni A',
                  ward: ['3', '56']
                },
                {
                  name: 'Lower Angola',
                  ward: ['53', '57']
                },
                {
                  name: 'Lusaka 1',
                  ward: ['53']
                },
                {
                  name: 'Lusaka 2',
                  ward: ['5']
                },
                {
                  name: 'Mawothi E',
                  ward: ['53', '56', '57']
                },
                {
                  name: 'Mawothi F',
                  ward: ['53', '56', '57']
                },
                {
                  name: 'Mawothi SP1',
                  ward: ['56', '57']
                },
                {
                  name: 'Mawothi SP1',
                  ward: ['53', '56', '59']
                },
                {
                  name: 'Moscouw',
                  ward: ['53', '59']
                },
                {
                  name: 'Namibia',
                  ward: ['53']
                },
                {
                  name: 'Nigeria',
                  ward: ['53', '59']
                },
                {
                  name: 'Palestine',
                  ward: ['53']
                },
                {
                  name: 'Tanzania',
                  ward: ['53', '57']
                },
                {
                  name: 'Trenance Park',
                  ward: ['51', '53', '59', '60']
                },
                {
                  name: 'Upper Maotana',
                  ward: ['53','56', '59']
                },
                {
                  name: 'Zambia',
                  ward: ['53', '57']
                },
                {
                  name: 'Zimbabwe',
                  ward: ['52','53', '57']
                }
              ]
              },{
                names: 'Mgandeni',
                surburb: [
                  {
                  name: 'Matata',
                  ward: ['2', '3', '17']
                }
              ]
              },
              {
                names: 'Mgangeni',
                surburb: [
                  {
                  name: 'Mgangeni SP',
                  ward: ['2', '3', '8']
                }
              ]
              },{
                names: 'Mgezanyoni',
                surburb: [
                  {
                  name: 'Mgezanyoni SP',
                  ward: ['2']
                }
              ]
              },
              {
                names: 'Mkholombe',
                surburb: [
                  {
                  name: 'Mkholombe SP',
                  ward: ['8', '103']
                }
              ]
              },{
                names: 'Mhlalanja',
                surburb: [
                  {
                  name: 'Mhlalanja SP',
                  ward: ['1', '2', '8']
                }
              ]
              },
              {
                names: 'Mngcweni',
                surburb: [
                  {
                  name: 'Mngcweni SP',
                  ward: ['1', '4']
                }
              ]
              },{
                names: 'Molweni',
                surburb: [
                  {
                  name: 'Lower Langefontein',
                  ward: ['9']
                }
              ]
              },
              {
                names: 'Molweni A',
                surburb: [
                  {
                  name: 'Molweni A SP',
                  ward: ['9']
                }
              ]
              },{
                names: 'Molweni B',
                surburb: [
                  {
                  name: 'Molweni B SP',
                  ward: ['3', '9']
                }
              ]
              },
              {
                names: 'Molweni C',
                surburb: [
                  {
                  name: 'Molweni C SP',
                  ward: ['9']
                }
              ]
              },{
                names: 'Molweni D',
                surburb: [
                  {
                  name: 'Molweni D SP',
                  ward: ['9', '19', '44']
                }
              ]
              },
              {
                names: 'Mophela',
                surburb: [
                  {
                  name: 'Mophela SP',
                  ward: ['4','5', '6', '11']
                }
              ]
              },
              {
                names: 'Motalabad',
                surburb: [
                  {
                  name: 'Motalabad SP',
                  ward: ['9', '19']
                }
              ]
              },
              {
                names: 'Mount Edgecombe',
                surburb: [
                  {
                  name: 'Kindlewood Estate',
                  ward: ['35', '102']
                },
                {
                  name: 'Mount Edgecombe Country Estate 1',
                  ward: ['102']
                },
                {
                  name: 'Mount Edgecombe Country Estate 2',
                  ward: ['35', '48', '102']
                },
                {
                  name: 'Mount Edgecombe SP',
                  ward: ['48', '49', '50', '102']
                }
              ]
              },{
                names: 'Mount Moreland',
                surburb: [
                  {
                  name: 'Mount Moreland SP',
                  ward: ['93', '94']
                }
              ]
              },
              {
                names: 'Moya',
                surburb: [
                  {
                  name: 'Moya SP',
                  ward: ['4','5', '6']
                }
              ]
              },{
                names: 'Mpola A',
                surburb: [
                  {
                  name: 'Mpola A SP',
                  ward: ['14', '15']
                }
              ]
              },
              {
                names: 'Mpola B',
                surburb: [
                  {
                  name: 'Mpola B SP',
                  ward: ['13', '15']
                }
              ]
              },{
                names: 'Mpuma',
                surburb: [
                  {
                  name: 'Mpuma SP',
                  ward: ['1', '4']
                }
              ]
              },
              {
                names: 'Mpumalanga',
                surburb: [
                  {
                  name: 'Elangeni',
                  ward: ['4', '6']
                },
                {
                  name: 'Hammars Estate',
                  ward: ['4','5', '6']
                },
                {
                  name: 'Mpumalanga A',
                  ward: ['5', '6', '91']
                },
                {
                  name: 'Mpumalanga B',
                  ward: ['5', '6', '91']
                },
                {
                  name: 'Mpumalanga C',
                  ward: ['6', '91']
                },
                {
                  name: 'Mpumalanga D',
                  ward: [ '7', '91']
                },
                {
                  name: 'Mpumalanga E',
                  ward: ['91']
                },
                {
                  name: 'Mpumalanga East',
                  ward: ['4', '6', '91']
                },
                {
                  name: 'Mpumalanga F',
                  ward: ['6', '91']
                },
                {
                  name: 'Mpumalanga G',
                  ward: ['6', '91']
                },
                {
                  name: 'Mpumalanga H',
                  ward: ['6', '7', '91']
                },
                {
                  name: 'Zamani',
                  ward: ['6', '7', '91']
                },
              ]
              },{
                names: 'Mshazi',
                surburb: [
                  {
                  name: 'Mshazi SP',
                  ward: ['2', '8']
                }
              ]
              },
              {
                names: 'Mshazi Skhambane',
                surburb: [
                  {
                  name: 'Mshazi Skhambane SP',
                  ward: ['2', '8']
                }
              ]
              },{
                names: 'Msunduzi',
                surburb: [
                  {
                  name: 'Msunduzi SP',
                  ward: ['1', '2']
                }
              ]
              },
              {
                names: 'New Glasgow',
                surburb: [
                  {
                  name: 'New Glasgow SP',
                  ward: ['59', '60']
                }
              ]
              },{
                names: 'Newlands east',
                surburb: [
                  {
                  name: 'Avoca Hills',
                  ward: ['11', '34', '102']
                },
                {
                  name: 'Esibubulungu ',
                  ward: ['11', '40', '41', '102']
                },
                {
                  name: 'Hippo Road',
                  ward: ['11', '34']
                },
                {
                  name: 'Melkhoute',
                  ward: ['11', '40', '102']
                },
                {
                  name: 'New Dawn Park',
                  ward: ['11', '34']
                },
                {
                  name: 'Newlands East SP',
                  ward: ['11', '34', '37', '41']
                },
                {
                  name: 'Riverhorse Valley',
                  ward: ['11', '34', '102']
                }
              ]
              },
              {
                names: 'Newlands West',
                surburb: [
                  {
                  name: 'Briardale',
                  ward: ['11', '37', '41']
                },
                {
                  name: 'Castle Hill',
                  ward: ['37', '38', '41']
                },
                {
                  name: 'Earlsfield',
                  ward: ['23', '37']
                },
                {
                  name: 'Fosaville',
                  ward: ['11', '34', '37']
                },
                {
                  name: 'Hillgrove',
                  ward: ['11', '23', '34', '37']
                },
                {
                  name: 'Newlands West SP',
                  ward: ['11', '37', '41']
                },
                {
                  name: 'Parlock',
                  ward: ['11', '23', '25', '34']
                },
                {
                  name: 'Riverdene',
                  ward: ['37', '92']
                },
                {
                  name: 'Steelcastle',
                  ward: ['11', '37']
                },
                {
                  name: 'Westrich',
                  ward: ['37', '38', '41', '92']
                }
              ]
              },
              {
                names: 'Ngqungqulu',
                surburb: [
                  {
                  name: 'Molweni',
                  ward: ['9']
                  }
                ]
              },
              {
                names: 'Nkangala',
                surburb: [
                  {
                  name: 'Nkangala SP',
                  ward: ['9']
                  }
                ]
              },
              {
                names: 'Nkomokazi',
                surburb: [
                  {
                  name: 'Nkomokazi SP',
                  ward: ['6', '7', '100']
                  }
                ]
              },
              {
                names: 'Nonoti',
                surburb: [
                  {
                  name: 'Nonoti SP',
                  ward: ['1', '2']
                  }
                ]
              },
              {
                names: 'Nqobane',
                surburb: [
                  {
                  name: 'Nqobane SP',
                  ward: ['100']
                  }
                ]
              },
              {
                names: 'Ntongela',
                surburb: [
                  {
                  name: 'Ntongela SP',
                  ward: ['4']
                  }
                ]
              },
              {
                names: 'Ntshongweni A',
                surburb: [
                  {
                  name: 'Ntshongweni A SP',
                  ward: ['6', '7']
                  }
                ]
              },
              {
                names: 'Ntshongweni B',
                surburb: [
                  {
                  name: 'Ntshongweni B SP',
                  ward: ['7', '103']
                  }
                ]
              },
              {
                names: 'Ntukuso',
                surburb: [
                  {
                  name: 'Ntukuso SP',
                  ward: ['1', '2', '3']
                  }
                ]
              },
            /*  {
                
                names: 'Ntuzuma',
                surburb: [
                  {
                  name: 'Briardale',
                  ward: ['11', '37', '41']
                  },
                ]
              },*/
              {
                names: 'Nungwane',
                surburb: [
                  {
                  name: 'Nungwane SP',
                  ward: ['1', '5', '96', '100']
                  }
                ]
              },
              {
                names: 'Ocean Drive-In',
                surburb: [
                  {
                  name: 'Ocean Drive-In SP',
                  ward: ['58']
                  }
                ]
              },
              {
                names: 'Olwambeni',
                surburb: [
                  {
                  name: 'Olwambeni SP',
                  ward: ['7', '100']
                  }
                ]
              },
              {
                names: 'Outer West Durban',
                surburb: [
                  {
                  name: 'Assagay',
                  ward: ['8', '10', '103']
                  },
                  {
                    name: 'Bothas Hill',
                    ward: ['8', '103']
                    },
                    {
                      name: 'Bux Farm',
                      ward: ['103']
                      },
                      {
                        name: 'Summerveld',
                        ward: ['7', '103']
                        }

                ]
              },
              {
                names: 'Palmcliffe',
                surburb: [
                  {
                  name: 'Palmcliffe SP',
                  ward: ['99']
                  }
                ]
              },
              {
                names: 'Panekeni',
                surburb: [
                  {
                  name: 'Panekeni SP',
                  ward: ['4']
                  }
                ]
              },
              {
                names: 'Phoenix',
                surburb: [
                  {
                  name: 'Brookdale',
                  ward: ['49', '51', '52', '52', '53']
                  },
                  {
                  name: 'Caneside',
                  ward: ['49', '51', '52', '52']
                  },
                  {
                    name: 'Centenary Park',
                    ward: ['48', '102']
                    },
                    {
                  name: 'Clayfield',
                  ward: ['48', '49']
                  },
                  {
                    name: 'Eastbury',
                    ward: ['48', '49', '50', '102']
                    },
                    {
                      name: 'Foresthaven',
                      ward: ['50', '51']
                      },
                      {
                        name: 'Greenbury',
                        ward: ['48', '102']
                        },
                        {
                          name: 'Groove End',
                          ward: ['49', '50', '102']
                        },
                        {
                            name: 'Lenham',
                            ward: ['52']
                        },
                        {
                            name: 'Longcroft',
                            ward: ['48', '49']
                        },

                        {
                            name: 'Northcroft',
                            ward: ['49', '52']
                        },
                        {
                            name: 'Palmview',
                            ward: ['50', '51', '59']
                        },
                        {
                            name: 'Phoenix Industrial',
                            ward: ['48', '49', '54', '102']
                        },
                        {
                            name: 'Rainham',
                            ward: ['48', '102']
                        },
                        {
                          name: 'Redfern',
                          ward: ['48', '49', '52', '54', '57']
                      },
                      {
                        name: 'Rockford',
                        ward: ['48','49','102']
                    },
                    {
                      name: 'Rydalvale',
                      ward: ['48', '49', '52', '54']
                    },
                  {
                    name: 'Shastri Park',
                    ward: ['50', '51', '53','59' ]
                },
                {
                  name: 'Southgate',
                  ward: ['48', '102']
              },
              {
                name: 'Stanmore',
                ward: ['49', '50']
            },
            {
              name: 'Starwood',
              ward: ['49', '52']
          },
          {
            name: 'Stonebridge',
            ward: ['48', '102']
        },
        {
          name: 'Sunford',
          ward: ['49', '50', '51', '52']
      },
      {
        name: 'Trenance Manor',
        ward: ['50', '51', '53', '59']
    },
    {
      name: 'Westham',
      ward: ['52', '53', '57']
  },
  {
    name: 'Whetstone',
    ward: ['49', '52', '54']
},
{
  name: 'Woodview',
  ward: ['50', '51', '102']
}

                ]
              },
              {
                names: 'Phola Mission',
                surburb: [
                  {
                  name: 'Phola Mission SP',
                  ward: ['3', '44', '56']
                  },
                ]
              },
              {
                names: 'Pinetown ',
                surburb: [
                  {
                  name: 'Acorn',
                  ward: ['13']
                  },
                  {
                    name: 'Alexander Park',
                    ward: ['15', '18']
                    },
                    {
                      name: 'Ashley',
                      ward: ['15', '16', '18']
                    },
                      {
                        name: 'Berkshire Downs',
                        ward: ['18', '19', '21']
                        },
                        {
                          name: 'Birchwood',
                          ward: ['13', '14', '100']
                          },
                          {
                            name: 'Caversham Glen',
                            ward: ['16']
                            },
                            {
                              name: 'Clover Dairies Industial',
                              ward: ['17', '63']
                              },
                              {
                                name: 'Cowies Hill',
                                ward: ['16', '18']
                                },
                                {
                                  name: 'Cowies Hill Park',
                                  ward: ['16', '18']
                                  },
                                  {
                                    name: 'Falcon Industrial Park',
                                    ward: ['18', '21']
                                    },
                                    {
                                      name: 'Farningham Ridge',
                                      ward: ['16', '63']
                                      },
                                      {
                                        name: 'Fields Hill',
                                        ward: ['15', '18']
                                        },
                                        {
                                          name: 'Glen Park',
                                          ward: ['16', '18', '63']
                                          },
                                          {
                                            name: 'Hagart Road Industrial',
                                            ward: ['16', '18']
                                            },
                                            {
                                              name: 'Hatton Estate SP1',
                                              ward: ['16', '18']
                                            },
                                            {
                                              name: 'Hatton Estate SP2',
                                              ward: ['18', '21']
                                              },
                                              {
                                                name: 'Mohogany Ridge',
                                                ward: ['10', '15']
                                                },
                                                {
                                                  name: 'Manors',
                                                  ward: ['10', '15', '18', '19', '21']
                                                  },
                                                  {
                                                    name: 'Mariann Industrial Park',
                                                    ward: ['16', '17', '63']
                                                    },
                                                    {
                                                      name: 'Mariannheights',
                                                      ward: ['13', '15', '16', '17']
                                                      },
                                                      {
                                                        name: 'Mariannhill',
                                                        ward: ['13', '15', '16']
                                                        },
                                                        {
                                                          name: 'Mariannhill Park',
                                                          ward: ['15', '16']
                                                          },
                                                          {
                                                          name: 'Mariannridge',
                                                          ward: ['13' ,'15', '16', '17']
                                                          },
                                                          {
                                                            name: 'Mawelewewele',
                                                            ward: ['17', '72']
                                                            },
                                                            {
                                                          name: 'Maxmead',
                                                          ward: ['10', '15', '18']
                                                          },
                                                          {
                                                            name: 'Mazakhele',
                                                            ward: ['13', '15']
                                                            },
                                                            {
                                                              name: 'Moseley',
                                                              ward: ['15', '16']
                                                              },
                                                              {
                                                                name: 'Moseley Park',
                                                                ward: ['16', '18', '63']
                                                                },
                                                                {
                                                                  name: 'Motala Heights',
                                                                  ward: ['10', '15']
                                                                  },
                                                                  {
                                                                    name: 'Mountain Ridge',
                                                                    ward: ['18', '21', '92']
                                                                    },
                                                                    {
                                                                      name: 'Nagina',
                                                                      ward: ['13', '17']
                                                                      },
                                                                      {
                                                                        name: 'Narazeth',
                                                                        ward: ['16', '63']
                                                                        },
                                                                        {
                                                                          name: 'Narazeth Island',
                                                                          ward: ['15','16', '63']
                                                                          },
                                                                          {
                                                                            name: 'New Germany',
                                                                            ward: ['15', '16', '18']
                                                                            },
                                                                            {
                                                                        name: 'New Germany Industrial Park',
                                                                        ward: ['18', '21']
                                                                        },
                                                                        {
                                                                        name: 'Nirvana Hills',
                                                                        ward: ['17', '63']
                                                                        },
                                                                        {
                                                                          name: 'North Industria',
                                                                          ward: ['18', '21']
                                                                          },
                                                                          {
                                                                            name: 'Nsiswakazi',
                                                                            ward: ['13', '16', '17', '72']
                                                                            },
                                                                            {
                                                                              name: 'Oaklands 2',
                                                                              ward: ['13', '14', '15']
                                                                              },
                                                                              {
                                                                                name: 'Paradise Valley',
                                                                                ward: ['16', '18', '63']
                                                                                },
                                                                                {
                                                                                  name: 'Phumphele',
                                                                                  ward: ['17']
                                                                                  },
                                                                                  {
                                                                                    name: 'Pinelands',
                                                                                    ward: ['16', '18']
                                                                                    },
                                                                                    {
                                                                                      name: 'Pineside',
                                                                                      ward: ['18', '21']
                                                                                      },
                                                                                      {
                                                                                        name: 'Pineview',
                                                                                        ward: ['13']
                                                                                        },
                                                                                        {
                                                                                          name: 'Regency Park',
                                                                                          ward: ['13','17', '72']
                                                                                          },
                                                                                          {
                                                                                            name: 'Sarnia',
                                                                                            ward: ['16', '18']
                                                                                            },
                                                                                            {
                                                                                              name: 'Savannah Park',
                                                                                              ward: ['17', '63']
                                                                                              },
                                                                                              {
                                                                                                name: 'Sithundu Hill',
                                                                                                ward: ['13', '100']
                                                                                                },
                                                                                                {
                                                                                                  name: 'Southmead',
                                                                                                  ward: ['16', '63']
                                                                                                  },
                                                                                                  {
                                                                                                    name: 'St Wendolins Ridge',
                                                                                                    ward: ['16', '17', '63']
                                                                                                    },
                                                                                                    {
                                                                                                      name: 'Surprise Farm',
                                                                                                      ward: ['15', '18']
                                                                                                      },
                                                                                                      {
                                                                                                        name: 'The Wolds',
                                                                                                        ward: ['18', '19', '21']
                                                                                                        },
                                                                                                        {
                                                                                                          name: 'Thornwood',
                                                                                                          ward: ['13', '15']
                                                                                                          },
                                                                                                          {
                                                                                                            name: 'Tollgate',
                                                                                                            ward: ['7', '10', '13', '14', '15', '16']
                                                                                                            },
                                                                                                            {
                                                                                                              name: 'Umshinini',
                                                                                                              ward: ['13', '16', '17']
                                                                                                              },
                                                                                                              {
                                                                                                                name: 'Westmead',
                                                                                                                ward: ['15', '16', '18']
                                                                                                                },
                                                                                                                {
                                                                                                                  name: 'Westmead Ext',
                                                                                                                  ward: ['10', '15']
                                                                                                                  },
                                                                                                                  {
                                                                                                                    name: 'Woodside',
                                                                                                                    ward: ['18']
                                                                                                                    },
                                                                                                                    {
                                                                                                                    name: 'Zilweleni',
                                                                                                                    ward: ['13', '14']
                                                                                                                    },
                                                                                                                    



                ]
              },
              {
                names: 'Qhodela ',
                surburb: [
                  {
                  name: 'Qhodela SP',
                  ward: ['1', '2', '4', '8']
                  },
                ]
              },
              {
                names: 'Queensburgh',
                surburb: [
                  {
                  name: 'Buffels Bosch',
                  ward: ['17', '63', '65', '71']
                  },
                  {
                    name: 'Burlington Greenfiels',
                    ward: ['63', '65', '70', '71']
                    },
                    {
                      name: 'Escombe',
                      ward: ['18', '24', '63', '65']
                      },
                      {
                        name: 'Malvern',
                        ward: ['24', '29', '63', '65']
                        },
                        {
                          name: 'Northdene',
                          ward: ['63']
                          },
                          {
                            name: 'Queensmead Industrial',
                            ward: ['65']
                            },
                            {
                              name: 'Shallcross',
                              ward: ['17', '63', '71']
                              },
                              {
                                name: 'Shallcross Ext 2 SP 1',
                                ward: ['63', '65', '70', '71']
                                },
                                {
                                  name: 'Shallcross Ext 2 SP 2',
                                  ward: ['65']
                                  }
                ]
              },
              {
                names: 'Redcliffe',
                surburb: [
                  {
                  name: 'Buffelsdraai',
                  ward: ['56', '59']
                  },
                  {
                    name: 'Buffelsdraai AH',
                    ward: ['3','56', '59']
                  },
                    {
                      name: 'Redcliffe AH',
                      ward: ['59', '60']
                      },
                      {
                        name: 'Redcliffe Informal',
                        ward: ['60']
                        },
                        {
                          name: 'Redcliffe SP',
                          ward: ['59', '60']
                          },
                          {
                            name: 'Roodekrans',
                            ward: ['59', '60']
                          },
                ]
              },
              {
                names: 'Rietvallei',
                surburb: [
                  {
                  name: 'Rietvallei SP',
                  ward: ['4']
                  },
                ]
              },
              {
                names: 'Roseneath',
                surburb: [
                  {
                  name: 'Roseneath SP',
                  ward: ['3', '99']
                  },
                ]
              },
              {
                names: 'Salem',
                surburb: [
                  {
                  name: 'Salem SP',
                  ward: ['7']
                  },
                ]
              },
              {
                names: 'Sankontshe',
                surburb: [
                  {
                  name: 'Sankontshe SP',
                  ward: ['4', '5']
                  },
                ]
              },
              {
                names: 'Senzokuhle',
                surburb: [
                  {
                  name: 'Ngonweni',
                  ward: ['3', '17', '18', '59']
                  },
                  {
                    name: 'Upper Manzana',
                    ward: ['3', '17']
                    }
                ]
              },
              {
                names: 'Seventeen',
                surburb: [
                  {
                  name: 'Seventeen SP',
                  ward: ['7']
                  }
                ]
              },
              {
                names: 'Sgubudwini',
                surburb: [
                  {
                  name: 'Sgubudwini SP',
                  ward: ['13', '14', '100']
                  }
                ]
              },
              {
                names: 'Shongweni',
                surburb: [
                  {
                  name: 'Shongweni Resource Reserve',
                  ward: ['7']
                  }
                ]
              },
              {
                names: 'Sithumba',
                surburb: [
                  {
                  name: 'Sithumba SP',
                  ward: ['1', '2', '4', '103']
                  }
                ]
              },
              {
                names: 'Siweni',
                surburb: [
                  {
                  name: 'Siweni SP',
                  ward: ['1', '2']
                  }
                ]
              },
              {
                names: 'Siyanda',
                surburb: [
                  {
                  name: 'Siyanda A',
                  ward: ['11', '40', '41']
                  },
                  {
                    name: 'Siyanda B',
                    ward: ['11', '37', '41']
                    },
                    {
                      name: 'Siyanda C',
                      ward: ['41']
                      },
                ]
              },
              {
                names: 'St. Lawrence ',
                surburb: [
                  {
                  name: 'St. Lawrence SP',
                  ward: ['2','103']
                  }
                ]
              },
              {
                names: 'Thandaza',
                surburb: [
                  {
                  name: 'Thandaza SP',
                  ward: ['4', '5']
                  }
                ]
              },
              {
                names: 'Thornwood',
                surburb: [
                  {
                  name: 'Thornwood SP',
                  ward: ['13', '14', '15']
                  }
                ]
              },
              {
                names: 'Thornwood',
                surburb: [
                  {
                  name: 'Thornwood SP',
                  ward: ['13', '14', '15']
                  }
                ]
              },
              {
                names: 'Thusumuntu',
                surburb: [
                  {
                  name: 'Thusumuntu SP',
                  ward: ['2', '8', '103']
                  }
                ]
              },
              {
                names: 'Tin Town',
                surburb: [
                  {
                  name: 'Tin Town SP',
                  ward: ['9']
                  }
                ]
              },
              {
                names: 'Tongaat',
                surburb: [
                  {
                  name: 'Amanzimnyama',
                  ward: ['58', '61', '62']
                  },
                  {
                    name: 'Belvedere',
                    ward: ['61']
                    },
                    {
                      name: 'Buffelsdale',
                      ward: ['58', '61']
                      },
                      {
                        name: 'Burbreeze',
                        ward: ['62']
                        },
                        {
                          name: 'Chelmsford Heights',
                          ward: ['58', '61']
                        },
                          {
                            name: 'Fairbreeze',
                            ward: ['62']
                            },
                            {
                              name: 'Flamingo Heights',
                              ward: ['61']
                              },
                              {
                                name: 'Gandhinagar',
                                ward: ['61']
                                },
                                {
                                  name: "Gandhi's Hill",
                                  ward: ['58', '61', '62']
                                },
                                  {
                                    name: 'Gwala',
                                    ward: ['61']
                                    },
                                    {
                                      name: 'Hospital Hill',
                                      ward: ['61']
                                      },
                                      {
                                        name: 'Magaweni',
                                        ward: ['58', '62']
                                        },
                                        {
                                          name: 'Maidstone',
                                          ward: ['62']
                                          },
                                          {
                                            name: 'Mitchell Village',
                                            ward: ['58', '61']
                                            },
                                            {
                                              name: 'Mithangar',
                                              ward: ['58', '61']
                                              },
                                              {
                                                name: 'Newtown',
                                                ward: ['62']
                                                },
                                                {
                                                  name: 'Sandfields',
                                                  ward: ['62']
                                                  },
                                                  {
                                                    name: 'Tongaat Industrial',
                                                    ward: ['58', '62']
                                                    },
                                                    {
                                                      name: 'Tongaat Mews',
                                                      ward: ['58','61']
                                                      },
                                                      {
                                                        name: 'Tongaat SP',
                                                        ward: ['62']
                                                        },
                                                        {
                                                          name: 'Trurolands',
                                                          ward: ['61']
                                                          },
                                                          {
                                                            name: 'Vanrova',
                                                            ward: ['61','62']
                                                            },
                                                            {
                                                              name: 'Waterways',
                                                              ward: ['61','62']
                                                              },
                                                              {
                                                                name: 'Watsonia',
                                                                ward: ['61']
                                                                },
                                                                
                ]
              },
              {
                names: 'Tongaat Beach',
                surburb: [
                  {
                  name: 'Tongaat Beach SP',
                  ward: ['58']
                  }
                ]
              },
              {
                names: 'Tshelimnyama',
                surburb: [
                  {
                  name: 'Tshelimnyama SP',
                  ward: ['14', '15']
                  }
                ]
              },
              {
                names: 'Umbhayi',
                surburb: [
                  {
                  name: 'Umbhayi SP',
                  ward: ['61']
                  }
                ]
              },
              {
                names: 'Umbumbulu',
                surburb: [
                  {
                  name: 'Umbumbulu SH',
                  ward: ['99']
                  },
                  {
                    name: 'Umbumbulu SP',
                    ward: ['5', '6', '100']
                    }
                ]
              },
              {
                names: 'Umdloti',
                surburb: [
                  {
                  name: 'Newsel Beach',
                  ward: ['58']
                  },
                  {
                    name: 'Selection Beach',
                    ward: ['58', '102']
                    },
                    {
                      name: 'Umdloti Beach',
                      ward: ['58']
                      }
                ]
              },
              {
                names: 'Umgababa South',
                surburb: [
                  {
                  name: 'Umgababa South SP',
                  ward: ['97', '98', '99']
                  }
                ]
              },
              {
                names: 'Umgababa',
                surburb: [
                  {
                  name: 'Umgababa SP',
                  ward: ['9', '44']
                  }
                ]
              },
              {
                names: 'Umngeni',
                surburb: [
                  {
                  name: 'Umngeni SP',
                  ward: ['2']
                  }
                ]
              },
              {
                names: 'Umhlanga',
                surburb: [
                  {
                  name: 'Herrwood Park',
                  ward: ['35']
                  },
                  {
                    name: 'La Lucia',
                    ward: ['35', '36']
                    },
                    {
                      name: 'Prestondale',
                      ward: ['35']
                      },
                      {
                        name: 'Somerset Park',
                        ward: ['35', '102']
                        },
                        {
                          name: 'Strattton-on-Sea',
                          ward: ['35']
                          },
                          {
                            name: 'Sunningdale',
                            ward: ['35', '102']
                            },
                            {
                              name: 'Umhlanga Lagoon Nature Reserve',
                              ward: ['35']
                              },
                              {
                                name: 'Umhlanga Ridge',
                                ward: ['35', '102']
                                },
                                {
                                  name: 'Umhlanga Rocks',
                                  ward: ['35', '36']
                                  },
                                  {
                                    name: 'Umhlanga SP',
                                    ward: ['35']
                                    },
                                    
                ]
              },
              {
                names: 'Umkomaas',
                surburb: [
                  {
                  name: 'Saiccor',
                  ward: ['99']
                  },
                  {
                    name: 'Umkomaas SP',
                    ward: ['99']
                    },
                    {
                      name: 'Widenham SP',
                      ward: ['99']
                      },
                ]
              },
              {
                names: 'Umlazi',
                surburb: [
                  {
                  name: 'Kwamgaga',
                  ward: ['77', '78', '84']
                  },
                  {
                    name: 'Lusaka',
                    ward: ['78', '84']
                    },

                    {
                      name: 'Reunion',
                      ward: ['76', '90']
                      },
                      {
                        name: 'Umlazi A',
                        ward: ['80', '88']
                        },
                        {
                          name: 'Umlazi AA',
                          ward: ['78', '83', '84', '85']
                          },
                          {
                            name: 'Umlazi B',
                            ward: ['80', '81', '82', '88']
                            },
                            {
                              name: 'Umlazi BB',
                              ward: ['84', '85', '94', '95']
                              },
                              {
                                name: 'Umlazi C',
                                ward: ['69', '79', '81', '82', '88']
                                },
                                {
                                  name: 'Umlazi CC',
                                  ward: ['78', '84', '95']
                                  },
                                  {
                                    name: 'Umlazi D',
                                    ward: ['80', '82', '87', '88', '89']
                                    },
                                    {
                                      name: 'Umlazi DD',
                                      ward: ['78', '84']
                                      },
                                      {
                                        name: 'Umlazi E',
                                        ward: ['69', '74', '80', '81']
                                        },
                                        {
                                          name: 'Umlazi F',
                                          ward: ['69', '70', '73', '79', '81', '82']
                                          },
                                          {
                                            name: 'Umlazi G',
                                            ward: ['73', '77', '79', '81', '82']
                                            },
                                            {
                                              name: 'Umlazi H',
                                              ward: ['73', '77', '79', '82', '83']
                                            },
                                              {
                                                name: 'Umlazi J',
                                                ward: ['77', '78', '83']
                                                },
                                                {
                                                  name: 'Umlazi K',
                                                  ward: ['78', '83', '84']
                                                  },
                                                  {
                                                    name: 'Umlazi L',
                                                    ward: ['78', '83', '84']
                                                  },
                                                    {
                                                      name: 'Umlazi M',
                                                      ward: ['82', '83', '84', '85']
                                                      },
                                                      {
                                                        name: 'Umlazi N',
                                                        ward: ['82', '83', '85']
                                                        },
                                                        {
                                                          name: 'Umlazi P',
                                                          ward: ['82', '83', '85', '87', '88']
                                                        },
                                                          {
                                                            name: 'Umlazi Q',
                                                            ward: ['85', '86', '87', '89']
                                                            },
                                                            {
                                                              name: 'Umlazi R',
                                                              ward: ['82', '83', '85', '87', '88']
                                                            },
                                                              {
                                                                name: 'Umlazi S',
                                                                ward: ['76', '87', '88', '89', '90']
                                                                },
                                                                {
                                                                  name: 'Umlazi T',
                                                                  ward: ['87', '88', '89', '90']
                                                                  },
                                                                  {
                                                                    name: 'Umlazi U',
                                                                    ward: ['85', '86', '87', '89']
                                                                  },
                                                                    {
                                                                      name: 'Umlazi V',
                                                                      ward: ['74', '75', '76', '80', '88', '90']
                                                                      },
                                                                      {
                                                                        name: 'Umlazi W',
                                                                        ward: ['71', '81', '82', '88']
                                                                      },
                                                                      {
                                                                        name: 'Umlazi Y',
                                                                        ward: ['85', '86', '89', '93', '94']
                                                                      },
                                                                      {
                                                                        name: 'Umlazi Z',
                                                                        ward: ['84','85', '86', '87', '94']
                                                                      },
                ]
              },
              {
                names: 'Umngeni',
                surburb: [
                  {
                  name: 'Umngeni SP',
                  ward: ['3', '9', '44']
                  }
                ]
              },
              {
                names: 'Umnini',
                surburb: [
                  {
                  name: 'Umnini SP',
                  ward: ['2', '3', '98', '99']
                  }
                ]
              },
              {
                names: 'Uthweba ',
                surburb: [
                  {
                  name: 'Uthweba SP',
                  ward: ['1', '3']
                  }
                ]
              },
              {
                names: 'Verulam',
                surburb: [
                  {
                  name: 'Barrs Flats',
                  ward: ['58', '60', '61']
                  },
                  {
                    name: 'Brindheaven',
                    ward: ['58', '60']
                    },
                    {
                      name: 'Canelands',
                      ward: ['58', '60', '61']
                      },
                      {
                        name: 'Cordoba Gardens',
                        ward: ['51', '59', '60']
                        },
                        {
                          name: 'Dawncrest',
                          ward: ['59', '60']
                          },
                          {
                            name: 'Everest Heights',
                            ward: ['60']
                            },
                            {
                              name: 'Grangetown',
                              ward: ['58', '60']
                              },
                              {
                                name: 'Litchie Farm',
                                ward: ['60']
                                },
                                {
                                  name: 'Lotusville',
                                  ward: ['58', '60']
                                  },
                                  {
                                    name: 'Mountview',
                                    ward: ['51', '58', '60']
                                    },
                                    {
                                      name: 'Mzomuhle',
                                      ward: ['51', '58', '59', '60']
                                    },
                                      {
                                        name: 'Oaklands 1',
                                        ward: ['60']
                                        },
                                        {
                                          name: 'Ottawa ',
                                          ward: ['50', '51', '58', '60', '102']
                                          },
                                          {
                                            name: 'Redcliffe',
                                            ward: ['59', '60']
                                            },
                                            {
                                              name: 'Riet River',
                                              ward: ['51', '59', '60']
                                              },
                                                {
                                                  name: 'Riverview Park',
                                                  ward: ['60', '61']
                                                  },
                                                  {
                                                    name: 'Riyadh',
                                                    ward: ['58']
                                                    },
                                                    {
                                                      name: 'Saana Township',
                                                      ward: ['60']
                                                      },
                                                      {
                                                        name: 'Southridge',
                                                        ward: ['58']
                                                        },
                                                        {
                                                          name: 'Temple Valley',
                                                          ward: ['58']
                                                          },
                                                          {
                                                            name: 'Umhloti Heights',
                                                            ward: ['58', '60', '61']
                                                            },
                                                            {
                                                              name: 'Valdin Heights',
                                                              ward: ['58']
                                                              },
                                                              {
                                                                name: 'Verulam SP',
                                                                ward: ['58', '60', '61']
                                                              }
                ]
              },
              {
                names: 'Vulindlala',
                surburb: [
                  {
                  name: 'Vulindlala SP',
                  ward: ['2', '103']
                  }
                ]
              },
              {
                names: 'Waterfall',
                surburb: [
                  {
                  name: 'Berrel',
                  ward: ['9']
                  },
                  {
                    name: 'Crestholme',
                    ward: ['8', '9']
                    },
                    {
                      name: 'Crestview',
                      ward: ['8', '9']
                      },
                      {
                        name: 'Waterfall SP',
                        ward: ['8', '9']
                        },
                ]
              },
              {
                names: 'Wathanga',
                surburb: [
                  {
                  name: 'Wathanga SP',
                  ward: ['7']
                  }
                ]
              },
              {
                names: 'Westbrook',
                surburb: [
                  {
                  name: 'Casuarina',
                  ward: ['58']
                  },
                  {
                    name: "Finney's Rock",
                    ward: ['22','58']
                    },
                    {
                      name: 'Tongaat Beach',
                      ward: ['58']
                      },
                      {
                        name: 'Westbrook SP',
                        ward: ['58']
                        },
                ]
              },
              {
                names: 'Westville',
                surburb: [
                  {
                  name: 'Atholl Heights',
                  ward: ['18', '23', '92']
                  },
                  {
                    name: 'Berae West',
                    ward: ['24', '30']
                    },
                    {
                      name: 'Chiltern Hills',
                      ward: ['18', '92']
                      },
                      {
                        name: 'Dawncliffe',
                        ward: ['18', '24', '63']
                        },
                        {
                          name: 'Dawncrest',
                          ward: ['18', '23', '24', '92']
                        },
                          {
                            name: 'Grayleigh',
                            ward: ['18', '24']
                            },
                            {
                              name: 'Westville Prisoner',
                              ward: ['18', '24']
                              },
                              {
                                name: 'Westville SP',
                                ward: ['23', '24', '92']
                                },
                                
                ]
              },
              {
                names: 'Ximba',
                surburb: [
                  {
                  name: 'Ximba SP',
                  ward: ['1', '3']
                  }
                ]
              },
              {
                names: 'Zwelibomvu',
                surburb: [
                  {
                  name: 'Zwelibomvu SP',
                  ward: ['7', '12', '14', '100']
                  }
                ]
              },


            ]
          }
        ]
        },
        
        
        {
            name: 'iLembe',
            municipality: [
              {
                name: 'KwaDukuza',
                city: [
                  {
                    names: 'Alexia',
                    surburb: [
                      {
                      name: 'Alexia SP',
                      ward: ['9', '10']
                      }
                  ]
                  },
                  {
                    names: 'Anmaharai',
                    surburb: [
                      {
                      name: 'Anmaharai SP',
                      ward: ['1', '4', '25']
                      }
                  ]
                  },
                  {
                    names: 'Ballito',
                    surburb: [
                      {
                      name: 'Ballito SP',
                      ward: ['4', '6', '22']
                      },
                      {
                        name: 'Caledon Estate',
                        ward: ['4', '22']
                        },
                        {
                          name: 'Port Zimbali',
                          ward: [ '6', '22', '88']
                          },
                          {
                            name: "Shaka's Head",
                            ward: ['4', '21', '22']
                            },
                            {
                              name: "Shaka's Rock",
                              ward: ['6', '22']
                              },
                              {
                                name: 'Simbithi Eco-Estate',
                                ward: ['4', '6', '22']
                                },
                                {
                                  name: 'Umhlali Golf and Country Estate',
                                  ward: ['4','22']
                                  },
                                  {
                                    name: "Zimbali Coastl Estate",
                                    ward: ['6', '22']
                                    },
                  ]
                  },
                  {
                    names: 'Blythedale Beach',
                    surburb: [
                      {
                      name: 'Blythedale Beach SP',
                      ward: ['11']
                      }
                  ]
                  },
                  {
                    names: 'Chris Hani',
                    surburb: [
                      {
                      name: 'Chris Hani SP',
                      ward: ['14', '15', '24']
                      }
                  ]
                  },
                  {
                    names: 'Darnall',
                    surburb: [
                      {
                      name: 'Darnall SP',
                      ward: ['2', '3']
                      }
                  ]
                  },
                  {
                    names: 'Dendethu',
                    surburb: [
                      {
                      name: 'Dendethu SP',
                      ward: ['9', '17', '26', '26']
                      }
                  ]
                  },
                  {
                    names: 'Doornkop',
                    surburb: [
                      {
                      name: 'Doornkop SP',
                      ward: ['25']
                      }
                  ]
                  },
                  {
                    names: 'Driefontein',
                    surburb: [
                      {
                      name: 'Driefontein SP',
                      ward: ['21']
                      }
                  ]
                  },
                  {
                    names: 'Ematendeni',
                    surburb: [
                      {
                      name: 'Ematendeni SP',
                      ward: ['10', '11', '12', '20', '22']
                      }
                  ]
                  },
                  {
                    names: 'Eradamishini',
                    surburb: [
                      {
                      name: 'Eradamishini SP',
                      ward: ['9', '14', '24']
                      }
                  ]
                  },
                  {
                    names: 'Etete',
                    surburb: [
                      {
                      name: 'Etete SP',
                      ward: ['7', '10', '12', '20', '22', '23']
                      }
                  ]
                  },
                  {
                    names: 'Ethafeni',
                    surburb: [
                      {
                      name: 'Ethafeni SP',
                      ward: ['11', '12']
                      }
                  ]
                  },
                  {
                    names: 'Ezingaganeni',
                    surburb: [
                      {
                      name: 'Ezingaganeni SP',
                      ward: ['1', '3', '17', '27']
                      }
                  ]
                  },
                  {
                    names: 'Groutville',
                    surburb: [
                      {
                      name: 'Charlottedale',
                      ward: ['10', '11', '15', '24']
                      },
                      {
                        name: 'Groutville SP',
                        ward: ['9', '10', '24']
                        },
                        {
                          name: 'New Grodt',
                          ward: ['7', '9', '10', '11', '12', '20']
                          },
                  ]
                  },
                  {
                    names: 'Hanguza',
                    surburb: [
                      {
                      name: 'Hanguza SP',
                      ward: ['3', '9', '17', '27']
                      }
                  ]
                  },
                  {
                    names: 'Honolulu',
                    surburb: [
                      {
                      name: 'Honolulu SP',
                      ward: ['7', '9', '20']
                      }
                  ]
                  },
                  {
                    names: 'KwaDukuza NU',
                    surburb: [
                      {
                      name: 'KwaDukuza NU',
                      ward: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '11', '12', '13', '15', '16', '17', '19', '20', '21', '22', '23', '25', '26', '27', '58', '61', '62']
                      }
                  ]
                  },
                  {
                    names: 'Lloyd',
                    surburb: [
                      {
                      name: 'Lloyd SP',
                      ward: ['14', '15', '19', '24', '26']
                      }
                  ]
                  },
                  {
                    names: 'Malende',
                    surburb: [
                      {
                      name: 'Malende SP',
                      ward: ['7', '9']
                      }
                  ]
                  },
                  {
                    names: 'Mdlebeni',
                    surburb: [
                      {
                      name: 'Gungu',
                      ward: ['1', '6', '25']
                      },
                      {
                        name: 'Mdlebeni SP',
                        ward: ['1', '4', '6', '25']
                        },
                  ]
                  },
                  {
                    names: 'Memory',
                    surburb: [
                      {
                      name: 'Memory SP',
                      ward: ['9', '14', '19', '26']
                      }
                  ]
                  },
                  {
                    names: 'Mnsonono',
                    surburb: [
                      {
                      name: 'Mnsonono SP',
                      ward: ['1', '27']
                      }
                  ]
                  },
                  {
                    names: 'Mnyomawini',
                    surburb: [
                      {
                      name: 'Mnyomawini SP',
                      ward: ['9', '10']
                      }
                  ]
                  },
                  {
                    names: 'Mzwangetwa',
                    surburb: [
                      {
                      name: 'Mzwangetwa SP',
                      ward: ['9', '17', '27']
                      }
                  ]
                  },
                  {
                    names: 'Njekane',
                    surburb: [
                      {
                      name: 'Njekane SP',
                      ward: ['10','11', '12', '15', '24']
                      }
                  ]
                  },
                  {
                    names: 'Nkobongo',
                    surburb: [
                      {
                      name: 'Nkobongo SP',
                      ward: ['7', '8', '22', '23']
                      }
                  ]
                  },
                  {
                    names: 'Nkunkwini',
                    surburb: [
                      {
                      name: 'Nkunkwini SP',
                      ward: ['11', '15']
                      }
                  ]
                  },
                  {
                    names: 'Nonoti',
                    surburb: [
                      {
                      name: 'Nonoti SP',
                      ward: ['1', '3', '4']
                      }
                  ]
                  },
                  {
                    names: 'Ntabaningi',
                    surburb: [
                      {
                      name: 'Ntabaningi SP',
                      ward: ['15', '24', '26']
                      }
                  ]
                  },
                  {
                    names: 'Ntsangwini',
                    surburb: [
                      {
                      name: 'Ntsangwini SP',
                      ward: ['9', '10', '14', '17', '24', '26']
                      }
                  ]
                  },
                  {
                    names: "Prince's Grant",
                    surburb: [
                      {
                      name: "Prince's Grant Golf Estate",
                      ward: ['11']
                      }
                  ]
                  },
                  {
                    names: 'Royal Palm Estate',
                    surburb: [
                      {
                      name: 'Royal Palm Estate SP',
                      ward: ['20', '22']
                      }
                  ]
                  },
                  {
                    names: 'Salt Rock',
                    surburb: [
                      {
                      name: 'Dunkirk Estate',
                      ward: ['22']
                      },
                      {
                        name: 'Salt Rock SP1',
                        ward: ['22']
                        },
                        {
                          name: 'Salt Rock SP2',
                          ward: ['4', '22']
                          },
                          {
                            name: 'Umhlali Beach',
                            ward: ['22']
                            },
                  ]
                  },
                  {
                    names: 'Samungu',
                    surburb: [
                      {
                      name: 'Samungu SP',
                      ward: ['3', '11']
                      }
                  ]
                  },
                  {
                    names: 'Sans Souci',
                    surburb: [
                      {
                      name: 'Sans Souci SP',
                      ward: ['4', '25']
                      }
                  ]
                  },
                  {
                    names: 'Shakaskraal',
                    surburb: [
                      {
                      name: 'Shakaskraal SP',
                      ward: ['7', '8', '22', '23']
                      }
                  ]
                  },
                  {
                    names: 'Sheffield Beach',
                    surburb: [
                      {
                      name: 'Brettenwood Coastal Estate',
                      ward: ['22']
                      },
                      {
                        name: 'Sheffield Beach SP',
                        ward: ['22']
                        },
                        {
                          name: 'Sheffield Manor',
                          ward: ['22']
                          },
                  ]
                  },
                  {
                    names: 'Stanger',
                    surburb: [
                      {
                      name: 'Dawnside',
                      ward: ['16', '19']
                      },
                      {
                        name: 'Gledhow',
                        ward: ['15']
                        },
                        {
                          name: 'Glen Hills',
                          ward: ['13', '19', '26']
                          },
                          {
                            name: 'High Ridge',
                            ward: ['5', '16', '17', '18']
                            },
                            {
                              name: 'Larkfield',
                              ward: ['15', '19']
                              },
                              {
                                name: 'Northlands',
                                ward: ['16', '18']
                                },
                                {
                                  name: 'Shakaville',
                                  ward: ['5', '16', '17', '18']
                                },
                                  {
                                    name: 'Stanger Central',
                                    ward: ['16', '19']
                                    },
                                    {
                                      name: 'Stanger Ext 12, 24, 31, 32, 33, 34, 35',
                                      ward: ['13','16', '19']
                                      },
                                      {
                                        name: 'Stanger Ext 17, 18, 19',
                                        ward: ['16', '17']
                                        },
                                        {
                                          name: 'Stanger Ext 2, 5, 8, 9, 27',
                                          ward: ['19']
                                          },
                                          {
                                            name: 'Stanger Ext 21',
                                            ward: ['3','16', '19']
                                            },
                                            {
                                              name: 'Stanger Ext 22',
                                              ward: ['16', '19']
                                              },
                                              {
                                                name: 'Stanger Ext 26',
                                                ward: ['3','8','16', '18']
                                                },
                                                {
                                                  name: 'Stanger Ext 3, 29',
                                                  ward: ['5','16', '18', '19']
                                                },
                                                  {
                                                    name: 'Stanger Ext 6, 14, 25',
                                                    ward: ['16','17', '18', '19']
                                                    },
                                                    {
                                                      name: 'Stanger Ext 7, 10, 15',
                                                      ward: ['15', '19']
                                                      },
                                                      {
                                                        name: 'Stanger SP1',
                                                        ward: ['3', '11', '13', '15', '16', '17', '19', '26']
                                                        },
                                                        {
                                                          name: 'Stanger SP2',
                                                          ward: ['3', '5', '17']
                                                          },
                                                          {
                                                            name: 'Townview',
                                                            ward: ['13','16', '19']
                                                            },
                                                            {
                                                              name: 'Warrenton',
                                                              ward: ['16']
                                                              },
                                                             

                  ]
                  },
                  {
                    names: 'Thembeni',
                    surburb: [
                      {
                      name: 'Thembeni SP',
                      ward: ['11']
                      }
                  ]
                  },
                  {
                    names: 'Tinely Manor Beach',
                    surburb: [
                      {
                      name: 'Headlands',
                      ward: ['11']
                      }
                  ]
                  },
                  {
                    names: 'UCC Informal',
                    surburb: [
                      {
                      name: 'UCC Informal SP',
                      ward: ['11', '12']
                      }
                  ]
                  },
                  {
                    names: 'Umhlali',
                    surburb: [
                      {
                      name: 'Umhlali SP',
                      ward: ['4', '21', '22']
                      }
                  ]
                  },
                  {
                    names: 'Zinkwazi Beach',
                    surburb: [
                      {
                      name: 'Zinkwazi Beach SP',
                      ward: ['2', '3']
                      }
                  ]
                  },

                ]
            },
            {
              name: 'Mandeni',
              city: [
                {
                  names: 'Abashumi',
                  surburb: [
                    {
                    name: 'Abashumi SP',
                    ward: ['6', '11']
                    }
                ]
                },
                {
                  names: 'Endlondlweni',
                  surburb: [
                    {
                    name: 'Endlondlweni SP',
                    ward: ['5', '10', '12', '13', '14','15', '17', '25']
                    }
                ]
                },
                {
                  names: 'Macambini',
                  surburb: [
                    {
                    name: 'Dokodweni SP1',
                    ward: ['1', '8', '18', '19']
                    },
                    {
                      name: 'Dokodweni SP2',
                      ward: ['2', '8']
                      },
                      {
                        name: 'Fort Crealock',
                        ward: ['1', '8', '18']
                        },
                        {
                          name: 'Isulabashe',
                          ward: ['8', '9']
                          },
                          {
                            name: 'Lambothi',
                            ward: ['2', '8', '9']
                            },
                            {
                              name: 'Mandige ',
                              ward: ['2', '9']
                              },
                              {
                                name: 'Mangeza',
                                ward: ['2', '3', '9']
                              },
                                {
                                  name: 'Mbizimelwe',
                                  ward: ['1','19']
                                  },
                                  {
                                    name: 'Mhlubulweni',
                                    ward: ['2', '3', '9']
                                    },
                                    {
                                      name: 'Ngulule ',
                                      ward: ['1', '8']
                                      },
                                      {
                                        name: 'Nqutshini',
                                        ward: ['1', '8']
                                        },
                                        {
                                          name: 'Thuthuka',
                                          ward: ['2', '8', '9']
                                          },
                                          {
                                            name: 'Wangu',
                                            ward: ['1', '2', '8']
                                            },
                                            

                ]
                },
                {
                  names: 'Makhawini',
                  surburb: [
                    {
                    name: 'Makhawini SP',
                    ward: ['2', '8', '9']
                    }
                ]
                },
                {
                  names: 'Mandeni',
                  surburb: [
                    {
                    name: 'Isithebe Industrial',
                    ward: ['10', '11', '12', '16', '17']
                    },
                    {
                      name: 'Mandeni SP',
                      ward: ['3', '4', '7', '10', '17']
                      },
                      {
                        name: 'Mfusanvu',
                        ward: ['3', '4']
                        },
                ]
                },
                {
                  names: 'Mandeni NU',
                  surburb: [
                    {
                    name: 'Mandeni NU',
                    ward: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '16', '17']
                    }
                ]
                },
                {
                  names: 'Mangqakaza',
                  surburb: [
                    {
                    name: 'Mangqakaza SP',
                    ward: ['2', '3', '9']
                    }
                ]
                },
                {
                  names: 'Mathonsi',
                  surburb: [
                    {
                    name: 'Khovothi',
                    ward: ['5', '6', '12', '25']
                    },
                    {
                      name: 'Mhambuma',
                      ward: ['5', '6','10' ,'11', '12']
                    },
                      {
                        name: 'Shayisa',
                        ward: ['5','6', '25']
                        },
                ]
                },
                {
                  names: 'Mathunzi',
                  surburb: [
                    {
                    name: 'Mathunzi SP',
                    ward: ['6', '15']
                    }
                ]
                },
                {
                  names: 'Mfunze',
                  surburb: [
                    {
                    name: 'Mfunze SP',
                    ward: ['6']
                    }
                ]
                },
                {
                  names: 'Mtunzini',
                  surburb: [
                    {
                    name: 'Mtunzini SP',
                    ward: ['2', '3']
                    }
                ]
                },
                {
                  names: 'Ndulinde',
                  surburb: [
                    {
                    name: 'Ndulinde SP',
                    ward: ['6', '11']
                    }
                ]
                },
                {
                  names: 'Nkunzempunga',
                  surburb: [
                    {
                    name: 'Nkunzempunga SP',
                    ward: ['5','6', '8','10','11', '12', '16', '17']
                    }
                ]
                },
                {
                  names: 'Nyoni',
                  surburb: [
                    {
                    name: 'Nyoni SP',
                    ward: ['10', '16']
                    }
                ]
                },
                {
                  names: 'Otungulu',
                  surburb: [
                    {
                    name: 'Otungulu SP',
                    ward: ['1', '19']
                    }
                ]
                },
                {
                  names: 'Sikhonyane',
                  surburb: [
                    {
                    name: 'Ziyendane SP',
                    ward: ['6', '11']
                    }
                ]
                },
                {
                  names: 'St Cyprian Mission',
                  surburb: [
                    {
                    name: 'St Cyprian Mission SP',
                    ward: ['6', '11', '15', '18']
                    }
                ]
                },
                {
                  names: 'Sondumbili A',
                  surburb: [
                    {
                    name: 'Sondumbili A SP',
                    ward: ['3', '4', '5', '7', '10', '12', '13', '14', '15']
                    }
                ]
                },
                {
                  names: 'Sondumbili B',
                  surburb: [
                    {
                    name: 'Sondumbili B SP',
                    ward: ['6', '8', '16', '18']
                    }
                ]
                },
                {
                  names: 'Tugela',
                  surburb: [
                    {
                    name: 'Bondis Drift',
                    ward: ['3', '4']
                    },
                    {
                      name: 'Harold Johnson Nature Reserve',
                      ward: ['4']
                      },
                      {
                        name: 'Nweark Sand Mine',
                        ward: ['4']
                        },
                        {
                          name: 'Pandianager',
                          ward: ['3', '4']
                          },
                          {
                            name: 'Tugela SP',
                            ward: ['3', '4']
                          },
                ]
                },
                {
                  names: 'Tugela Mouth',
                  surburb: [
                    {
                    name: 'Tugela Mouth SP',
                    ward: ['2', '3', '4']
                    }
                ]
                },
                {
                  names: 'Ziyendane',
                  surburb: [
                    {
                    name: 'Ziyendane SP',
                    ward: ['6', '11']
                    }
                ]
                },
                
          ]
          },      
          {
            name: 'Maphumulo',
            city: [
              {
                names: 'Amafahla',
                surburb: [
                  {
                  name: 'Amafahla SP',
                  ward: ['4', '8']
                  }
              ]
              },
              {
                names: 'Bethe',
                surburb: [
                  {
                  name: 'Bethe SP',
                  ward: ['3']
                  }
              ]
              },
              {
                names: 'Dabangu',
                surburb: [
                  {
                  name: 'Dabangu SP',
                  ward: ['4', '7']
                  }
              ]
              },
              {
                names: 'Dayimane',
                surburb: [
                  {
                  name: 'Dayimane SP',
                  ward: ['4', '8']
                  }
              ]
              },
              {
                names: 'Amafahla',
                surburb: [
                  {
                  name: 'Amafahla SP',
                  ward: ['3', '5']
                  }
              ]
              },
              {
                names: 'Ehlongwa',
                surburb: [
                  {
                  name: 'Ehlongwa SP',
                  ward: ['1', '2', '14']
                  }
              ]
              },
              {
                names: 'Ejingeni',
                surburb: [
                  {
                  name: 'Ejingeni SP',
                  ward: ['4']
                  }
              ]
              },
              {
                names: 'Ekhatha',
                surburb: [
                  {
                  name: 'Ekhatha SP',
                  ward: ['1', '2', '5']
                  }
              ]
              },
              {
                names: 'Emabhedwini',
                surburb: [
                  {
                  name: 'Emabhedwini SP',
                  ward: ['3','4', '5']
                  }
              ]
              },
              {
                names: 'Emabovini A',
                surburb: [
                  {
                  name: 'Emabovini A SP',
                  ward: ['1','4', '5', '6']
                  }
              ]
              },
              {
                names: 'Emabovini B',
                surburb: [
                  {
                  name: 'Emabovini B SP',
                  ward: ['6', '11']
                  }
              ]
              },
              {
                names: 'Emasomini A',
                surburb: [
                  {
                  name: 'Emasomini A SP',
                  ward: ['3', '7']
                  }
              ]
              },
              {
                names: 'Emasomini B',
                surburb: [
                  {
                  name: 'Emasomini B SP',
                  ward: ['11']
                  }
              ]
              },
              {
                names: 'Embizeni',
                surburb: [
                  {
                  name: 'Embizeni SP',
                  ward: ['4', '8', '11']
                  }
              ]
              },
              {
                names: 'Emkhovini',
                surburb: [
                  {
                  name: 'Emkhovini SP',
                  ward: ['8', '11']
                  }
              ]
              },
              {
                names: 'Emnyameni',
                surburb: [
                  {
                  name: 'Emnyameni SP',
                  ward: ['6', '10', '11']
                  }
              ]
              },{
                names: 'Emtanjeni',
                surburb: [
                  {
                  name: 'Emtanjeni SP',
                  ward: ['8', '9']
                  }
              ]
              },{
                names: 'Emthombeni',
                surburb: [
                  {
                  name: 'Emthombeni SP',
                  ward: ['5', '6']
                  }
              ]
              },{
                names: 'Esiweni/Amambulwa',
                surburb: [
                  {
                  name: 'Esiweni/Amambulwa SP',
                  ward: ['2', '5']
                  }
              ]
              },{
                names: 'Ewosi',
                surburb: [
                  {
                  name: 'Ewosi SP',
                  ward: ['1', '2']
                  }
              ]
              },{
                names: 'Ezibandleni',
                surburb: [
                  {
                  name: 'Ezibandleni SP',
                  ward: ['1', '7', '8']
                  }
              ]
              },{
                names: 'Haqaza',
                surburb: [
                  {
                  name: 'Haqaza SP',
                  ward: ['2', '3', '5', '6']
                  }
              ]
              },{
                names: 'Hholweni',
                surburb: [
                  {
                  name: 'Hholweni SP',
                  ward: ['1', '6', '11']
                  }
              ]
              },{
                names: 'Icubhu',
                surburb: [
                  {
                  name: 'Icubhu SP',
                  ward: ['1', '8']
                  }
              ]
              },{
                names: 'Idakadaka',
                surburb: [
                  {
                  name: 'Idakadaka SP',
                  ward: ['1', '3', '7', '8']
                  }
              ]
              },{
                names: 'Ikhabane',
                surburb: [
                  {
                  name: 'Ikhabane SP',
                  ward: ['4', '8']
                  }
              ]
              },{
                names: 'Inhlanomfula',
                surburb: [
                  {
                  name: 'Inhlanomfula SP',
                  ward: ['1', '4', '8', '9']
                  }
              ]
              },{
                names: 'Inyamazane',
                surburb: [
                  {
                  name: 'Inyamazane SP',
                  ward: ['4', '9', '10', '11']
                  }
              ]
              },{
                names: 'Inyezini',
                surburb: [
                  {
                  name: 'Inyezini SP',
                  ward: ['8', '11']
                  }
              ]
              },{
                names: 'Ishowe',
                surburb: [
                  {
                  name: 'Ishowe SP',
                  ward: ['8', '9', '11']
                  }
              ]
              },{
                names: 'Isthundu',
                surburb: [
                  {
                  name: 'Isthundu SP',
                  ward: ['1','4', '11']
                  }
              ]
              },{
                names: 'Izigqaya',
                surburb: [
                  {
                  name: 'Izigqaya SP',
                  ward: ['4','7','8']
                  }
              ]
              },{
                names: 'Jojingwenya',
                surburb: [
                  {
                  name: 'Jojingwenya SP',
                  ward: ['2', '3']
                  }
              ]
              },{
                names: 'KwaGcwensa',
                surburb: [
                  {
                  name: 'KwaGcwensa SP',
                  ward: ['3']
                  }
              ]
              },{
                names: 'KwaKing',
                surburb: [
                  {
                  name: 'KwaKing SP',
                  ward: ['2', '5']
                  }
              ]
              },{
                names: 'KwaMshibe',
                surburb: [
                  {
                  name: 'KwaMshibe SP',
                  ward: ['1','4', '5']
                  }
              ]
              },
              {
                names: 'KwaNtuli A',
                surburb: [
                  {
                  name: 'KwaNtuli A SP',
                  ward: ['8']
                  }
              ]
              },
              {
                names: 'KwaNtuli B',
                surburb: [
                  {
                  name: 'KwaNtuli B SP',
                  ward: ['8', '9']
                  }
              ]
              },
              {
                names: 'KwaPetezi',
                surburb: [
                  {
                  name: 'KwaPetezi SP',
                  ward: ['3', '7']
                  }
              ]
              },
              {
                names: 'Malovana',
                surburb: [
                  {
                  name: 'Malovana SP',
                  ward: ['2', '3']
                  }
              ]
              },
              {
                names: 'Mandlakazi',
                surburb: [
                  {
                  name: 'Mandlakazi SP',
                  ward: ['3', '4']
                  }
              ]
              },
              {
                names: 'Maphumulo NU',
                surburb: [
                  {
                  name: 'Maphumulo NU ',
                  ward: ['1', '2', '3']
                  }
              ]
              },
              {
                names: 'Masiwela',
                surburb: [
                  {
                  name: 'Masiwela SP',
                  ward: ['3', '6', '10']
                  }
              ]
              },
              {
                names: 'Mathonsi',
                surburb: [
                  {
                  name: 'Mathonsi SP',
                  ward: ['2', '3']
                  }
              ]
              },
              {
                names: 'Mbutane',
                surburb: [
                  {
                  name: 'Mbutane SP',
                  ward: ['2', '5', '6']
                  }
              ]
              },
              {
                names: 'Menyezwayo',
                surburb: [
                  {
                  name: 'Menyezwayo SP',
                  ward: ['5', '6']
                  }
              ]
              },
              {
                names: 'Mvozana',
                surburb: [
                  {
                  name: 'Mvozana SP',
                  ward: ['8', '9']
                  }
              ]
              },
              {
                names: 'Ndaba',
                surburb: [
                  {
                  name: 'Ndaba SP',
                  ward: ['4', '9', '10']
                  }
              ]
              },
              {
                names: 'Ndukwende',
                surburb: [
                  {
                  name: 'Ndukwende SP',
                  ward: ['4', '5', '6']
                  }
              ]
              },
              {
                names: 'Ngangwini',
                surburb: [
                  {
                  name: 'Ngangwini SP',
                  ward: [ '3']
                  }
              ]
              },
              {
                names: 'Ngwadumane',
                surburb: [
                  {
                  name: 'Ngwadumane SP',
                  ward: [ '8', '11']
                  }
              ]
              },
              {
                names: 'Nkolovuzane A',
                surburb: [
                  {
                  name: 'Nkolovuzane A  SP',
                  ward: ['8', '11']
                  }
              ]
              },
              {
                names: 'Nkolovuzane B',
                surburb: [
                  {
                  name: 'Nkolovuzane B SP',
                  ward: ['8', '11']
                  }
              ]
              },
              {
                names: 'Nofahla',
                surburb: [
                  {
                  name: 'Nofahla SP',
                  ward: ['4', '8', '11']
                  }
              ]
              },
              {
                names: 'Nomahhala',
                surburb: [
                  {
                  name: 'Nomahhala SP',
                  ward: ['2', '5']
                  }
              ]
              },
              {
                names: 'Ntombiyahlulunina',
                surburb: [
                  {
                  name: 'Ntombiyahlulunina SP',
                  ward: ['3','4', '10']
                  }
              ]
              },
              {
                names: 'Ntunjambili',
                surburb: [
                  {
                  name: 'Ntunjambili SP',
                  ward: ['1', '5']
                  }
              ]
              },
              {
                names: 'Nutwa',
                surburb: [
                  {
                  name: 'Nutwa SP',
                  ward: ['3','4', '5']
                  }
              ]
              },
              {
                names: 'Nyamazane',
                surburb: [
                  {
                  name: 'Nyamazane SP',
                  ward: ['9', '10', '11']
                  }
              ]
              },
              {
                names: 'Nyonebomvu',
                surburb: [
                  {
                  name: 'Nyonebomvu SP',
                  ward: ['1', '6']
                  }
              ]
              },
              {
                names: 'Nzikinziki',
                surburb: [
                  {
                  name: 'Nzikinziki SP',
                  ward: ['9', '10']
                  }
              ]
              },
              {
                names: 'Nzuza',
                surburb: [
                  {
                  name: 'Nzuza SP',
                  ward: ['4']
                  }
              ]
              },
              {
                names: 'Obihlweni',
                surburb: [
                  {
                  name: 'Obihlweni SP',
                  ward: ['2', '3']
                  }
              ]
              },
              {
                names: 'Ocheni',
                surburb: [
                  {
                  name: 'Ocheni SP',
                  ward: ['6', '11']
                  }
              ]
              },
              {
                names: 'Oqaqeni',
                surburb: [
                  {
                  name: 'Oqaqeni SP',
                  ward: ['3', '4', '10']
                  }
              ]
              },
              {
                names: 'Oshikishi',
                surburb: [
                  {
                  name: 'Oshikishi SP',
                  ward: ['8', '9', '11']
                  }
              ]
              },
              {
                names: 'Oshikishini',
                surburb: [
                  {
                  name: 'Oshikishini SP',
                  ward: ['1', '5', '6']
                  }
              ]
              },
              {
                names: 'Oyengweni',
                surburb: [
                  {
                  name: 'Oyengweni SP',
                  ward: ['1', '4', '5', '6', '25']
                  }
              ]
              },
              {
                names: 'Samangu',
                surburb: [
                  {
                  name: 'Samangu SP',
                  ward: ['2', '5']
                  }
              ]
              },
              {
                names: 'Sdoho',
                surburb: [
                  {
                  name: 'Sdoho SP',
                  ward: ['8', '11']
                  }
              ]
              },
              {
                names: 'Sese',
                surburb: [
                  {
                  name: 'Sese SP',
                  ward: ['2', '3']
                  }
              ]
              },
              {
                names: 'Sindi',
                surburb: [
                  {
                  name: 'Sindi SP',
                  ward: ['1', '11']
                  }
              ]
              },
              {
                names: 'Snamfu',
                surburb: [
                  {
                  name: 'Snamfu SP',
                  ward: ['7']
                  }
              ]
              },
              {
                names: 'Sondokhulu',
                surburb: [
                  {
                  name: 'Sondokhulu SP',
                  ward: ['2', '3']
                  }
              ]
              },
              {
                names: 'Thafamasi',
                surburb: [
                  {
                  name: 'Thafamasi SP',
                  ward: ['2', '5']
                  }
              ]
              },
              {
                names: 'Umphumulo',
                surburb: [
                  {
                  name: 'Umphumulo SP',
                  ward: ['3', '5', '6', '10', '11']
                  }
              ]
              },
              {
                names: 'Ushukangubo',
                surburb: [
                  {
                  name: 'Ushukangubo SP',
                  ward: ['1', '4']
                  }
              ]
              },
              {
                names: 'Umvoti',
                surburb: [
                  {
                  name: 'Umvoti SP',
                  ward: ['8', '11']
                  }
              ]
              },
              {
                names: 'Umvozana',
                surburb: [
                  {
                  name: 'Umvozana SP',
                  ward: ['8', '9']
                  }
              ]
              },
              {
                names: 'Umvumase',
                surburb: [
                  {
                  name: 'Umvumase SP',
                  ward: ['4', '5']
                  }
              ]
              },
              {
                names: 'Umzulwini',
                surburb: [
                  {
                  name: 'Umzulwini SP',
                  ward: ['1','4', '9', '10']
                  }
              ]
              },
              {
                names: 'Uqaqa',
                surburb: [
                  {
                  name: 'Uqaqa SP',
                  ward: ['2', '3']
                  }
              ]
              },
              {
                names: 'Velabahleke',
                surburb: [
                  {
                  name: 'Velabahleke SP',
                  ward: ['6', '11']
                  }
              ]
              },
              {
                names: 'Vuma A ',
                surburb: [
                  {
                  name: 'Vuma A SP',
                  ward: ['1', '6', '11']
                  }
              ]
              },
              {
                names: 'Vuma B ',
                surburb: [
                  {
                  name: 'Vuma B SP',
                  ward: ['8', '11']
                  }
              ]
              },
              {
                names: 'Vumbu',
                surburb: [
                  {
                  name: 'Vumbu SP',
                  ward: ['1', '2', '6', '13', ' 14']
                  }
              ]
              },

              {
                names: 'Wome',
                surburb: [
                  {
                  name: 'Wome SP',
                  ward: ['7', '8']
                  }
              ]
              },

              {
                names: 'Woyisane',
                surburb: [
                  {
                  name: 'Woyisane SP',
                  ward: ['2']
                  }
              ]
              },

              {
                names: 'Woza',
                surburb: [
                  {
                  name: 'Woza SP',
                  ward: ['8', '9', '10', '11']
                  }
              ]
              },
            ]
          },
          {
            name: 'Ndwedwe',
            city: [
              {
                names: 'Abejuti',
                surburb:[
                  {
                    name: 'Abejuti SP',
                    ward: ['2', '3', '8', '10', '11']
                  }
                ]
              },
              {
                names: 'Amatata',
                surburb:[
                  {
                    name: 'Amatata SP',
                    ward: ['2', '3', '17']
                  }
                ]
              },
              {
                names: 'Bhidakhona',
                surburb:[
                  {
                    name: 'Bhidakhona SP',
                    ward: ['3', '7']
                  }
                ]
              },
              {
                names: 'Bhululushe',
                surburb:[
                  {
                    name: 'Bhululushe SP',
                    ward: ['2', '17']
                  }
                ]
              },
              {
                names: 'Chibini',
                surburb:[
                  {
                    name: 'Chibini SP',
                    ward: ['1','4', '5']
                  }
                ]
              },
              {
                names: 'Dalibha',
                surburb:[
                  {
                    name: 'Dalibha SP',
                    ward: []
                  }
                ]
              },
              {
                names: 'Doringkop',
                surburb:[
                  {
                    name: 'Doringkop SP',
                    ward: ['1']
                  }
                ]
              },
              {
                names: 'Emnamane',
                surburb:[
                  {
                    name: 'Emnamane SP',
                    ward: ['4', '16', '18']
                  }
                ]
              },
              {
                names: 'Emtwandle',
                surburb:[
                  {
                    name: 'Emtwandle SP',
                    ward: ['4', '7']
                  }
                ]
              },
              {
                names: 'Esigedleni',
                surburb:[
                  {
                    name: 'Esigedleni SP',
                    ward: ['19']
                  }
                ]
              },
              {
                names: 'Ezikotshini',
                surburb:[
                  {
                    name: 'Ezikotshini SP',
                    ward: ['2', '4', '7']
                  }
                ]
              },
              {
                names: 'Glen Mill',
                surburb:[
                  {
                    name: 'Glen Mill SP',
                    ward: ['1']
                  }
                ]
              },
              {
                names: 'Glendale',
                surburb:[
                  {
                    name: 'Glendale Heights AH',
                    ward: ['1', '3', '7']
                  },
                  {
                    name: 'Glendale SP',
                    ward: ['3', '7']
                  }
                ]
              },
              {
                names: 'Hlomantethe',
                surburb:[
                  {
                    name: 'Hlomantethe SP',
                    ward: ['4', '9', '10', '11', '15', '16', '19']
                  }
                ]
              },
              {
                names: 'Inkangala',
                surburb:[
                  {
                    name: 'Inkangala SP',
                    ward: ['2', '16']
                  }
                ]
              },
              {
                names: 'Intaphuka',
                surburb:[
                  {
                    name: 'Intaphuka SP',
                    ward: ['13', '14', '18', '59', '60']
                  }
                ]
              },
              {
                names: 'Kranskloof',
                surburb:[
                  {
                    name: 'Kranskloof SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'Krusfontein',
                surburb:[
                  {
                    name: 'Krusfontein SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'KwaDeda',
                surburb:[
                  {
                    name: 'KwaDeda SP',
                    ward: ['4', '5', '6']
                  }
                ]
              },
              {
                names: 'KwaMadonsula',
                surburb:[
                  {
                    name: 'KwaMadonsula SP',
                    ward: ['3', '18']
                  }
                ]
              },
              {
                names: 'KwaNgcongangconga',
                surburb:[
                  {
                    name: 'KwaNgcongangconga SP',
                    ward: ['2', '4', '5', '6']
                  }
                ]
              },
              {
                names: 'KwaNyuswa',
                surburb:[
                  {
                    name: 'KwaNyuswa SP',
                    ward: ['2', '5', '6', '8', '9', '10']
                  }
                ]
              },
              {
                names: 'Kwazini',
                surburb:[
                  {
                    name: 'Kwazini SP',
                    ward: ['3', '13', '14', '15', '17', '18', '19', '59']
                  }
                ]
              },
              {
                names: 'Luthuli',
                surburb:[
                  {
                    name: 'Luthuli SP',
                    ward: ['3', '7']
                  }
                ]
              },
              {
                names: 'Maduna',
                surburb:[
                  {
                    name: 'Maduna SP',
                    ward: ['8', '11', '16']
                  }
                ]
              },
              {
                names: 'Mahlabathini',
                surburb:[
                  {
                    name: 'Mahlabathini SP',
                    ward: ['9', '16', '18', '19']
                  }
                ]
              },
              {
                names: 'Manjonjweni',
                surburb:[
                  {
                    name: 'Manjonjweni SP',
                    ward: ['4']
                  }
                ]
              },
              {
                names: 'Mbhukubhu',
                surburb:[
                  {
                    name: 'Mbhukubhu SP',
                    ward: ['2', '16', '18']
                  }
                ]
              },
              {
                names: 'Mhlugwini',
                surburb:[
                  {
                    name: 'Mhlugwini SP',
                    ward: ['16', '18', '19']
                  }
                ]
              },
              {
                names: 'Mkhukhuze',
                surburb:[
                  {
                    name: 'Mkhukhuze SP',
                    ward: ['15', '18', '19']
                  }
                ]
              },
              {
                names: 'Mpangisa',
                surburb:[
                  {
                    name: 'Mpangisa SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'Msilili',
                surburb:[
                  {
                    name: 'Msilili SP',
                    ward: ['2', '8', '16']
                  }
                ]
              },
              {
                names: 'Msunduze',
                surburb:[
                  {
                    name: 'Msunduze SP',
                    ward: ['11', '12', '13', '14', '15', '60', '61']
                  }
                ]
              },
              {
                names: 'Mthombisa',
                surburb:[
                  {
                    name: 'Mthombisa SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'Nambithani',
                surburb:[
                  {
                    name: 'Nambithani SP',
                    ward: ['4', '5']
                  }
                ]
              },
              {
                names: 'Ndondolo',
                surburb:[
                  {
                    name: 'Ndondolo SP',
                    ward: ['12', '21']
                  }
                ]
              },
              {
                names: 'Ndwedwe',
                surburb:[
                  {
                    name: 'Ndwedwe SP',
                    ward: ['13', '15', '18', '19']
                  }
                ]
              },
              {
                names: 'Ndwedwe',
                surburb:[
                  {
                    name: 'Ndwedwe NU',
                    ward: ['1', '2', '3', '4', '5', '7', '8', '9', '11', '21', '27']
                  }
                ]
              },
              {
                names: 'Newspaper',
                surburb:[
                  {
                    name: 'Newspaper SP',
                    ward: ['2', '4', '5', '6']
                  }
                ]
              },
              {
                names: 'Ngedleni',
                surburb:[
                  {
                    name: 'Ngedleni SP',
                    ward: ['12', '21', '61']
                  }
                ]
              },
              {
                names: 'Nhlangwini',
                surburb:[
                  {
                    name: 'Nhlangwini SP',
                    ward: ['1', '3']
                  }
                ]
              },
              {
                names: 'Nkumba-Nyuswa',
                surburb:[
                  {
                    name: 'Nkumba-Nyuswa SP',
                    ward: ['2', '3', '7', '8', '10']
                  }
                ]
              },
              {
                names: 'Nobanga',
                surburb:[
                  {
                    name: 'Nobanga SP',
                    ward: ['16', '17', '18']
                  }
                ]
              },
              {
                names: 'Nonoto',
                surburb:[
                  {
                    name: 'Nonoto SP',
                    ward: ['16', '18']
                  }
                ]
              },
              {
                names: 'Noodberg',
                surburb:[
                  {
                    name: 'Noodberg SP',
                    ward: ['4', '5', '9']
                  }
                ]
              },
              {
                names: 'Nsonono',
                surburb:[
                  {
                    name: 'Nsonono SP',
                    ward: ['1', '3', '27']
                  }
                ]
              },
              {
                names: 'Nsuze',
                surburb:[
                  {
                    name: 'Nsuze SP',
                    ward: ['2', '4', '7', '8']
                  }
                ]
              },
              {
                names: 'Nyonyane',
                surburb:[
                  {
                    name: 'Nyonyane SP',
                    ward: ['14', '59', '60']
                  }
                ]
              },
              {
                names: 'Ofantwini',
                surburb:[
                  {
                    name: 'Ofantwini SP',
                    ward: ['4', '11', '16']
                  }
                ]
              },
              {
                names: 'Ogunjini',
                surburb:[
                  {
                    name: 'Ogunjini SP',
                    ward: ['13', '14', '18', '59']
                  }
                ]
              },
              {
                names: 'Ohlange',
                surburb:[
                  {
                    name: 'Ohlange SP',
                    ward: ['1', '8', '9']
                  }
                ]
              },
              {
                names: 'Sangwana',
                surburb:[
                  {
                    name: 'Sangwana SP',
                    ward: ['16', '17', '18', '19']
                  }
                ]
              },
              {
                names: 'Shangase',
                surburb:[
                  {
                    name: 'Shangase SP',
                    ward: ['17', '18']
                  }
                ]
              },
              {
                names: 'Shudu',
                surburb:[
                  {
                    name: 'Shudu SP',
                    ward: ['3','10', '11', '12', '13', '15', '21']
                  }
                ]
              },
              {
                names: 'Sigedleni',
                surburb:[
                  {
                    name: 'Sigedleni SP',
                    ward: ['1', '4', '7', '8', '11']
                  }
                ]
              },
              {
                names: 'Sikeni',
                surburb:[
                  {
                    name: 'Sikeni SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'Sindumbeni',
                surburb:[
                  {
                    name: 'Sindumbeni SP',
                    ward: ['4', '7']
                  }
                ]
              },
              {
                names: 'Sinembe',
                surburb:[
                  {
                    name: 'Sinembe SP',
                    ward: ['3', '21']
                  }
                ]
              },
              {
                names: 'Sitshikitselweni',
                surburb:[
                  {
                    name: 'Sitshikitselweni SP',
                    ward: ['4', '16']
                  }
                ]
              },
              {
                names: 'Tafamasi',
                surburb:[
                  {
                    name: 'Tafamasi SP',
                    ward: ['17', '18', '19']
                  }
                ]
              },
              {
                names: 'Tucrose',
                surburb:[
                  {
                    name: 'Tucrose SP',
                    ward: ['1']
                  }
                ]
              },
              {
                names: 'Umdloti',
                surburb:[
                  {
                    name: 'Umdloti SP',
                    ward: ['3', '17']
                  }
                ]
              },
              {
                names: 'Upper Mantungwa',
                surburb:[
                  {
                    name: 'Upper Mantungwa SP',
                    ward: ['3', '17']
                  }
                ]
              },
              {
                names: 'Usuthu',
                surburb:[
                  {
                    name: 'Usuthu SP',
                    ward: ['4', '16']
                  }
                ]
              },
              {
                names: 'Wewe',
                surburb:[
                  {
                    name: 'Wewe SP',
                    ward: ['2', '8', '10']
                  }
                ]
              },
              {
                names: 'Zimpondweni',
                surburb:[
                  {
                    name: 'Zimpondweni SP',
                    ward: ['2', '16', '17', '18']
                  }
                ]
              }



            ] 
          }
        ]
        },
        
        {
          name: 'Sisonke',
          municipality: [ 
                  {
                     name: 'Greater Kokstad',
                     city: [
                      {
                          names: 'Aloekop',
                          surburb:[
                            {
                              name: 'Aloekop SP',
                              ward: ['6']
                            }
                          ]
                      },
                      {
                        names: 'Franklin',
                        surburb:[
                          {
                            name: 'Franklin SP',
                            ward: ['2','6']
                          }
                        ]
                    },
                    {
                      names: 'Greater Kokstad NU',
                      surburb:[
                        {
                          name: 'Greater Kokstad NU',
                          ward: ['1', '2', '3', '4', '5', '6', '7', '8', '10', '21', '26']
                        }
                      ]
                  },
                  {
                    names: 'Kansdraai',
                    surburb:[
                      {
                        name: 'Kansdraai SP',
                        ward: ['2']
                      }
                    ]
                },
                {
                  names: 'Kokstad',
                  surburb:[
                    {
                      name: 'Bhongweni',
                      ward: ['1', '3', '4', '5', '6', '8']
                    },
                    {
                      name: 'Horseshoe',
                      ward: ['1', '4', '6', '6', '7', '8']
                    },
                    {
                      name: 'Kokstad Plantations',
                      ward: ['6']
                    },
                    {
                      name: 'Kokstad SP',
                      ward: ['1', '3', '4', '5', '6', '7', '8']
                    },
                    {
                      name: 'Mount Currie Nature Reserve',
                      ward: ['6']
                    }
                  ]
              },
              {
                names: 'Pakkies ',
                surburb:[
                  {
                    name: 'Pakkies SP',
                    ward: ['6']
                  }
                ]
            },
        ]
    },
    {
      name: 'Ingwe',
      city: [
        {
          names: 'Amahlathi',
          surburb: [
            {
              name: 'Amahlathi SP',
              ward: ['2', '3', '6']
            }
          ]
        },
        {
          names: 'Amangwane',
          surburb: [
            {
              name: 'Amangwane SP',
              ward: ['7', '10']
            }
          ]
        },
        {
          names: 'Amavondwe',
          surburb: [
            {
              name: 'Amavondwe SP',
              ward: ['2', '4']
            }
          ]
        },
        {
          names: 'Bethlehem',
          surburb: [
            {
              name: 'Bethlehem SP',
              ward: ['8']
            }
          ]
        },
        {
          names: 'Bhidla',
          surburb: [
            {
              name: 'Bhidla SP',
              ward: ['8', '10']
            }
          ]
        },
        {
          names: 'Bhobhoyi',
          surburb: [
            {
              name: 'Bhobhoyi SP',
              ward: ['2', '4']
            }
          ]
        },
        {
          names: 'Bulwer',
          surburb: [
            {
              name: 'Bulwer SP',
              ward: ['9']
            },
            {
              name: 'Polela SP',
              ward: ['9']
            }
          ]
        },
        {
          names: 'Chibini',
          surburb: [
            {
              name: 'Chibini SP',
              ward: ['8', '10']
            }
          ]
        },
        {
          names: 'Creighton ',
          surburb: [
            {
              name: 'Creighton SP',
              ward: ['11']
            }
          ]
        },
        {
          names: 'Dazini',
          surburb: [
            {
              name: 'Dazini SP',
              ward: ['1','2', '3']
            }
          ]
        },
        {
          names: 'Donnybrook',
          surburb: [
            {
              name: 'Donnybrook SP',
              ward: ['5', '8', '9']
            }
          ]
        },
        {
          names: 'Embantini',
          surburb: [
            {
              name: 'Embantini SP1',
              ward: ['1']
            },
            {
              name: 'Embantini SP2',
              ward: ['1']
            }
          ]
        },
        {
          names: 'Ememela',
          surburb: [
            {
              name: 'Ememela SP',
              ward: ['8', '9']
            }
          ]
        },
        {
          names: 'Emnywaneni',
          surburb: [
            {
              name: 'Emnywaneni SP',
              ward: ['6']
            }
          ]
        },
        {
          names: 'Emvuleni',
          surburb: [
            {
              name: 'Emvuleni SP',
              ward: ['7']
            }
          ]
        },
        {
          names: 'Ensimbini',
          surburb: [
            {
              name: 'Ensimbini SP',
              ward: ['1', '3', '4']
            }
          ]
        },
        {
          names: 'Esidangeni',
          surburb: [
            {
              name: 'Esidangeni SP',
              ward: ['1', '2']
            }
          ]
        },
        {
          names: 'Ezibomvini',
          surburb: [
            {
              name: 'Ezibomvini SP',
              ward: ['7']
            }
          ]
        },
        {
          names: 'Eziphahleni',
          surburb: [
            {
              name: 'Eziphahleni SP',
              ward: ['5', '8']
            }
          ]
        },
        {
          names: 'Ezitendeni',
          surburb: [
            {
              name: 'Ezitendeni SP',
              ward: ['8', '9']
            }
          ]
        },
        {
          names: 'Gala',
          surburb: [
            {
              name: 'Gala SP',
              ward: ['3', '11']
            }
          ]
        },
        {
          names: 'Gxalingene',
          surburb: [
            {
              name: 'Gxalingene State Forest',
              ward: ['2']
            }
          ]
        },
        {
          names: 'Hlabeni',
          surburb: [
            {
              name: 'Hlabeni SP',
              ward: ['2', '3', '11']
            }
          ]
        },
        {
          names: 'Hlafuna',
          surburb: [
            {
              name: 'Hlafuna SP',
              ward: ['8', '9']
            }
          ]
        },
        {
          names: 'Hlanganani',
          surburb: [
            {
              name: 'Hlanganani SP',
              ward: ['10']
            }
          ]
        },
        {
          names: 'Ingwangwane',
          surburb: [
            {
              name: 'Ingwangwane SP',
              ward: ['1', '2', '4']
            }
          ]
        },
        {
          names: 'Ingwe NU',
          surburb: [
            {
              name: 'Hlabeni State Forest',
              ward: ['11']
            },
            {
              name: 'Ingwe NU',
              ward: ['1','2', '3', '4', '5', '6', '7', '8', '9', '10']
            },
            {
              name: 'Kwa-Yili State Forest',
              ward: ['2']
            },
            {
              name: 'Marwaqa State Forest',
              ward: ['9']
            },
          ]
        },
        {
          names: 'Isibizane',
          surburb: [
            {
              name: 'Isibizane SP',
              ward: ['2', '4', '5', '11']
            }
          ]
        },
        {
          names: 'Jubane',
          surburb: [
            {
              name: 'Jubane SP',
              ward: ['4', '7']
            }
          ]
        },
        {
          names: 'KwaMnyamana',
          surburb: [
            {
              name: 'KwaMnyamana SP',
              ward: ['5', '7', '8']
            }
          ]
        },
        {
          names: 'KwaNdonyela',
          surburb: [
            {
              name: 'KwaNdonyela SP',
              ward: ['7', '9']
            }
          ]
        },
        {
          names: 'KwaNomandlovu',
          surburb: [
            {
              name: 'KwaNomandlovu SP',
              ward: ['5', '9', '11']
            }
          ]
        },
        {
          names: 'KwaNombulala',
          surburb: [
            {
              name: 'KwaNombulala SP',
              ward: ['6', '7']
            }
          ]
        },
        {
          names: 'KwaSambane',
          surburb: [
            {
              name: 'KwaSambane SP',
              ward: ['7']
            },
            {
              name: 'Mangwaneni SP',
              ward: ['7', '10']
            }
          ]
        },
        {
          names: 'KwaSandanezwe',
          surburb: [
            {
              name: 'KwaSandanezwe SP',
              ward: ['5', '6', '7', '8']
            }
          ]
        },
        {
          names: 'KwaShusha',
          surburb: [
            {
              name: 'KwaShusha SP',
              ward: ['4']
            }
          ]
        },
        {
          names: 'Lubovana',
          surburb: [
            {
              name: 'Lubovana SP',
              ward: ['8']
            }
          ]
        },
        {
          names: 'Luwambeni',
          surburb: [
            {
              name: 'Luwambeni SP',
              ward: ['5', '6', '11']
            }
          ]
        },
        {
          names: 'Macabazini',
          surburb: [
            {
              name: 'Macabazini SP',
              ward: ['7', '10']
            }
          ]
        },
        {
          names: 'Mahoho',
          surburb: [
            {
              name: 'Mahoho SP',
              ward: ['5', '7', '8']
            }
          ]
        },
        {
          names: 'Majukujukwini',
          surburb: [
            {
              name: 'Majukujukwini SP',
              ward: ['4', '11']
            }
          ]
        },
        {
          names: 'Makholweni',
          surburb: [
            {
              name: 'Makholweni SP',
              ward: ['2', '11']
            }
          ]
        },
        {
          names: 'Makhuzeni',
          surburb: [
            {
              name: 'Makhuzeni SP',
              ward: ['3', '9', '11']
            }
          ]
        },
        {
          names: 'Maoleni',
          surburb: [
            {
              name: 'Maoleni SP',
              ward: ['5', '9']
            }
          ]
        },
        {
          names: 'Masameni',
          surburb: [
            {
              name: 'Masameni SP',
              ward: [ '6']
            }
          ]
        },
        {
          names: 'Mashayilanga',
          surburb: [
            {
              name: 'Mashayilanga SP',
              ward: ['1', '3', '4']
            }
          ]
        },
        {
          names: 'Mbulweleni',
          surburb: [
            {
              name: 'Mbulweleni SP',
              ward: ['5', '8', '9']
            }
          ]
        },
        {
          names: 'Mfulumane',
          surburb: [
            {
              name: 'Mfulumane SP',
              ward: ['1']
            }
          ]
        },
        {
          names: 'Mkhohlwa',
          surburb: [
            {
              name: 'Mkhohlwa SP',
              ward: ['10']
            }
          ]
        },
        {
          names: 'Mkobeni Kamensia',
          surburb: [
            {
              name: 'Mkobeni Kamensia SP',
              ward: ['8', '9', '10']
            }
          ]
        },
        {
          names: 'Mpumulwane A',
          surburb: [
            {
              name: 'Mpumulwane A SP',
              ward: ['2', '3', '11']
            }
          ]
        },
        {
          names: 'Mpumulwane B',
          surburb: [
            {
              name: 'Mpumulwane B SP',
              ward: ['2']
            }
          ]
        },
        {
          names: 'Mqondekweni',
          surburb: [
            {
              name: 'Mqondekweni SP',
              ward: ['3', '9', '11']
            }
          ]
        },
        {
          names: 'Mqulela',
          surburb: [
            {
              name: 'Mqulela SP',
              ward: ['8', '10']
            }
          ]
        },
        {
          names: 'Ncwadi',
          surburb: [
            {
              name: 'Ncwadi SP',
              ward: ['7', '8']
            }
          ]
        },
        {
          names: 'Ndodeni',
          surburb: [
            {
              name: 'Ndodeni SP',
              ward: ['1', '2', '4']
            }
          ]
        },
        {
          names: 'Ndulini',
          surburb: [
            {
              name: 'Ndulini SP',
              ward: ['2', '11']
            }
          ]
        },
        {
          names: 'Ngwangwane',
          surburb: [
            {
              name: 'Ngwangwane SP',
              ward: ['1', '4']
            }
          ]
        },
        {
          names: 'Ngxalingwenwa',
          surburb: [
            {
              name: 'Ngxalingwenwa SP',
              ward: ['2']
            }
          ]
        },
        {
          names: 'Ngxola',
          surburb: [
            {
              name: 'Ngxola SP',
              ward: ['1', '2']
            }
          ]
        },
        {
          names: 'Nkelabantwana',
          surburb: [
            {
              name: 'Nkelabantwana SP',
              ward: ['7', '9', '10']
            }
          ]
        },
        {
          names: 'Nkonzo',
          surburb: [
            {
              name: 'Nkonzo State Forest',
              ward: ['2', '3', '6']
            }
          ]
        },
        {
          names: 'Nkumba',
          surburb: [
            {
              name: 'Nkumba SP',
              ward: ['7', '10']
            }
          ]
        },
        {
          names: 'Nkwezela',
          surburb: [
            {
              name: 'AmahlNkwezelaathi SP',
              ward: ['5', '8', '9']
            }
          ]
        },
        {
          names: 'Nonguqa',
          surburb: [
            {
              name: 'Nonguqa SP',
              ward: ['7', '10']
            }
          ]
        },
        {
          names: 'Nqumeni',
          surburb: [
            {
              name: 'Nqumeni SP',
              ward: [ '3', '9']
            }
          ]
        },
        {
          names: 'Okhetheni',
          surburb: [
            {
              name: 'Okhetheni SP',
              ward: ['3', '11']
            }
          ]
        },
        {
          names: 'Qulashe',
          surburb: [
            {
              name: 'Qulashe SP',
              ward: ['1','2', '3', '4', '9', '11']
            }
          ]
        },
        {
          names: 'Sarnia',
          surburb: [
            {
              name: 'Sarnia State Forest A',
              ward: ['3', '9']
            },
            {
              name: 'Sarnia State Forest A',
              ward: ['5', '9', '11']
            }
          ]
        },
        {
          names: 'Sawoti',
          surburb: [
            {
              name: 'Sawoti SP',
              ward: ['6']
            }
          ]
        },
        {
          names: 'Senkwanzela',
          surburb: [
            {
              name: 'Senkwanzela SP',
              ward: ['8', '9']
            }
          ]
        },
        {
          names: 'Sibomvini',
          surburb: [
            {
              name: 'Sibomvini SP',
              ward: ['2', '4', '11']
            }
          ]
        },
        {
          names: 'Sikeshini',
          surburb: [
            {
              name: 'Sikeshini SP',
              ward: ['2', '3', '6']
            }
          ]
        },
        {
          names: 'Siwongozi',
          surburb: [
            {
              name: 'Siwongozi SP',
              ward: ['7']
            }
          ]
        },
        {
          names: 'Sizanenjana',
          surburb: [
            {
              name: 'Sizanenjana SP',
              ward: ['5', '8']
            }
          ]
        },
        {
          names: 'Tarsvaly',
          surburb: [
            {
              name: 'Tarsvaly SP',
              ward: ['11']
            }
          ]
        },
        {
          names: 'Thonsini',
          surburb: [
            {
              name: 'Thonsini SP',
              ward: ['1', '4']
            }
          ]
        },
        {
          names: 'Umjila',
          surburb: [
            {
              name: 'Umjila SP',
              ward: ['5', '11']
            }
          ]
        },
        {
          names: 'Uqaqani',
          surburb: [
            {
              name: 'Uqaqani SP',
              ward: ['1', '2']
            }
          ]
        },{
          names: 'Xosheyakhe',
          surburb: [
            {
              name: 'Xosheyakhe SP',
              ward: ['9', '10']
            }
          ]
        }

      ]
    },
    {
      name: 'Kwasani',
      city: [
        {
          names: 'Garden Castle',
          surburb: [
            {
              name: 'Garden Castle State Forest',
              ward: ['2', '4']
            }
          ]
        },
        {
          names: 'Himeville',
          surburb: [
            {
              name: 'Himeville SP',
              ward: ['2']
            }
          ]
        },
        {
          names: 'Kwa Sani NU',
          surburb: [
            {
              name: 'Cobham State Forest',
              ward: ['1','2', '3', '4']
            },
            {
              name: 'Coleford Nature Reserve',
              ward: ['1', '4']
            },
            {
              name: 'Kwa Sani NU',
              ward: ['1','2', '3', '4', '9']
            },

          ]
        },
        {
          names: 'KwaPitela',
          surburb: [
            {
              name: 'KwaPitela',
              ward: ['1']
            }
          ]
        },
        {
          names: 'Mhlangeni',
          surburb: [
            {
              name: 'Mhlangeni SP',
              ward: ['1']
            }
          ]
        },
        {
          names: 'Mkhomazana',
          surburb: [
            {
              name: 'Mkhomazana SP',
              ward: ['1']
            }
          ]
        },
        {
          names: 'Mqatsheni',
          surburb: [
            {
              name: 'Mqatsheni SP',
              ward: ['1']
            }
          ]
        },
        {
          names: 'Okhalweni',
          surburb: [
            {
              name: 'Okhalweni SP',
              ward: ['2']
            }
          ]
        },
        {
          names: 'Pesensey',
          surburb: [
            {
              name: 'Pesensey SP',
              ward: ['2']
            }
          ]
        },
        {
          names: 'The Ridge',
          surburb: [
            {
              name: 'The Ridge SP',
              ward: ['1', '9']
            }
          ]
        },
        {
          names: 'Underburg',
          surburb: [
            {
              name: 'Scotston',
              ward: ['3', '4']
            },
            {
              name: 'Underburg East',
              ward: ['3']
            },
            {
              name: 'Underburg SP',
              ward: ['3', '4']
            }
          ]
        },
      ]
    },
    {
      name: 'Ubuhlebezwe',
      city: [
        {
          names: 'Amashaka',
          surburb: [
            {
              name: 'Amashaka SP',
              ward: ['2', '3', '6']
            }
          ]
        },
        {
          names: 'Amatolo',
          surburb: [
            {
              name: 'Amatolo SP',
              ward: ['2', '3', '6']
            }
          ]
        },
        {
          names: 'Bhobhobho',
          surburb: [
            {
              name: 'Bhobhobho SP',
              ward: ['5', '7', '8']
            }
          ]
        },
        {
          names: 'Bongindawo',
          surburb: [
            {
              name: 'Bongindawo SP',
              ward: ['8', '9']
            }
          ]
        },
        {
          names: 'Bovini',
          surburb: [
            {
              name: 'Bovini SP',
              ward: ['11', '12', '15']
            }
          ]
        },
        {
          names: 'Echibini',
          surburb: [
            {
              name: 'Echibini SP',
              ward: ['2', '3', '4']
            }
          ]
        },
        {
          names: 'Emkhubane',
          surburb: [
            {
              name: 'Emkhubane SP',
              ward: ['7', '8']
            }
          ]
        },
        {
          names: 'Esigubudwini',
          surburb: [
            {
              name: 'Esigubudwini SP',
              ward: ['10', '12', '15']
            }
          ]
        },
        {
          names: 'Etshelinenduna',
          surburb: [
            {
              name: 'Etshelinenduna SP',
              ward: ['10', '12']
            }
          ]
        },

        {
          names: 'Gqumeni',
          surburb: [
            {
              name: 'Gqumeni SP',
              ward: ['5', '9']
            }
          ]
        },
        {
          names: 'Highflats',
          surburb: [
            {
              name: 'Highflats SP',
              ward: ['9']
            }
          ]
        },
        {
          names: 'Hlokozi',
          surburb: [
            {
              name: 'Hlokozi SP',
              ward: ['6', '7', '8', '9']
            }
          ]
        },
        {
          names: 'Hlutankungu',
          surburb: [
            {
              name: 'Hlutankungu SP',
              ward: ['7', '8']
            }
          ]
        },
        {
          names: 'Icabazi',
          surburb: [
            {
              name: 'Icabazi SP',
              ward: ['1', '2', '11', '17']
            }
          ]
        },
        {
          names: 'Incalu',
          surburb: [
            {
              name: 'Incalu SP',
              ward: ['11', '12']
            }
          ]
        },
        {
          names: 'Ixopo',
          surburb: [
            {
              name: 'Ixopo SP',
              ward: ['2', '4', '11']
            }
          ]
        },
        {
          names: 'Jolivet',
          surburb: [
            {
              name: 'Jolivet SP',
              ward: ['7', '8', '9']
            }
          ]
        },
        {
          names: 'Kadeda',
          surburb: [
            {
              name: 'Kadeda SP',
              ward: ['5', '9']
            }
          ]
        },
        {
          names: 'Koshange',
          surburb: [
            {
              name: 'Koshange SP',
              ward: ['5', '9']
            }
          ]
        },
        {
          names: 'Kozondi',
          surburb: [
            {
              name: 'Kozondi SP',
              ward: ['5', '9']
            }
          ]
        },
        {
          names: 'KuMpondo',
          surburb: [
            {
              name: 'KuMpondo SP',
              ward: ['7', '8']
            }
          ]
        },
        {
          names: 'KuMpontshosi',
          surburb: [
            {
              name: 'KuMpontshosi SP',
              ward: ['5', '7', '8']
            }
          ]
        },
        {
          names: 'KwaBhidla',
          surburb: [
            {
              name: 'KwaBhidla SP',
              ward: ['3', '4', '9', '10']
            }
          ]
        },
        {
          names: 'KwaMagidigidi',
          surburb: [
            {
              name: 'KwaMagidigidi SP',
              ward: ['3', '4', '9']
            }
          ]
        },
        {
          names: 'KwaNokweja',
          surburb: [
            {
              name: 'KwaNokweja SP',
              ward: ['1', '11']
            }
          ]
        },
        {
          names: 'Kweletsheni',
          surburb: [
            {
              name: 'Kweletsheni SP',
              ward: ['5']
            }
          ]
        },
        {
          names: 'Lufafa',
          surburb: [
            {
              name: 'Lufafa SP',
              ward: ['3', '4', '6']
            }
          ]
        },
        {
          names: 'Mahehle',
          surburb: [
            {
              name: 'Mahehle SP',
              ward: ['1', '2', '5', '11']
            }
          ]
        },
        {
          names: 'Mandlekazi',
          surburb: [
            {
              name: 'Mandlekazi SP',
              ward: ['5', '8', '9']
            }
          ]
        },
        {
          names: 'Mantulela',
          surburb: [
            {
              name: 'Mantulela SP',
              ward: ['6', '8']
            }
          ]
        },
        {
          names: 'Manazayabila',
          surburb: [
            {
              name: 'Manazayabila SP',
              ward: [ '9', '12']
            }
          ]
        },
        {
          names: 'Mariathal',
          surburb: [
            {
              name: 'Mariathal SP',
              ward: ['4']
            }
          ]
        },
        {
          names: 'Mgobansimbi',
          surburb: [
            {
              name: 'Mgobansimbi SP',
              ward: ['3', '4', '6']
            }
          ]
        },
        {
          names: 'Mgodi',
          surburb: [
            {
              name: 'Mgodi SP',
              ward: ['10', '12']
            }
          ]
        },
        {
          names: 'Mhlabatshane',
          surburb: [
            {
              name: 'Mhlabatshane SP',
              ward: ['3', '4', '9', '10', '15']
            }
          ]
        },
        {
          names: 'Mhlweni',
          surburb: [
            {
              name: 'Mhlweni SP',
              ward: ['1', '2', '11']
            }
          ]
        },
        {
          names: 'Mkhunya',
          surburb: [
            {
              name: 'Mkhunya SP',
              ward: ['5']
            }
          ]
        },
        {
          names: 'Mphesheya',
          surburb: [
            {
              name: 'Mphesheya SP',
              ward: ['11', '15', '20']
            }
          ]
        },
        {
          names: 'Mpofini',
          surburb: [
            {
              name: 'Mpofini SP',
              ward: [ '3', '9']
            }
          ]
        },
        {
          names: 'Mpunga',
          surburb: [
            {
              name: 'Mpunga SP',
              ward: ['7', '8', '9']
            }
          ]
        },
        {
          names: 'Mvusthini',
          surburb: [
            {
              name: 'Mvusthini SP',
              ward: ['11', '17', '20']
            }
          ]
        },
        {
          names: 'Mziki',
          surburb: [
            {
              name: 'Mziki SP',
              ward: ['5', '8', '9']
            }
          ]
        },
        {
          names: 'Ndonyane',
          surburb: [
            {
              name: 'Ndonyane SP',
              ward: ['5', '7', '8', '9']
            }
          ]
        },
        {
          names: 'Ndunduma',
          surburb: [
            {
              name: 'Ndunduma SP',
              ward: ['5', '7']
            }
          ]
        },
        {
          names: 'Ngongonini',
          surburb: [
            {
              name: 'Ngongonini SP',
              ward: ['11', '12', '15']
            }
          ]
        },
        {
          names: 'Nhlangwini',
          surburb: [
            {
              name: 'Nhlangwini SP',
              ward: ['3', '6', '9']
            }
          ]
        },
        {
          names: 'Nhlozane',
          surburb: [
            {
              name: 'Nhlozane SP',
              ward: ['6', '8']
            }
          ]
        },
        {
          names: 'Nkalokazi',
          surburb: [
            {
              name: 'Nkalokazi SP',
              ward: ['12', '15']
            }
          ]
        },
        {
          names: 'Nkwanini',
          surburb: [
            {
              name: 'Nkwanini SP',
              ward: ['6', '8', '9']
            }
          ]
        },
        {
          names: 'Ntabane',
          surburb: [
            {
              name: 'Ntabane SP',
              ward: ['5', '6', '9']
            }
          ]
        },
        {
          names: 'Ntambama',
          surburb: [
            {
              name: 'Ntambama SP',
              ward: ['9', '12']
            }
          ]
        },
        {
          names: 'Ntapha',
          surburb: [
            {
              name: 'Ntapha SP',
              ward: ['6', '8', '9']
            }
          ]
        },
        {
          names: 'Ntshayamoya',
          surburb: [
            {
              name: 'Ntshayamoya SP',
              ward: ['11', '12']
            }
          ]
        },
        {
          names: 'Phuthini',
          surburb: [
            {
              name: 'Phuthini SP',
              ward: ['12']
            }
          ]
        },
        {
          names: 'Plainhill',
          surburb: [
            {
              name: 'Plainhill SP',
              ward: ['2', '11', '12']
            }
          ]
        },
        {
          names: 'Qumeni',
          surburb: [
            {
              name: 'Qumeni SP',
              ward: [ '5', '8']
            }
          ]
        },
        {
          names: 'Sangcwaba',
          surburb: [
            {
              name: 'Sangcwaba SP',
              ward: ['5', '8']
            }
          ]
        },
        {
          names: 'Somelulwazi',
          surburb: [
            {
              name: 'Somelulwazi SP',
              ward: ['8']
            }
          ]
        },
        {
          names: 'Springvale Mission',
          surburb: [
            {
              name: 'Springvale Mission SP',
              ward: ['9']
            }
          ]
        },
        {
          names: 'Tsheleni',
          surburb: [
            {
              name: 'Tsheleni SP',
              ward: ['10', '12', '15']
            }
          ]
        },
        {
          names: 'Ubuhlebezwe NU',
          surburb: [
            {
              name: 'Ubuhlebezwe NU',
              ward: ['1','2', '3','4', '5','6', '7', '8', '9', '10', '11', '12', '16', '17', '19']
            }
          ]
        },
        {
          names: 'Umhlabatyan',
          surburb: [
            {
              name: 'Umhlabatyan SP',
              ward: ['10', '12']
            }
          ]
        },  
        {
          names: 'Velabathuke',
          surburb: [
            {
              name: 'Velabathuke SP',
              ward: ['9', '11', '12']
            }
          ]
        },

      ]
    },
    {
      name: 'Umzimkhulu',
      city: [
        {
          names: 'Amaroma',
          surburb: [
            {
              name: 'Amaroma SP',
              ward: ['10', '18']
            }
          ]
        },
        {
          names: 'Balbel',
          surburb: [
            {
              name: 'Balbel SP',
              ward: ['10', '18']
            }
          ]
        },
        {
          names: 'Ben Cairnie',
          surburb: [
            {
              name: 'Ben Cairnie Forest Reserve SP',
              ward: ['6', '10']
            }
          ]
        },
        {
          names: 'Bizweni',
          surburb: [
            {
              name: 'Bizweni SP',
              ward: ['1', '16', '19']
            }
          ]
        },
        {
          names: 'Blema',
          surburb: [
            {
              name: 'Blema SP',
              ward: ['9', '11', '20']
            }
          ]
        },
        {
          names: 'Bovini',
          surburb: [
            {
              name: 'Bovini SP',
              ward: ['3']
            }
          ]
        },
        {
          names: 'Bridge',
          surburb: [
            {
              name: 'Bridge SP',
              ward: ['2', '3']
            }
          ]
        },
        {
          names: 'Cacadu',
          surburb: [
            {
              name: 'Cacadu SP',
              ward: ['6']
            }
          ]
        },
        {
          names: 'Cancele',
          surburb: [
            {
              name: 'Cancele SP',
              ward: ['9', '19']
            }
          ]
        },
        {
          names: 'Chiya',
          surburb: [
            {
              name: 'Chiya SP',
              ward: ['11']
            }
          ]
        },
        {
          names: 'Clydesdale',
          surburb: [
            {
              name: 'Clydesdale Ext 2',
              ward: ['17']
            },
            {
              name: 'Clydesdale Ext 3',
              ward: ['16','17']
            },
            {
              name: 'Clydesdale Ext 5',
              ward: ['16','17']
            },
            {
              name: 'Clydesdale SP',
              ward: ['9','17']
            },
          ]
        },

        {
          names: 'Deda',
          surburb: [
            {
              name: 'Deda SP',
              ward: ['3']
            }
          ]
        },
        {
          names: 'Deepdale Tshali',
          surburb: [
            {
              name: 'Deepdale Tshali SP',
              ward: ['12']
            }
          ]
        },
        {
          names: 'Delamuzi',
          surburb: [
            {
              name: 'Delamuzi SP',
              ward: ['1', '3']
            }
          ]
        },
        {
          names: 'Diepkloof',
          surburb: [
            {
              name: 'Diepkloof SP',
              ward: ['13', '15', '20']
            }
          ]
        },
        {
          names: 'Dikidiki',
          surburb: [
            {
              name: 'Dikidiki SP',
              ward: ['8']
            }
          ]
        },
        {
          names: 'Dlamini',
          surburb: [
            {
              name: 'Dlamini SP',
              ward: ['3']
            }
          ]
        },
        {
          names: 'Dlangamandla',
          surburb: [
            {
              name: 'Dlangamandla SP',
              ward: ['9']
            }
          ]
        },
        {
          names: 'Drayini',
          surburb: [
            {
              name: 'Drayini SP',
              ward: ['15']
            }
          ]
        },
        {
          names: 'Dressini',
          surburb: [
            {
              name: 'Dressini SP',
              ward: ['2', '8']
            }
          ]
        },
        {
          names: 'Driefontein',
          surburb: [
            {
              name: 'Driefontein A',
              ward: ['8']
            },
            {
              name: 'Driefontein B',
              ward: ['8']
            }
          ]
        },
        {
          names: 'Dryhoek',
          surburb: [
            {
              name: 'Dryhoek SP',
              ward: ['1', '7']
            }
          ]
        },
        {
          names: 'Dumisa',
          surburb: [
            {
              name: 'Dumisa SP',
              ward: ['6']
            }
          ]
        },{
          names: 'Edgeton',
          surburb: [
            {
              name: 'Edgeton SP',
              ward: ['2']
            }
          ]
        },
        {
          names: 'Ehula',
          surburb: [
            {
              name: 'Ehula SP',
              ward: ['17']
            }
          ]
        },
        {
          names: 'Elengwe',
          surburb: [
            {
              name: 'Elengwe SP',
              ward: ['4']
            }
          ]
        },
        {
          names: 'Elucingweni',
          surburb: [
            {
              name: 'Elucingweni SP',
              ward: ['1', '2']
            }
          ]
        },
        {
          names: 'Elukhasini',
          surburb: [
            {
              name: 'Elukhasini SP',
              ward: ['1', '3']
            }
          ]
        },
        {
          names: 'Emvubukazi',
          surburb: [
            {
              name: 'Emvubukazi A',
              ward: ['19']
            },
            {
              name: 'Emvubukazi B',
              ward: ['9','19']
            }
          ]
        },
        {
          names: 'Engunjini',
          surburb: [
            {
              name: 'Engunjini SP',
              ward: ['8']
            }
          ]
        },
        {
          names: 'Enyanisweni',
          surburb: [
            {
              name: 'Enyanisweni SP',
              ward: ['2']
            }
          ]
        },
        {
          names: 'Esibovini',
          surburb: [
            {
              name: 'Esibovini SP',
              ward: ['6']
            }
          ]
        },
        {
          names: 'Esicwecweni',
          surburb: [
            {
              name: 'Esicwecweni SP',
              ward: ['12', '18']
            }
          ]
        },
        {
          names: 'Esikawini',
          surburb: [
            {
              name: 'Esikawini SP',
              ward: ['3', '4']
            }
          ]
        },
        {
          names: 'Esikolweni',
          surburb: [
            {
              name: 'Esikolweni SP',
              ward: ['1']
            }
          ]
        },
        {
          names: 'Eziflethini',
          surburb: [
            {
              name: 'Eziflethini SP',
              ward: ['1']
            }
          ]
        },
        {
          names: 'Eziqalabeni',
          surburb: [
            {
              name: 'Eziqalabeni SP',
              ward: ['1']
            }
          ]
        },
        {
          names: 'Gaybrook',
          surburb: [
            {
              name: 'Gaybrook SP',
              ward: ['10', '18']
            }
          ]
        },

        {
          names: 'Germiston',
          surburb: [
            {
              name: 'Germiston SP',
              ward: ['5']
            }
          ]
        },
        {
          names: 'Gloveester',
          surburb: [
            {
              name: 'Gloveester SP',
              ward: ['15']
            }
          ]
        },
        {
          names: 'Goxe',
          surburb: [
            {
              name: 'Goxe SP',
              ward: ['9']
            }
          ]
        },
        {
          names: 'Groot Verlangen',
          surburb: [
            {
              name: 'Groot Verlangen SP',
              ward: ['13']
            }
          ]
        },
        {
          names: 'Gudlintaba',
          surburb: [
            {
              name: 'Gudlintaba SP1',
              ward: ['6']
            },
            {
              name: 'Gudlintaba SP2',
              ward: ['7']
            }
          ]
        },
        {
          names: 'Gugwini',
          surburb: [
            {
              name: 'Gugwini SP',
              ward: ['14']
            }
          ]
        },
        {
          names: 'Gujedlini',
          surburb: [
            {
              name: 'Gujedlini SP',
              ward: ['5']
            }
          ]
        },
        {
          names: 'Highlands',
          surburb: [
            {
              name: 'Highlands SP',
              ward: ['17', '20']
            }
          ]
        },
        {
          names: 'Hlontlweni',
          surburb: [
            {
              name: 'Hlontlweni SP',
              ward: ['11']
            }
          ]
        },
        {
          names: 'Holland',
          surburb: [
            {
              name: 'Holland SP',
              ward: ['6']
            }
          ]
        },
        {
          names: 'Hopewell',
          surburb: [
            {
              name: 'Hopewell SP',
              ward: ['17']
            }
          ]
        },
        {
          names: 'Ibisikululwa',
          surburb: [
            {
              name: 'Ibisikululwa SP',
              ward: ['11', '13', '20']
            }
          ]
        },
        {
          names: 'Imbulumbu',
          surburb: [
            {
              name: 'Imbulumbu SP',
              ward: ['12']
            }
          ]
        },
        {
          names: 'Indawana',
          surburb: [
            {
              name: 'Indawana SP',
              ward: ['1']
            }
          ]
        },
        {
          names: 'Jabula',
          surburb: [
            {
              name: 'Jabula SP',
              ward: ['9']
            }
          ]
        },
        {
          names: 'Jabulani',
          surburb: [
            {
              name: 'Jabulani SP',
              ward: ['11', '20']
            }
          ]
        },
        {
          names: 'Jalimeka',
          surburb: [
            {
              name: 'Jalimeka SP',
              ward: ['14']
            }
          ]
        },
        {
          names: 'James',
          surburb: [
            {
              name: 'James SP',
              ward: ['11']
            }
          ]
        },
        {
          names: 'Juta',
          surburb: [
            {
              name: 'Juta SP',
              ward: ['10', '18']
            }
          ]
        },
        {
          names: 'Kayeka',
          surburb: [
            {
              name: 'Kayeka SP',
              ward: ['1']
            }
          ]
        },
        {
          names: 'Khetheni',
          surburb: [
            {
              name: 'Khetheni A',
              ward: ['14']
            },
            {
              name: 'Khetheni B',
              ward: ['13']
            }
          ]
        },
        {
          names: 'Kiliver',
          surburb: [
            {
              name: 'Kiliver SP',
              ward: ['12', '14']
            }
          ]
        },
        {
          names: 'Klipspruit',
          surburb: [
            {
              name: 'Klipspruit SP',
              ward: ['7', '10']
            }
          ]
        },
        {
          names: 'Korinte',
          surburb: [
            {
              name: 'Korinte SP',
              ward: ['2', '4', '5']
            }
          ]
        },
        {
          names: 'Kromdraai',
          surburb: [
            {
              name: 'Kromdraai SP',
              ward: ['10', '18']
            }
          ]
        },
        {
          names: 'Kromhoek',
          surburb: [
            {
              name: 'Kromhoek SP',
              ward: ['15', '17', '20']
            }
          ]
        },
        {
          names: 'KwaCebe',
          surburb: [
            {
              name: 'KwaCebe SP',
              ward: ['9']
            }
          ]
        },
        {
          names: 'KwaDluni',
          surburb: [
            {
              name: 'KwaDluni SP',
              ward: ['4']
            }
          ]
        },
        {
          names: 'KwaDulatha',
          surburb: [
            {
              name: 'KwaDulatha SP',
              ward: ['4']
            }
          ]
        },
        {
          names: 'KwaLori',
          surburb: [
            {
              name: 'KwaLori SP',
              ward: ['2', '3', '12', '14']
            }
          ]
        },
        {
          names: 'KwaMakhanya',
          surburb: [
            {
              name: 'KwaMakhanya SP',
              ward: ['5']
            }
          ]
        },
        {
          names: 'KwaNongidi',
          surburb: [
            {
              name: 'KwaNongidi SP',
              ward: [ '18']
            }
          ]
        },
        {
          names: 'KwaPile',
          surburb: [
            {
              name: 'KwaPile SP',
              ward: ['10']
            }
          ]
        },
        {
          names: 'KweLemtini',
          surburb: [
            {
              name: 'KweLemtini SP',
              ward: ['7','12', '18']
            }
          ]
        },
        {
          names: 'Lalini',
          surburb: [
            {
              name: 'Lalini SP',
              ward: ['6']
            }
          ]
        },
        {
          names: 'Langgewacht Forest Reserve',
          surburb: [
            {
              name: 'Langgewacht Forest Reserve SP',
              ward: ['6','7','10', '18']
            }
          ]
        },
        {
          names: 'Long Clove',
          surburb: [
            {
              name: 'Long Clove SP',
              ward: ['15']
            }
          ]
        },
        {
          names: 'Lotvan',
          surburb: [
            {
              name: 'Lotvan SP',
              ward: ['12', '18']
            }
          ]
        },
        {
          names: 'Lucingweni',
          surburb: [
            {
              name: 'Lucingweni SP',
              ward: ['11', '13']
            }
          ]
        },
        {
          names: 'Lukalweni',
          surburb: [
            {
              name: 'Lukalweni SP',
              ward: ['5']
            }
          ]
        },
        {
          names: 'Lukhanyeni',
          surburb: [
            {
              name: 'Lukhanyeni SP',
              ward: ['5']
            }
          ]
        },
        {
          names: 'Luphongolo',
          surburb: [
            {
              name: 'Luphongolo SP',
              ward: ['2', '5']
            }
          ]
        },
        {
          names: 'Lusizini',
          surburb: [
            {
              name: 'Lusizini SP',
              ward: ['19']
            }
          ]
        },
        {
          names: 'Lusutu',
          surburb: [
            {
              name: 'Lusutu SP',
              ward: ['1']
            }
          ]
        },
        {
          names: 'Mabisane',
          surburb: [
            {
              name: 'Mabisane SP',
              ward: ['14', '15']
            }
          ]
        },
        {
          names: 'Mabuyana',
          surburb: [
            {
              name: 'Mabuyana SP',
              ward: ['7']
            }
          ]
        },
        {
          names: 'Machunwini',
          surburb: [
            {
              name: 'Machunwini SP',
              ward: ['7','12', '18']
            }
          ]
        },
        {
          names: 'Madakeni',
          surburb: [
            {
              name: 'Madakeni SP',
              ward: ['9','17', '20']
            }
          ]
        },
        {
          names: 'Madlatu',
          surburb: [
            {
              name: 'Madlatu SP',
              ward: ['10']
            }
          ]
        },
        {
          names: 'Maduna',
          surburb: [
            {
              name: 'Maduna SP',
              ward: ['7']
            }
          ]
        },
        {
          names: 'Magangxosini',
          surburb: [
            {
              name: 'Magangxosini SP',
              ward: ['5']
            }
          ]
        },
        {
          names: 'Magcakini',
          surburb: [
            {
              name: 'Magcakini SP',
              ward: ['6']
            }
          ]
        },
        {
          names: 'Magikala',
          surburb: [
            {
              name: 'Magikala SP',
              ward: ['18']
            }
          ]
        },
        {
          names: 'Magoagoeni',
          surburb: [
            {
              name: 'Magoagoeni SP',
              ward: ['11', '12', '15', '17', '20']
            }
          ]
        },
        {
          names: 'Magqagqeni',
          surburb: [
            {
              name: 'Magqagqeni SP',
              ward: ['4']
            }
          ]
        },
        {
          names: 'Mahawini',
          surburb: [
            {
              name: 'Mahawini SP',
              ward: ['9']
            }
          ]
        },
        {
          names: 'Mahobe',
          surburb: [
            {
              name: 'Mahobe SP',
              ward: ['13', '14']
            }
          ]
        },
        {
          names: 'Makhaleni',
          surburb: [
            {
              name: 'Makhaleni SP',
              ward: ['3', '12']
            }
          ]
        },
        {
          names: 'Makhamleni',
          surburb: [
            {
              name: 'Makhamleni SP',
              ward: ['1', '4']
            }
          ]
        },
        {
          names: 'Makholweni',
          surburb: [
            {
              name: 'Makholweni SP',
              ward: ['6']
            }
          ]
        },
        {
          names: 'Malenge',
          surburb: [
            {
              name: 'Malenge A',
              ward: ['10', '18']
            }
          ]
        },
        {
          names: 'Mameni',
          surburb: [
            {
              name: 'Mameni',
              ward: ['11', '12', '13']
            }
          ]
        },
        {
          names: 'Mangeni',
          surburb: [
            {
              name: 'Mangeni SP',
              ward: ['1']
            }
          ]
        },
        {
          names: 'Manqorholweni',
          surburb: [
            {
              name: 'Manqorholweni SP',
              ward: ['10']
            }
          ]
        },
        {
          names: 'Mantuzeleni',
          surburb: [
            {
              name: 'Mantuzeleni SP',
              ward: ['14']
            }
          ]
        },
        {
          names: 'Manyanya',
          surburb: [
            {
              name: 'Manyanya SP',
              ward: ['12']
            }
          ]
        },
        {
          names: 'Maplazini',
          surburb: [
            {
              name: 'Maplazini SP',
              ward: ['14']
            }
          ]
        },
        {
          names: 'Marambeni',
          surburb: [
            {
              name: 'Marambeni SP',
              ward: ['3', '4']
            }
          ]
        },
        {
          names: 'Maranjeni',
          surburb: [
            {
              name: 'Maranjeni SP',
              ward: ['4']
            }
          ]
        },
        {
          names: 'Marhewini',
          surburb: [
            {
              name: 'Marhewini SP',
              ward: ['4']
            }
          ]
        },
        {
          names: 'Maromeni',
          surburb: [
            {
              name: 'Maromeni SP',
              ward: ['8']
            }
          ]
        },
        {
          names: 'Marwaqa',
          surburb: [
            {
              name: 'Marwaqa SP',
              ward: ['6', '19']
            }
          ]
        },
        {
          names: 'Masameni',
          surburb: [
            {
              name: 'Masameni A',
              ward: ['12']
            },
            {
              name: 'Masameni B',
              ward: ['4']
            }
          ]
        },
        {
          names: 'Matatama',
          surburb: [
            {
              name: 'Matatama SP',
              ward: ['9']
            }
          ]
        },
        {
          names: 'Matsela',
          surburb: [
            {
              name: 'Matsela SP',
              ward: ['15', '20']
            }
          ]
        },
        {
          names: 'Matshetsha',
          surburb: [
            {
              name: 'Matshetsha SP',
              ward: ['3']
            }
          ]
        },
        {
          names: 'Matshitshi',
          surburb: [
            {
              name: 'Matshitshi SP',
              ward: ['1', '7']
            }
          ]
        },
        {
          names: 'Matyeni',
          surburb: [
            {
              name: 'Matyeni A',
              ward: ['13']
            },
            {
              name: 'Matyeni B',
              ward: ['6']
            }
          ]
        },
        {
          names: 'Mawusi',
          surburb: [
            {
              name: 'Mawusi SP',
              ward: ['6']
            }
          ]
        },
        {
          names: 'Mbajwa',
          surburb: [
            {
              name: 'Mbajwa SP',
              ward: ['2', '14']
            }
          ]
        },
        {
          names: 'Mbuzweni',
          surburb: [
            {
              name: 'Mbuzweni SP',
              ward: ['12']
            }
          ]
        },
        {
          names: 'Mdeni',
          surburb: [
            {
              name: 'Mdeni SP1',
              ward: ['11', '20']
            },
            {
              name: 'Mdeni SP2',
              ward: ['5']
            }

          ]
        },

        {
          names: 'Mehlomane',
          surburb: [
            {
              name: 'Mehlomane SP',
              ward: ['12']
            }
          ]
        },
        {
          names: 'Mfulamhle',
          surburb: [
            {
              name: 'Mfulamhle SP',
              ward: ['1', '7']
            }
          ]
        },
        {
          names: 'Mfundweni',
          surburb: [
            {
              name: 'Mfundweni SP',
              ward: ['11', '13']
            }
          ]
        },
        {
          names: 'Mlenzana',
          surburb: [
            {
              name: 'Mlenzana SP',
              ward: ['2', '4', '8']
            }
          ]
        },
        {
          names: 'Mmusa',
          surburb: [
            {
              name: 'Mmusa SP',
              ward: [ '18']
            }
          ]
        },
        {
          names: 'Mncweba',
          surburb: [
            {
              name: 'Mncweba SP',
              ward: ['3']
            }
          ]
        },
        {
          names: 'Mkangala',
          surburb: [
            {
              name: 'Mkangala SP',
              ward: ['4']
            }
          ]
        },
        {
          names: 'Mnqumeni',
          surburb: [
            {
              name: 'Mnqumeni B',
              ward: ['13', '15']
            }
          ]
        },
        {
          names: 'Mountain Home',
          surburb: [
            {
              name: 'Mountain Home SP',
              ward: ['19']
            }
          ]
        },
        {
          names: 'Moyeni',
          surburb: [
            {
              name: 'Moyeni SP',
              ward: ['4', '6']
            }
          ]
        },
        {
          names: 'Mpakameni',
          surburb: [
            {
              name: 'Mpakameni SP1',
              ward: ['11']
            },
            {
              name: 'Mpakameni SP1',
              ward: ['15', '20']
            }
          ]
        },
        {
          names: 'Mpenkulu',
          surburb: [
            {
              name: 'Mpenkulu SP',
              ward: ['9']
            }
          ]
        },
        {
          names: 'Mpupumeni',
          surburb: [
            {
              name: 'Mpupumeni SP',
              ward: ['1', '2', '4']
            }
          ]
        },
        {
          names: 'Mpur',
          surburb: [
            {
              name: 'Mpur Forest Reserve',
              ward: ['8']
            },
            {
              name: 'Mpur SP',
              ward: ['8']
            }
          ]
        },
        {
          names: 'Mqhokweni',
          surburb: [
            {
              name: 'Mqhokweni SP',
              ward: ['18']
            }
          ]
        },
        {
          names: 'Mqumeni',
          surburb: [
            {
              name: 'Mqumeni SP',
              ward: ['1', '14']
            }
          ]
        },
        {
          names: 'Mthwana',
          surburb: [
            {
              name: 'Mthwana SP',
              ward: ['18']
            }
          ]
        },
        {
          names: 'Mtintanyoni',
          surburb: [
            {
              name: 'Mtintanyoni SP',
              ward: ['1', '14']
            }
          ]
        },
        {
          names: 'Mtshazo',
          surburb: [
            {
              name: 'Mtshazo SP',
              ward: ['14']
            }
          ]
        },
        {
          names: 'Mzintlanga',
          surburb: [
            {
              name: 'Mzintlanga SP',
              ward: ['2']
            }
          ]
        },
        {
          names: 'Nazareth',
          surburb: [
            {
              name: 'Nazareth A',
              ward: ['7']
            },
            {
              name: 'Nazareth B',
              ward: ['11','20']
            }
          ]
        },
        {
          names: 'Ncambele',
          surburb: [
            {
              name: 'Ncambele SP',
              ward: ['10']
            }
          ]
        },
        {
          names: 'Ndakeni',
          surburb: [
            {
              name: 'Ndakeni SP',
              ward: ['9']
            }
          ]
        },
        {
          names: 'Ndawana',
          surburb: [
            {
              name: 'Ndawana SP',
              ward: ['1']
            }
          ]
        },
        {
          names: 'Ndideni',
          surburb: [
            {
              name: 'Ndideni SP',
              ward: ['14']
            }
          ]
        },
        {
          names: 'Ndlovini',
          surburb: [
            {
              name: 'Ndlovini A',
              ward: ['1', '14']
            },
            {
              name: 'Ndlovini B',
              ward: ['14']
            }
          ]
        },
        {
          names: 'Mdumakude',
          surburb: [
            {
              name: 'Mdumakude SP',
              ward: ['5']
            }
          ]
        },
        {
          names: 'Ndzombane',
          surburb: [
            {
              name: 'Ndzombane SP',
              ward: ['6','8']
            }
          ]
        },
        {
          names: 'New Village',
          surburb: [
            {
              name: 'New Village SP',
              ward: ['1']
            }
          ]
        },
        {
          names: 'Ngceni',
          surburb: [
            {
              name: 'Ngceni SP',
              ward: ['15']
            }
          ]
        },
        {
          names: 'Ngqokozweni',
          surburb: [
            {
              name: 'Ngqokozweni SP',
              ward: ['9']
            }
          ]
        },
        {
          names: 'Ngqumareni',
          surburb: [
            {
              name: 'Ngqumareni SP',
              ward: ['10']
            }
          ]
        },
        {
          names: 'Nguse',
          surburb: [
            {
              name: 'Nguse SP',
              ward: ['1','7','19']
            }
          ]
        },

        {
          names: 'Ngwagwane',
          surburb: [
            {
              name: 'Ngwagwane SP',
              ward: ['4', '5', '11']
            }
          ]
        },
        {
          names: 'Ngxapangxapa',
          surburb: [
            {
              name: 'Ngxapangxapa SP',
              ward: ['12']
            }
          ]
        },
        {
          names: 'Niewjaarsfontein',
          surburb: [
            {
              name: 'Niewjaarsfontein SP',
              ward: ['8','10']
            }
          ]
        },
        {
          names: 'Njunga',
          surburb: [
            {
              name: 'Njunga SP',
              ward: ['10']
            }
          ]
        },
        {
          names: 'Nkadudu',
          surburb: [
            {
              name: 'Nkadudu SP',
              ward: ['15', '20']
            }
          ]
        },
        {
          names: 'Nkampini',
          surburb: [
            {
              name: 'Nkampini SP',
              ward: ['10', '18']
            }
          ]
        },
        {
          names: 'Nkapha',
          surburb: [
            {
              name: 'Nkapha SP',
              ward: ['14']
            }
          ]
        },
        {
          names: 'Nkofeni',
          surburb: [
            {
              name: 'Nkofeni SP',
              ward: ['12', '13']
            }
          ]
        },
        {
          names: 'Nkomeni',
          surburb: [
            {
              name: 'Nkomeni SP',
              ward: ['5']
            }
          ]
        },
        {
          names: 'Nkqozana',
          surburb: [
            {
              name: 'Nkqozana SP',
              ward: ['6']
            }
          ]
        },
        {
          names: 'Nodwengu',
          surburb: [
            {
              name: 'Nodwengu SP',
              ward: ['19']
            }
          ]
        },
        {
          names: 'Nolangeni',
          surburb: [
            {
              name: 'Nolangeni SP',
              ward: [ '19']
            }
          ]
        },
        {
          names: 'Nomdaphu',
          surburb: [
            {
              name: 'Nomdaphu SP',
              ward: ['12', '13']
            }
          ]
        },
        {
          names: 'Nomeva',
          surburb: [
            {
              name: 'Nomeva SP',
              ward: ['6', '9']
            }
          ]
        },

        {
          names: 'Nongidi',
          surburb: [
            {
              name: 'Nongidi SP1',
              ward: ['5']
            },
            {
              name: 'Nongidi SP2',
              ward: ['7']
            },
          ]
        },
        {
          names: 'Nonginqa',
          surburb: [
            {
              name: 'Nonginqa SP',
              ward: ['3', '4']
            }
          ]
        },{
          names: 'Novukela',
          surburb: [
            {
              name: 'Novukela SP',
              ward: ['8', '18']
            }
          ]
        },
        {
          names: 'Nqabelweni',
          surburb: [
            {
              name: 'Nqabelweni SP',
              ward: ['4']
            }
          ]
        },
        {
          names: 'Nqabeni',
          surburb: [
            {
              name: 'Nqabeni SP',
              ward: ['4']
            }
          ]
        },
        {
          names: 'Nqwaqa',
          surburb: [
            {
              name: 'Nqwaqa SP',
              ward: ['3']
            }
          ]
        },
        {
          names: 'Ntabeni',
          surburb: [
            {
              name: 'Ntabeni SP',
              ward: ['6']
            }
          ]
        },
        {
          names: 'Ntambamasoka',
          surburb: [
            {
              name: 'Ntambamasoka SP',
              ward: ['16', '17', '19']
            }
          ]
        },
        {
          names: 'Ntlangwini',
          surburb: [
            {
              name: 'Ntlangwini SP',
              ward: ['18']
            }
          ]
        },
        {
          names: 'Ntlobeni',
          surburb: [
            {
              name: 'Ntlobeni SP',
              ward: [ '13']
            }
          ]
        },
        {
          names: 'Ntshabeni',
          surburb: [
            {
              name: 'Ntshabeni SP',
              ward: ['15', '20']
            }
          ]
        },
        {
          names: 'Ntsikeni',
          surburb: [
            {
              name: 'Ntsikeni SP',
              ward: ['3']
            }
          ]
        },
        {
          names: 'Nyaka',
          surburb: [
            {
              name: 'Nyaka SP',
              ward: ['5']
            }
          ]
        },
        {
          names: 'Nyanisweni',
          surburb: [
            {
              name: 'Nyanisweni SP',
              ward: ['7']
            }
          ]
        },
        {
          names: 'Nyembe',
          surburb: [
            {
              name: 'Nyembe SP',
              ward: ['5']
            }
          ]
        },

        {
          names: 'Paninkukhu',
          surburb: [
            {
              name: 'Paninkukhu SP',
              ward: [ '18']
            }
          ]
        },
        {
          names: 'Pholanyoni',
          surburb: [
            {
              name: 'Pholanyoni SP',
              ward: [ '8']
            }
          ]
        },
        {
          names: 'Phumamuncu',
          surburb: [
            {
              name: 'Phumamuncu SP',
              ward: ['15']
            }
          ]
        },
        {
          names: 'Phungula',
          surburb: [
            {
              name: 'Phungula SP',
              ward: ['6']
            }
          ]
        },
        {
          names: 'Rawuka',
          surburb: [
            {
              name: 'Rawuka SP',
              ward: ['12']
            }
          ]
        },
        {
          names: 'Riesdale',
          surburb: [
            {
              name: 'Riesdale SP',
              ward: ['10']
            }
          ]
        },
        {
          names: 'Rietvlei',
          surburb: [
            {
              name: 'Rietvlei SP',
              ward: ['12']
            }
          ]
        },
        {
          names: 'Riverside',
          surburb: [
            {
              name: 'Riverside SP',
              ward: ['10', '18']
            }
          ]
        },
        {
          names: 'Rockymount',
          surburb: [
            {
              name: 'Rockymount SP',
              ward: ['10']
            }
          ]
        },
        {
          names: 'Rondedraai',
          surburb: [
            {
              name: 'Rondedraai Plantasie',
              ward: ['13']
            },
            {
              name: 'Rondedraai SP',
              ward: ['13']
            }
          ]
        },
        {
          names: 'Rooipoort',
          surburb: [
            {
              name: 'Rooipoort SP',
              ward: ['1', '2']
            }
          ]
        },
        {
          names: 'Satana',
          surburb: [
            {
              name: 'Satana SP',
              ward: ['12', '18']
            }
          ]
        },
        {
          names: 'Sekelani',
          surburb: [
            {
              name: 'Sekelani SP',
              ward: ['10']
            }
          ]
        },
        {
          names: 'Senti',
          surburb: [
            {
              name: 'Senti SP',
              ward: ['8', '10']
            }
          ]
        },
        {
          names: 'Shamto',
          surburb: [
            {
              name: 'Shamto SP',
              ward: ['15', '20']
            }
          ]
        },
        {
          names: 'Sicelweni',
          surburb: [
            {
              name: 'Sicelweni SP',
              ward: ['7']
            }
          ]
        },
        {
          names: 'Sidikideni',
          surburb: [
            {
              name: 'Sidikideni SP',
              ward: ['2']
            }
          ]
        },
        {
          names: 'Sihleza',
          surburb: [
            {
              name: 'Sihleza Forest Reserve',
              ward: ['7','10', '18']
            }
          ]
        },
        {
          names: 'Sikhulu',
          surburb: [
            {
              name: 'Sikhulu SP',
              ward: ['10', '18']
            }
          ]
        },
        {
          names: 'Singisi',
          surburb: [
            {
              name: 'Singisi SP',
              ward: ['4', '8']
            }
          ]
        },
        {
          names: 'Siphahleni',
          surburb: [
            {
              name: 'Siphahleni SP',
              ward: ['12', '14']
            }
          ]
        },
        {
          names: 'Siphangeni',
          surburb: [
            {
              name: 'Siphangeni SP',
              ward: ['6']
            }
          ]
        },
        {
          names: 'Siriya',
          surburb: [
            {
              name: 'Siriya SP',
              ward: ['5']
            }
          ]
        },
        {
          names: 'Skoonplaas',
          surburb: [
            {
              name: 'Skoonplaas SP',
              ward: ['1', '16']
            }
          ]
        },
        {
          names: 'Sondzaba',
          surburb: [
            {
              name: 'Sondzaba Reserve SP',
              ward: ['13']
            }
          ]
        },
        {
          names: 'St Barnabas',
          surburb: [
            {
              name: 'St Barnabas SP',
              ward: ['7', '19']
            }
          ]
        },
        {
          names: 'St Paul',
          surburb: [
            {
              name: 'St Paul SP',
              ward: ['10', '18']
            }
          ]
        },
        {
          names: 'Straalhoek',
          surburb: [
            {
              name: 'Straalhoek SP',
              ward: ['10', '18']
            }
          ]
        },
        {
          names: 'Strangerest',
          surburb: [
            {
              name: 'Strangerest SP',
              ward: ['11', '17', '20']
            }
          ]
        },
        {
          names: 'Summerfield',
          surburb: [
            {
              name: 'Summerfield Plantation',
              ward: ['15']
            },
            {
              name: 'Summerfield SP',
              ward: ['15']
            }
          ]
        },
        {
          names: 'Tafeni',
          surburb: [
            {
              name: 'Tafeni SP',
              ward: ['11', '13', '20']
            }
          ]
        },
        {
          names: 'Takani',
          surburb: [
            {
              name: 'Takani SP',
              ward: ['11', '20']
            }
          ]
        },
        {
          names: 'Tembeni',
          surburb: [
            {
              name: 'Tembeni SP',
              ward: ['11', '20']
            }
          ]
        },
        {
          names: 'Theekloof',
          surburb: [
            {
              name: 'Theekloof SP',
              ward: ['13']
            }
          ]
        },
        {
          names: 'Thenti',
          surburb: [
            {
              name: 'Thenti SP1',
              ward: ['2']
            },
            {
              name: 'Thenti SP2',
              ward: ['11', '12', '15', '20']
            },
            {
              name: 'Thenti SP3',
              ward: ['17', '20']
            },
            {
              name: 'Thenti SP4',
              ward: ['13', '15']
            },
          ]
        },
        {
          names: 'Thobo',
          surburb: [
            {
              name: 'Thobo SP',
              ward: ['6']
            }
          ]
        },

        {
          names: 'Thonjeni',
          surburb: [
            {
              name: 'Thonjeni SP',
              ward: ['6']
            }
          ]
        },

        {
          names: 'Thorny Bush',
          surburb: [
            {
              name: 'Thorny Bush SP',
              ward: ['15']
            }
          ]
        },

        {
          names: 'Tiger Hoek',
          surburb: [
            {
              name: 'Tiger Hoek SP',
              ward: ['10']
            }
          ]
        },

        {
          names: 'Tsaula',
          surburb: [
            {
              name: 'Tsaula SP',
              ward: ['1', '2']
            }
          ]
        },

        {
          names: 'Tuse',
          surburb: [
            {
              name: 'Tuse SP',
              ward: ['7', '18']
            }
          ]
        },

        {
          names: 'Umzimkhulu',
          surburb: [
            {
              name: 'Sisulu',
              ward: ['1', '16', '17']
            },
            {
              name: 'The Cottage',
              ward: ['1', '16', '17', '19']
            },
            {
              name: 'Umzimkhulu Ex 6',
              ward: ['16']
            },
            {
              name: 'Umzimkhulu Ex 8',
              ward: ['16']
            },
            {
              name: 'Umzimkhulu SP',
              ward: ['16', '19']
            },
            {
              name: 'White City',
              ward: ['1', '16']
            },
          ]
        },

        {
          names: 'Umzimkhulu NU',
          surburb: [
            {
              name: 'Umzimkhulu NU',
              ward: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '16', '16', '17', '18', '19', '20']
            }
          ]
        },

        {
          names: 'Umzokhanyayo',
          surburb: [
            {
              name: 'Umzokhanyayo SP',
              ward: ['1', '14']
            }
          ]
        },
        {
          names: 'Vimbane',
          surburb: [
            {
              name: 'Vimbane SP',
              ward: ['7', '12','18']
            }
          ]
        },
        {
          names: 'Vuka',
          surburb: [
            {
              name: 'Vuka SP',
              ward: ['6']
            }
          ]
        },
        {
          names: 'Waschbank',
          surburb: [
            {
              name: 'Waschbank SP',
              ward: ['20']
            }
          ]
        },
        {
          names: 'Zadungeni',
          surburb: [
            {
              name: 'Zadungeni SP',
              ward: ['7']
            }
          ]
        },
        {
          names: 'Zwelitsha',
          surburb: [
            {
              name: 'Zwelitsha SP',
              ward: ['1']
            }
          ]
        }
      ]
    }    
  ]
},
        
        {
          name: 'uGu',
          municipality: [
            {
              name: 'Ezingoleni',
              city: [
                {
                  names: 'Badlane',
                  surburb: [
                    {
                      name: 'Badlane SP',
                      ward: ['3', '5', '6']
                    }
                  ]
                },
                {
                  names: 'Blose',
                  surburb: [
                    {
                      name: 'Blose SP',
                      ward: ['1', '4']
                    }
                  ]
                },
                {
                  names: 'Dlovinga',
                  surburb: [
                    {
                      name: 'Dlovinga SP',
                      ward: ['2', '5']
                    }
                  ]
                },
                {
                  names: 'Enkulu',
                  surburb: [
                    {
                      name: 'Enkulu SP',
                      ward: ['2', '5', '6']
                    }
                  ]
                },
                {
                  names: 'Entaba',
                  surburb: [
                    {
                      name: 'Entaba SP',
                      ward: ['3', '5']
                    }
                  ]
                },
                {
                  names: 'Ezingoleni NU',
                  surburb: [
                    {
                      name: 'Ezingoleni NU',
                      ward: ['1', '2', '4', '5', '6' ,'8', '10', '25', '27', '29']
                    },
                    {
                      name: 'Idwala Carbonates Mine',
                      ward: ['1', '5', '12', '21', '23', '25']
                    }
                  ]
                },
                {
                  names: 'Godloza',
                  surburb: [
                    {
                      name: 'Godloza SP',
                      ward: ['4', '5']
                    }
                  ]
                },
                {
                  names: 'Hlomendlini',
                  surburb: [
                    {
                      name: 'Hlomendlini SP',
                      ward: ['3', '4','5', '6']
                    }
                  ]
                },
                {
                  names: 'Izingolweni',
                  surburb: [
                    {
                      name: 'Izingolweni SP',
                      ward: ['2', '4','5', '6']
                    }
                  ]
                },
                {
                  names: 'KwaMshiwa',
                  surburb: [
                    {
                      name: 'KwaMshiwa SP',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'KwaNyuswa',
                  surburb: [
                    {
                      name: 'KwaNyuswa SP',
                      ward: ['1', '2', '4']
                    }
                  ]
                },
                {
                  names: 'KwaShoba',
                  surburb: [
                    {
                      name: 'KwaShoba SP',
                      ward: ['3', '5', '6']
                    }
                  ]
                },
                {
                  names: 'Mahlabathini',
                  surburb: [
                    {
                      name: 'Mahlabathini SP',
                      ward: ['1', '4']
                    }
                  ]
                },
                {
                  names: 'Mahlubini',
                  surburb: [
                    {
                      name: 'Mahlubini SP',
                      ward: ['4', '5']
                    }
                  ]
                },
                {
                  names: 'Mbeni',
                  surburb: [
                    {
                      name: 'Mbeni SP',
                      ward: ['2', '4','5', '6']
                    }
                  ]
                },
                {
                  names: 'Mdlazi',
                  surburb: [
                    {
                      name: 'Mdlazi SP',
                      ward: ['3', '5', '18']
                    }
                  ]
                },
                {
                  names: 'Mlozane',
                  surburb: [
                    {
                      name: 'Mlozane SP',
                      ward: ['4', '5', '6']
                    }
                  ]
                },
                {
                  names: 'Mtamvuna',
                  surburb: [
                    {
                      name: 'Mtamvuna SP',
                      ward: ['3', '5', '18']
                    }
                  ]
                },
                {
                  names: 'Mthimude',
                  surburb: [
                    {
                      name: 'Mthimude SP',
                      ward: ['1','3', '5', '8', '18', '21']
                    }
                  ]
                },
                {
                  names: 'Ndunu',
                  surburb: [
                    {
                      name: 'Ndunu SP',
                      ward: ['4', '5']
                    }
                  ]
                },
                {
                  names: 'Nikwe',
                  surburb: [
                    {
                      name: 'Nikwe SP',
                      ward: ['4', '5', '6', '18']
                    }
                  ]
                },
                {
                  names: 'Nqalweni',
                  surburb: [
                    {
                      name: 'Nqalweni SP',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'Oribi Gorge',
                  surburb: [
                    {
                      name: 'Oribi Gorge Nature Reserve',
                      ward: ['1', '2', '25']
                    }
                  ]
                },
                {
                  names: 'Qinisela Manyuswa',
                  surburb: [
                    {
                      name: 'Qinisela Manyuswa SP',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'Shobashobane',
                  surburb: [
                    {
                      name: 'Shobashobane SP',
                      ward: ['2','3', '5', '6']
                    }
                  ]
                },
                {
                  names: 'Thembeni',
                  surburb: [
                    {
                      name: 'Thembeni SP',
                      ward: ['4', '5']
                    }
                  ]
                },
                {
                  names: 'Thistles',
                  surburb: [
                    {
                      name: 'Thistles SP',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'Tonjeni',
                  surburb: [
                    {
                      name: 'Tonjeni SP',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'Wosiyane',
                  surburb: [
                    {
                      name: 'Wosiyane SP',
                      ward: ['2', '4']
                    }
                  ]
                }

              ]
            },
            {
              name: 'Hibiscus Coast',
              city: [
                {
                  names: 'Bendigo',
                  surburb: [
                    {
                      name: 'Bendigo SP',
                      ward: ['14', '15']
                    }
                  ]
                },
                {
                  names: 'Bethani',
                  surburb: [
                    {
                      name: 'Bethani SP',
                      ward: ['3', '20', '24', '25']
                    }
                  ]
                },
                {
                  names: 'Bhomela',
                  surburb: [
                    {
                      name: 'Bhomela SP',
                      ward: ['3','24', '25']
                    }
                  ]
                },
                {
                  names: 'Boboyi',
                  surburb: [
                    {
                      name: 'Boboyi SP',
                      ward: ['20', '21', '23']
                    }
                  ]
                },
                {
                  names: 'Buthongweni',
                  surburb: [
                    {
                      name: 'Buthongweni SP',
                      ward: ['8', '10']
                    }
                  ]
                },
                {
                  names: 'Cabhane',
                  surburb: [
                    {
                      name: 'Cabhane SP',
                      ward: ['5','12', '14']
                    }
                  ]
                },
                {
                  names: 'Dujazana',
                  surburb: [
                    {
                      name: 'Dujazana SP',
                      ward: ['1', '12', '17', '20', '21', '23']
                    }
                  ]
                },
                {
                  names: 'Dumezulu',
                  surburb: [
                    {
                      name: 'Dumezulu SP',
                      ward: ['1', '3', '5', '8', '9']
                    }
                  ]
                },
                {
                  names: 'Enkanyisweni',
                  surburb: [
                    {
                      name: 'Enkanyisweni SP',
                      ward: ['2', '7', '29']
                    }
                  ]
                },
                {
                  names: 'eNtaba',
                  surburb: [
                    {
                      name: 'eNtaba SP',
                      ward: ['3', '5']
                    }
                  ]
                },
                {
                  names: 'Gamalakhe',
                  surburb: [
                    {
                      name: 'Gamalakhe SP',
                      ward: ['3', '25', '26', '27', '28']
                    }
                  ]
                },
                {
                  names: 'Gamthilini',
                  surburb: [
                    {
                      name: 'Gamthilini SP',
                      ward: ['3', '5', '8']
                    }
                  ]
                },
                {
                  names: 'Gcilima',
                  surburb: [
                    {
                      name: 'Gcilima SP',
                      ward: ['7', '9', '10']
                    }
                  ]
                },
                {
                  names: 'Gwababebni',
                  surburb: [
                    {
                      name: 'Gwababebni SP',
                      ward: ['14', '15']
                    }
                  ]
                },
                {
                  names: 'Hibberdene',
                  surburb: [
                    {
                      name: 'Catalina',
                      ward: ['13', '18']
                    },
                    {
                      name: 'Fairview',
                      ward: ['13', '15']
                    },

                    {
                      name: 'Fairview Mission',
                      ward: ['13', '15']
                    },
                    {
                      name: 'Hibberdene SP',
                      ward: ['13']
                    },
                    {
                      name: 'Umzumbe SP',
                      ward: ['13', '15']
                    },
                    {
                      name: 'Wood Grange SP',
                      ward: ['13']
                    },
                  ]
                },
                {
                  names: 'Hibiscus Coast NU',
                  surburb: [
                    {
                      name: 'Hibiscus Coast NU',
                      ward: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '25', '26', '27', '28', '29']
                    }
                  ]
                },
                {
                  names: 'Ingwemabala',
                  surburb: [
                    {
                      name: 'Ingwemabala SP',
                      ward: ['7', '29']
                    }
                  ]
                },
                {
                  names: 'KwaMadlala',
                  surburb: [
                    {
                      name: 'KwaMadlala SP',
                      ward: ['5', '14']
                    }
                  ]
                },{
                  names: 'KwaNonhlanga',
                  surburb: [
                    {
                      name: 'KwaNonhlanga SP',
                      ward: ['2', '3', '5']
                    }
                  ]
                },

                {
                  names: 'KwaNzimakwe',
                  surburb: [
                    {
                      name: 'KwaNzimakwe SP',
                      ward: ['1', '10', '11']
                    }
                  ]
                },
                {
                  names: 'Louisiana',
                  surburb: [
                    {
                      name: 'Louisiana SP',
                      ward: ['15']
                    }
                  ]
                },
                {
                  names: 'Madakana',
                  surburb: [
                    {
                      name: 'Madakana SP',
                      ward: ['14', '15']
                    }
                  ]
                },
                {
                  names: 'Magog',
                  surburb: [
                    {
                      name: 'Magog SP',
                      ward: ['15', '16']
                    }
                  ]
                },
                {
                  names: 'Margate',
                  surburb: [
                    {
                      name: 'Beacon Rocks',
                      ward: ['19']
                    },
                    {
                      name: 'Lawrence Rocks',
                      ward: ['2']
                    },
                    {
                      name: 'Manaba Beach',
                      ward: ['6', '19']
                    },
                    {
                      name: 'Margate Beach',
                      ward: ['2', '6', '19']
                    },
                    {
                      name: 'Margate North Beach',
                      ward: ['2', '6', '19']
                    },
                    {
                      name: 'Margate SP',
                      ward: ['2', '3','6', '19']
                    },
                    {
                      name: 'Ramsgate',
                      ward: ['2', '6']
                    },
                    {
                      name: 'Ramsgate Beach',
                      ward: ['2']
                    },
                    {
                      name: 'Ramsgate South',
                      ward: ['2']
                    },

                    {
                      name: 'Shelly Beach',
                      ward: ['14', '15']
                    },
                    {
                      name: "St. Michael's on Sea",
                      ward: ['3', '19']
                    },
                    {
                      name: 'Uvongo',
                      ward: ['3', '6','19']
                    },
                    {
                      name: 'Uvongo Beach',
                      ward: ['19']
                    },
                    {
                      name: 'Windsor-on-Sea',
                      ward: ['14', '15']
                    }

                  ]
                },
                {
                  names: 'Mbecuka',
                  surburb: [
                    {
                      name: 'Mbecuka SP',
                      ward: ['2', '29']
                    }
                  ]
                },
                {
                  names: 'Mbeni',
                  surburb: [
                    {
                      name: 'Mbeni SP',
                      ward: ['2', '5']
                    }
                  ]
                },
                {
                  names: 'Mbotsha',
                  surburb: [
                    {
                      name: 'Mbotsha SP',
                      ward: ['3', '20', '21', '22', '24']
                    }
                  ]
                },
                {
                  names: 'Mdlanzi',
                  surburb: [
                    {
                      name: 'Mdlanzi SP',
                      ward: ['1', '21', '23']
                    }
                  ]
                },
                {
                  names: 'Melville',
                  surburb: [
                    {
                      name: 'Melville SP',
                      ward: ['15', '16']
                    }
                  ]
                },
                {
                  names: 'Mgangathe',
                  surburb: [
                    {
                      name: 'Mgangathe SP',
                      ward: ['8', '10', '11']
                    }
                  ]
                },
                {
                  names: 'Mgolemi',
                  surburb: [
                    {
                      name: 'Mgolemi SP',
                      ward: ['1', '4', '5', '12']
                    }
                  ]
                },
                {
                  names: 'Mhlalandlini',
                  surburb: [
                    {
                      name: 'Mhlalandlini SP',
                      ward: ['7', '8', '9', '10']
                    }
                  ]
                },
                {
                  names: 'Mobatsha',
                  surburb: [
                    {
                      name: 'Mobatsha SP',
                      ward: ['20', '21']
                    }
                  ]
                },
                {
                  names: 'Mtamvuna',
                  surburb: [
                    {
                      name: 'Mtamvuna Nature Reserve',
                      ward: ['1', '3', '21', '23', '24', '29']
                    }
                  ]
                },
                {
                  names: 'Mtengwana',
                  surburb: [
                    {
                      name: 'Mtengwana SP',
                      ward: ['1', '21']
                    }
                  ]
                },
                {
                  names: 'Murchison',
                  surburb: [
                    {
                      name: 'Murchison SP',
                      ward: ['20', '21', '22', '23', '25']
                    }
                  ]
                },
                {
                  names: 'Mvutshini',
                  surburb: [
                    {
                      name: 'Mvutshini SP',
                      ward: ['3', '7', '29']
                    }
                  ]
                },
                {
                  names: 'Mzimakwe',
                  surburb: [
                    {
                      name: 'Mzimakwe SP',
                      ward: ['12', '15']
                    }
                  ]
                },
                {
                  names: 'Ngodini',
                  surburb: [
                    {
                      name: 'Ngodini SP',
                      ward: ['1', '8', '9']
                    }
                  ]
                },
                {
                  names: 'Nkampini',
                  surburb: [
                    {
                      name: 'Nkampini SP',
                      ward: ['2', '7', '9', '10', '29']
                    }
                  ]
                },
                {
                  names: 'Nkoneni',
                  surburb: [
                    {
                      name: 'Nkoneni SP',
                      ward: ['8', '9', '10']
                    }
                  ]
                },
                {
                  names: 'Nkothaneni',
                  surburb: [
                    {
                      name: 'Nkothaneni SP',
                      ward: ['7','8', '9', '29']
                    }
                  ]
                },
                {
                  names: 'Nositha',
                  surburb: [
                    {
                      name: 'Nositha SP',
                      ward: ['3', '26', '27', '28', '29']
                    }
                  ]
                },
                {
                  names: 'Nsangwini',
                  surburb: [
                    {
                      name: 'Nsangwini SP',
                      ward: ['3', '24', '25', '26']
                    }
                  ]
                },
                {
                  names: 'Nsimbini',
                  surburb: [
                    {
                      name: 'Nsimbini SP',
                      ward: ['24', '25', '26', '27']
                    }
                  ]
                },
                {
                  names: 'Nyandezulu',
                  surburb: [
                    {
                      name: 'Nyandezulu SP',
                      ward: ['3','20', '22', '24', '25']
                    }
                  ]
                },
                {
                  names: 'Nyanisweni',
                  surburb: [
                    {
                      name: 'Nyanisweni SP',
                      ward: ['5', '8']
                    }
                  ]
                },
                {
                  names: 'Nzimakwe',
                  surburb: [
                    {
                      name: 'Nzimakwe SP',
                      ward: ['1', '11']
                    }
                  ]
                },
                {
                  names: 'Phumula',
                  surburb: [
                    {
                      name: 'Phumula SP',
                      ward: ['15', '16']
                    }
                  ]
                },
                {
                  names: 'Port Edward',
                  surburb: [
                    {
                      name: 'Black Rock',
                      ward: ['1']
                    },
                    {
                      name: 'Doc Wilson Point',
                      ward: ['1']
                    },
                    {
                      name: 'Ekubo Coastal Estate',
                      ward: ['1']
                    },
                    {
                      name: 'Glenmore',
                      ward: ['1']
                    },
                    {
                      name: 'Glenmore Beach',
                      ward: ['1', '11']
                    },
                    {
                      name: 'Ivy Beach',
                      ward: ['1']
                    },
                    {
                      name: 'Leisure Bay',
                      ward: ['1']
                    },
                    {
                      name: 'Leisure Crest',
                      ward: ['1', '11']
                    },
                    {
                      name: 'Meadow Brook',
                      ward: ['1']
                    },
                    {
                      name: 'North Sand Bluff',
                      ward: ['1']
                    },
                    {
                      name: 'Palm Beach',
                      ward: ['1']
                    },
                    {
                      name: 'Rennies Beach',
                      ward: ['1', '24']
                    },
                    {
                      name: 'Rocklands',
                      ward: ['1']
                    },
                    {
                      name: 'Salmon Bay',
                      ward: ['1']
                    },
                    {
                      name: 'Three Hills',
                      ward: ['1']
                    },
                  
                  ]
                },
                {
                  names: 'Post Shepstone',
                  surburb: [
                    {
                      name: 'Albersville',
                      ward: ['12', '18']
                    },
                    {
                      name: 'Anerley',
                      ward: ['15', '16']
                    },
                    {
                      name: 'Grosvenor',
                      ward: ['17', '18', '20']
                    },
                    {
                      name: 'Marburg',
                      ward: ['12', '17', '23']
                    },
                    {
                      name: 'Marburg Ext 22',
                      ward: ['12', '17', '18']
                    },
                    {
                      name: 'Merlewood',
                      ward: ['17', '18', '20', '23']
                    },
                    {
                      name: 'Oslo Beach',
                      ward: ['3', '18', '20']
                    },
                    {
                      name: 'Port Shepston SP',
                      ward: ['12', '17', '18', '20']
                    },
                    {
                      name: 'Protea Park',
                      ward: ['12', '17']
                    },
                    {
                      name: 'Sea Park',
                      ward: ['15', '16']
                    },
                    {
                      name: 'Southport',
                      ward: ['15', '16']
                    },
                    {
                      name: 'Sunwich Port',
                      ward: ['15', '16']
                    },
                    {
                      name: 'Umbango',
                      ward: ['12', '17', '18']
                    },
                    {
                      name: 'Emtentweni',
                      ward: ['12', '15', '16', '218']
                    },
                  ]
                },
                {
                  names: 'Qina-About',
                  surburb: [
                    {
                      name: 'Qina-About SP',
                      ward: ['3', '25', '26', '28']
                    }
                  ]
                },
                {
                  names: 'Shobeni',
                  surburb: [
                    {
                      name: 'Shobeni SP',
                      ward: ['2', '5']
                    }
                  ]
                },
                {
                  names: 'Sidobe',
                  surburb: [
                    {
                      name: 'Sidobe SP',
                      ward: ['14', '15']
                    }
                  ]
                },
                {
                  names: 'Sigodadeni',
                  surburb: [
                    {
                      name: 'Sigodadeni SP',
                      ward: ['2', '5', '8']
                    }
                  ]
                },
                {
                  names: 'Silwane',
                  surburb: [
                    {
                      name: 'Silwane SP',
                      ward: ['5', '13', '14', '15', '16']
                    }
                  ]
                },
                {
                  names: 'South Broom',
                  surburb: [
                    {
                      name: 'Marina Beach ',
                      ward: ['1', '2']
                    },
                    {
                      name: 'San Lameer ',
                      ward: ['1', '2']
                    },
                    {
                      name: 'Southbroom SP ',
                      ward: [ '2']
                    },
                    {
                      name: 'Trafalgar',
                      ward: ['1', '2']
                    },
                  ]
                },
                {
                  names: 'Sunduza',
                  surburb: [
                    {
                      name: 'Sunduza SP',
                      ward: ['7', '8', '29']
                    }
                  ]
                },
                {
                  names: 'Thelawayeka',
                  surburb: [
                    {
                      name: 'Thelawayeka SP',
                      ward: ['2', '5', '8', '29']
                    }
                  ]
                },
                {
                  names: 'Thembalethu',
                  surburb: [
                    {
                      name: 'Thembalethu SP',
                      ward: ['2', '7', '29']
                    }
                  ]
                },
                {
                  names: 'Thongasi',
                  surburb: [
                    {
                      name: 'Thongasi SP',
                      ward: ['1', '11']
                    }
                  ]
                },
                {
                  names: 'Thundeza',
                  surburb: [
                    {
                      name: 'Thundeza SP',
                      ward: ['1', '10', '11']
                    }
                  ]
                },
                {
                  names: 'Umzinto',
                  surburb: [
                    {
                      name: 'Umzinto SP',
                      ward: ['13', '15', '16']
                    }
                  ]
                },
                {
                  names: 'Woza',
                  surburb: [
                    {
                      name: 'Woza SP',
                      ward: ['1', '8', '9', '10']
                    }
                  ]
                },
                
              ]
            },
            {
              name: 'Umdoni',
              city: [
                {
                  names: 'aMahlongwa',
                  surburb: [
                    {
                      name: 'aMahlongwa SP',
                      ward: ['1', '2', '5', '99']
                    }
                  ]
                },
                {
                  names: 'Amangamazi',
                  surburb: [
                    {
                      name: 'Amangamazi SP',
                      ward: ['7', '8', '9', '10']
                    }
                  ]
                },
                {
                  names: 'Bazley Beach',
                  surburb: [
                    {
                      name: 'Bazley Beach SP',
                      ward: ['7']
                    }
                  ]
                },
                {
                  names: 'Bhudubhudu',
                  surburb: [
                    {
                      name: 'Bhudubhudu SP',
                      ward: ['8', '9', '10']
                    }
                  ]
                },
                {
                  names: 'eHlanzeni',
                  surburb: [
                    {
                      name: 'eHlanzeni SP',
                      ward: ['1', '2', '4', '7','99']
                    }
                  ]
                },
                {
                  names: 'Elysium',
                  surburb: [
                    {
                      name: 'Elysium SP',
                      ward: ['7']
                    }
                  ]
                },
                {
                  names: 'Esperanza',
                  surburb: [
                    {
                      name: 'Esperanza SP',
                      ward: ['3', '8', '10']
                    }
                  ]
                },
                {
                  names: 'Ifafa Beach',
                  surburb: [
                    {
                      name: 'Ifafa Beach SP',
                      ward: ['7']
                    }
                  ]
                },
                {
                  names: 'Ifafa Marine',
                  surburb: [
                    {
                      name: 'Ifafa Marine SP',
                      ward: ['7']
                    }
                  ]
                },
                {
                  names: 'Mafithini',
                  surburb: [
                    {
                      name: 'Mafithini SP',
                      ward: ['3', '8', '9', '10']
                    }
                  ]
                },
                {
                  names: 'Maryville',
                  surburb: [
                    {
                      name: 'Maryville SP',
                      ward: ['7', '9', '10', '11', '15']
                    }
                  ]
                },
                {
                  names: 'Mhlangamkhulu',
                  surburb: [
                    {
                      name: 'Mhlangamkhulu SP',
                      ward: ['3', '8', '10']
                    }
                  ]
                },
                {
                  names: 'Mtwalume',
                  surburb: [
                    {
                      name: 'Mtwalume SP',
                      ward: [ '7', '19']
                    }
                  ]
                },
                {
                  names: 'Scottburgh',
                  surburb: [
                    {
                      name: 'Freeland Park',
                      ward: [ '5', '99']
                    },
                    {
                      name: 'Kelso',
                      ward: ['10']
                    },
                    {
                      name: 'Park Rynie',
                      ward: ['4', '10']
                    },
                    {
                      name: 'Pennington',
                      ward: ['7', '9', '10']
                    },
                    {
                      name: 'Scottburgh South',
                      ward: ['4', '5', '10']
                    },
                    {
                      name: 'Scottburgh SP',
                      ward: [ '4', '5']
                    },
                    {
                      name: 'Selbourne Golf Estate',
                      ward: [ '10']
                    },
                  ]
                },
                {
                  names: 'Sezela',
                  surburb: [
                    {
                      name: 'Sezela SP',
                      ward: ['7', '8', '10']
                    }
                  ]
                },
                {
                  names: 'Umdoni NU',
                  surburb: [
                    {
                      name: 'Umdoni NU',
                      ward: ['2', '3', '4', '5', '6', '7', '8', '10', '99']
                    }
                  ]
                },
                {
                  names: 'Umgwemphisi',
                  surburb: [
                    {
                      name: 'Umgwemphisi SP',
                      ward: ['1', '2', '3', '7']
                    }
                  ]
                },
                {
                  names: 'Umzinto',
                  surburb: [
                    {
                      name: 'Asoka Heights ',
                      ward: ['3', '4', '6']
                    },
                    {
                      name: 'Ghandinagar ',
                      ward: ['3']
                    },
                    {
                      name: 'Hazelwood ',
                      ward: ['3', '6']
                    },
                    {
                      name: 'Riverside Park ',
                      ward: ['3', '6']
                    },
                    {
                      name: 'Sanathan ',
                      ward: ['3', '6']
                    },
                    {
                      name: 'Shayamoya ',
                      ward: ['3', '10']
                    },
                    {
                      name: 'Umzinto SP ',
                      ward: ['3','4', '6', '10']
                    },

                  ]
                },
                {
                  names: 'Uswani',
                  surburb: [
                    {
                      name: 'Uswani SP',
                      ward: ['7', '8', '9', '10']
                    }
                  ]
                },
                {
                  names: 'Wingrove',
                  surburb: [
                    {
                      name: 'Wingrove SP',
                      ward: ['7', '10', '15', '19']
                    }
                  ]
                },
                {
                  names: 'aMahlongwa',
                  surburb: [
                    {
                      name: 'aMahlongwa SP',
                      ward: ['1', '2', '5', '99']
                    }
                  ]
                },
              ]
            },
            {
              name: 'Umziwabantu',
              city: [
                {
                  names: 'Alfred',
                  surburb: [
                    {
                      name: 'Alfred SP',
                      ward: ['4', '10']
                    }
                  ]
                },
                {
                  names: 'Bazini',
                  surburb: [
                    {
                      name: 'Bazini SP',
                      ward: ['9']
                    }
                  ]
                },
                {
                  names: 'Bhekene',
                  surburb: [
                    {
                      name: 'Bhekene SP',
                      ward: ['6', '10']
                    }
                  ]
                },
                {
                  names: 'Bhidla',
                  surburb: [
                    {
                      name: 'Bhidla SP',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'Bhudlu',
                  surburb: [
                    {
                      name: 'Bhudlu SP',
                      ward: ['9', '27']
                    }
                  ]
                },
                {
                  names: 'Bozana',
                  surburb: [
                    {
                      name: 'Bozana SP',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'Cekeza',
                  surburb: [
                    {
                      name: 'Cekeza SP',
                      ward: ['1', '2']
                    }
                  ]
                },

                {
                  names: 'Cingweni',
                  surburb: [
                    {
                      name: 'Cingweni SP',
                      ward: ['4', '6','10']
                    }
                  ]
                },
                {
                  names: 'Elangeni',
                  surburb: [
                    {
                      name: 'Elangeni SP',
                      ward: ['4', '6','10']
                    }
                  ]
                },
                {
                  names: 'Esikhulu',
                  surburb: [
                    {
                      name: 'Esikhulu A',
                      ward: ['2']
                    },
                    {
                      name: 'Esikhulu B',
                      ward: ['1', '2']
                    },
                    {
                      name: 'Esikhulu C',
                      ward: ['4', '6']
                    },
                  ]
                },
                {
                  names: 'Gangala',
                  surburb: [
                    {
                      name: 'Gangala SP',
                      ward: ['6', '10']
                    }
                  ]
                },
                {
                  names: 'Gansa',
                  surburb: [
                    {
                      name: 'Gansa SP',
                      ward: ['2']
                    }
                  ]
                },
                {
                  names: 'Gudlucingo',
                  surburb: [
                    {
                      name: 'Gudlucingo SP',
                      ward: ['1', '2','14']
                    }
                  ]
                },
                {
                  names: 'Harding',
                  surburb: [
                    {
                      name: 'Harding SP',
                      ward: ['2', '3', '6', '7', '10', '12', '14']
                    },
                    {
                      name: 'Mazakhele',
                      ward: ['3']
                    }
                  ]
                },
                {
                  names: 'Ingele',
                  surburb: [
                    {
                      name: 'Ingele SP',
                      ward: ['2', '7', '9', '27']
                    }
                  ]
                },
                {
                  names: 'Jijintaba',
                  surburb: [
                    {
                      name: 'Jijintaba SP',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'KaMagwashu',
                  surburb: [
                    {
                      name: 'KaMagwashu SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Khayalihle',
                  surburb: [
                    {
                      name: 'Khayalihle SP',
                      ward: ['1']
                    }
                  ]
                },


                {
                  names: 'Kuzameni',
                  surburb: [
                    {
                      name: 'Kuzameni SP',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'Kuze',
                  surburb: [
                    {
                      name: 'Kuze SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'KwaBhubesi',
                  surburb: [
                    {
                      name: 'KwaBhubesi SP',
                      ward: ['7', '9']
                    }
                  ]
                },
                {
                  names: 'KwaKuseni',
                  surburb: [
                    {
                      name: 'KwaKuseni SP',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'KwaMbona',
                  surburb: [
                    {
                      name: 'KwaMbona SP',
                      ward: ['6', '7', '8', '9']
                    }
                  ]
                },
                {
                  names: 'KwaMboto',
                  surburb: [
                    {
                      name: 'KwaMboto SP',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'KwaSitezi',
                  surburb: [
                    {
                      name: 'KwaSitezi SP',
                      ward: ['6', '8', '9']
                    }
                  ]
                },
                {
                  names: 'Mahlangweni',
                  surburb: [
                    {
                      name: 'Mahlangweni SP',
                      ward: ['7', '9']
                    }
                  ]
                },
                {
                  names: 'Mahlubini',
                  surburb: [
                    {
                      name: 'Mahlubini SP',
                      ward: ['4', '5']
                    }
                  ]
                },
                {
                  names: 'Mambotho',
                  surburb: [
                    {
                      name: 'Mambotho SP',
                      ward: ['1', '2']
                    }
                  ]
                },

                {
                  names: 'Mawane',
                  surburb: [
                    {
                      name: 'Mawane SP',
                      ward: ['7', '9']
                    }
                  ]
                },
                {
                  names: 'Mbangweni',
                  surburb: [
                    {
                      name: 'Mbangweni SP',
                      ward: ['5', '10']
                    }
                  ]
                },
                {
                  names: 'Mbuthuma',
                  surburb: [
                    {
                      name: 'Mbuthuma SP',
                      ward: ['8', '9']
                    }
                  ]
                },
                {
                  names: 'Mjaja',
                  surburb: [
                    {
                      name: 'Mjaja SP',
                      ward: ['5', '10']
                    }
                  ]
                },
                {
                  names: 'Mkoba',
                  surburb: [
                    {
                      name: 'Mkoba SP',
                      ward: ['6', '7', '8', '9']
                    }
                  ]
                },
                {
                  names: 'Mlolweni',
                  surburb: [
                    {
                      name: 'Mlolweni SP',
                      ward: ['7', '9']
                    }
                  ]
                },
                {
                  names: 'Mnkangala',
                  surburb: [
                    {
                      name: 'Mnkangala SP',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'Mpenkulu',
                  surburb: [
                    {
                      name: 'Mpenkulu SP',
                      ward: ['2']
                    }
                  ]
                },
                {
                  names: 'Mpheshu',
                  surburb: [
                    {
                      name: 'Mpheshu SP',
                      ward: ['2']
                    }
                  ]
                },
                {
                  names: 'Mphikwa',
                  surburb: [
                    {
                      name: 'Mphikwa SP',
                      ward: ['5', '6', '8', '9']
                    }
                  ]
                },
                {
                  names: 'Mshisweni',
                  surburb: [
                    {
                      name: 'Mshisweni SP',
                      ward: ['10']
                    }
                  ]
                },
                {
                  names: 'Mthentu',
                  surburb: [
                    {
                      name: 'Mthentu SP',
                      ward: ['6', '10']
                    }
                  ]
                },
                {
                  names: 'Mtitanyoni',
                  surburb: [
                    {
                      name: 'Mtitanyoni A',
                      ward: ['1']
                    },
                    {
                      name: 'Mtitanyoni B',
                      ward: ['1', '14']
                    },
                    {
                      name: 'Mtitanyoni C',
                      ward: ['1']
                    },
                  ]
                },
                {
                  names: 'Ndlovini',
                  surburb: [
                    {
                      name: 'Ndlovini A',
                      ward: ['1', '2']
                    },
                    {
                      name: 'Ndlovini B',
                      ward: ['2']
                    },
                  ]
                },
                {
                  names: 'Ngqolo',
                  surburb: [
                    {
                      name: 'Ngqolo SP',
                      ward: ['7', '9']
                    }
                  ]
                },
                {
                  names: 'Ngqungqumeni',
                  surburb: [
                    {
                      name: 'Ngqungqumeni SP',
                      ward: ['5', '6','10']
                    }
                  ]
                },
                {
                  names: 'Ngubelanga',
                  surburb: [
                    {
                      name: 'Ngubelanga SP',
                      ward: ['8', '9']
                    }
                  ]
                },
                {
                  names: 'Nhlangwini',
                  surburb: [
                    {
                      name: 'Nhlangwini SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Nhlaza',
                  surburb: [
                    {
                      name: 'Nhlaza SP',
                      ward: ['6', '10']
                    }
                  ]
                },

                {
                  names: 'Nhlokoyenkomo',
                  surburb: [
                    {
                      name: 'Nhlokoyenkomo SP',
                      ward: ['5', '6','10']
                    }
                  ]
                },
                {
                  names: 'Nkoneni',
                  surburb: [
                    {
                      name: 'Nkoneni SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Nombengeza',
                  surburb: [
                    {
                      name: 'Nombengeza SP',
                      ward: ['4', '6']
                    }
                  ]
                },
                {
                  names: 'Nongidi',
                  surburb: [
                    {
                      name: 'Nongidi SP',
                      ward: ['5','6' ,'10']
                    }
                  ]
                },



                {
                  names: 'Nyandeni',
                  surburb: [
                    {
                      name: 'Nyandeni SP',
                      ward: ['9', '27']
                    }
                  ]
                },
                {
                  names: 'Phumuza',
                  surburb: [
                    {
                      name: 'Phumuza SP',
                      ward: ['10']
                    }
                  ]
                },
                {
                  names: 'Qwebela',
                  surburb: [
                    {
                      name: 'Qwebela SP',
                      ward: ['4', '6', '10']
                    }
                  ]
                },
                {
                  names: 'Umziwabantu NU',
                  surburb: [
                    {
                      name: 'Umziwabantu NU',
                      ward: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '12', '14', '18', '27']
                    }
                  ]
                },
                {
                  names: 'UMzokhanyayo',
                  surburb: [
                    {
                      name: 'Umzokhanyayo SP',
                      ward: ['1', '14']
                    }
                  ]
                },
                {
                  names: 'Wela',
                  surburb: [
                    {
                      name: 'Wela SP',
                      ward: ['10']
                    }
                  ]
                },
                {
                  names: 'Weza',
                  surburb: [
                    {
                      name: 'Weza SP',
                      ward: ['7']
                    }
                  ]
                },

              ]
            },
            {
              name: 'Umzumbe',
              city: [
                {
                  names: 'Amahwaqa',
                  surburb: [
                    {
                      name: 'Amahwaqa SP',
                      ward: ['13', '16', '18']
                    }
                  ]
                },
                {
                  names: 'Berea',
                  surburb: [
                    {
                      name: 'Berea SP',
                      ward: ['11']
                    }
                  ]
                },
                {
                  names: 'Bhekameva',
                  surburb: [
                    {
                      name: 'Bhekameva SP',
                      ward: ['3', '15']
                    }
                  ]
                },
                {
                  names: 'Cathula',
                  surburb: [
                    {
                      name: 'Cathula SP',
                      ward: ['1', '2', '6']
                    }
                  ]
                },
                {
                  names: 'Deyi',
                  surburb: [
                    {
                      name: 'Deyi SP',
                      ward: ['2', '4']
                    }
                  ]
                },
                {
                  names: 'Dibi',
                  surburb: [
                    {
                      name: 'Dibi SP',
                      ward: ['13', '14', '16']
                    }
                  ]
                },
                {
                  names: 'Dingimbiza',
                  surburb: [
                    {
                      name: 'Dingimbiza SP',
                      ward: ['7', '10', '15', '16', '17', '18', '19']
                    }
                  ]
                },
                {
                  names: 'Dunusa',
                  surburb: [
                    {
                      name: 'Dunusa SP',
                      ward: ['2', '4']
                    }
                  ]
                },
                {
                  names: 'Dunuse',
                  surburb: [
                    {
                      name: 'Dunuse SP',
                      ward: ['2', '3', '4']
                    }
                  ]
                },
                {
                  names: 'Elupepeni',
                  surburb: [
                    {
                      name: 'Elupepeni SP',
                      ward: ['3']
                    }
                  ]
                },
                {
                  names: 'Enhlangwini',
                  surburb: [
                    {
                      name: 'Enhlangwini SP',
                      ward: ['4', '7', '9']
                    }
                  ]
                },
                {
                  names: 'Enkulu',
                  surburb: [
                    {
                      name: 'Enkulu SP',
                      ward: ['5', '12', '14']
                    }
                  ]
                },
                {
                  names: 'Ensiyameni',
                  surburb: [
                    {
                      name: 'Ensiyameni SP',
                      ward: ['7', '8', '12']
                    }
                  ]
                },
                {
                  names: 'Gcwalemini',
                  surburb: [
                    {
                      name: 'Gcwalemini SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Glabhane',
                  surburb: [
                    {
                      name: 'Glabhane SP',
                      ward: ['13', '14', '16']
                    }
                  ]
                },
                {
                  names: 'Goba',
                  surburb: [
                    {
                      name: 'Goba SP',
                      ward: ['2', '4']
                    }
                  ]
                },
                {
                  names: 'Gobhamehlo',
                  surburb: [
                    {
                      name: 'Gobhamehlo SP',
                      ward: ['7', '9']
                    }
                  ]
                },
                {
                  names: 'Gqayinyanga',
                  surburb: [
                    {
                      name: 'Gqayinyanga SP',
                      ward: ['13', '14', '15', '16']
                    }
                  ]
                },
                {
                  names: 'Gubhugubhu',
                  surburb: [
                    {
                      name: 'Gubhugubhu SP',
                      ward: ['7', '10', '11', '15']
                    }
                  ]
                },
                {
                  names: 'Gubhuza',
                  surburb: [
                    {
                      name: 'Gubhuza SP',
                      ward: ['8', '9', '11', '12']
                    }
                  ]
                },
                {
                  names: 'Gugha',
                  surburb: [
                    {
                      name: 'Gugha SP',
                      ward: ['7', '8']
                    }
                  ]
                },
                {
                  names: 'Gumatane',
                  surburb: [
                    {
                      name: 'Gumatane SP',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'Hlanzeni',
                  surburb: [
                    {
                      name: 'Hlanzeni SP',
                      ward: ['5', '13']
                    }
                  ]
                },
                {
                  names: 'Infomfo',
                  surburb: [
                    {
                      name: 'Infomfo SP',
                      ward: ['3']
                    }
                  ]
                },

                {
                  names: 'Inkulu',
                  surburb: [
                    {
                      name: 'Inkulu SP1',
                      ward: ['1', '5', '6', '12', '13']
                    },
                    {
                      name: 'Inkulu SP2',
                      ward: ['7', '8']
                    },
                    {
                      name: 'Inkulu SP3',
                      ward: [ '12', '13', '14']
                    }
                  ]
                },
                {
                  names: 'Inyonyana',
                  surburb: [
                    {
                      name: 'Inyonyana SP',
                      ward: ['11', '16']
                    }
                  ]
                },
                {
                  names: 'Isangqu',
                  surburb: [
                    {
                      name: 'Isangqu SP',
                      ward: ['8', '11', '12']
                    }
                  ]
                },
                {
                  names: 'Isiqunga',
                  surburb: [
                    {
                      name: 'Isiqunga SP',
                      ward: ['10','13', '16', '17','18']
                    }
                  ]
                },
                {
                  names: 'Ixopo',
                  surburb: [
                    {
                      name: 'Ixopo SP',
                      ward: ['6', '13']
                    }
                  ]
                },
                {
                  names: 'KwaBombo',
                  surburb: [
                    {
                      name: 'KwaBombo SP',
                      ward: ['6', '7','12', '13', '14', '16']
                    }
                  ]
                },
                {
                  names: 'KwaDweshula',
                  surburb: [
                    {
                      name: 'KwaDweshula SP',
                      ward: ['1', '6']
                    }
                  ]
                },
                {
                  names: 'KwaMagugu',
                  surburb: [
                    {
                      name: 'KwaMagugu SP',
                      ward: ['2', '3']
                    }
                  ]
                },
                {
                  names: 'KwaMaqikizane',
                  surburb: [
                    {
                      name: 'KwaMaqikizane SP',
                      ward: ['7', '8', '9']
                    }
                  ]
                },
                {
                  names: 'KwaNjongoma',
                  surburb: [
                    {
                      name: 'KwaNjongoma SP',
                      ward: ['7', '8']
                    }
                  ]
                },
                {
                  names: 'KwaNtumeni',
                  surburb: [
                    {
                      name: 'KwaNtumeni SP',
                      ward: ['3', '10', '15']
                    }
                  ]
                },
                {
                  names: 'Maqikizane',
                  surburb: [
                    {
                      name: 'Maqikizane SP',
                      ward: ['8']
                    }
                  ]
                },
                {
                  names: 'Mathulini',
                  surburb: [
                    {
                      name: 'Mathulini SP',
                      ward: ['13', '17', '18']
                    }
                  ]
                },
                {
                  names: 'Mawuleni',
                  surburb: [
                    {
                      name: 'Mawuleni SP',
                      ward: ['1', '5']
                    }
                  ]
                },
                {
                  names: 'Mayekeni',
                  surburb: [
                    {
                      name: 'Mayekeni SP',
                      ward: ['1', '4', '5', '12', '13']
                    }
                  ]
                },
                {
                  names: 'Mbiyane',
                  surburb: [
                    {
                      name: 'Mbiyane SP',
                      ward: ['9', '10', '11']
                    }
                  ]
                },
                {
                  names: 'Mbonje',
                  surburb: [
                    {
                      name: 'Mbonje SP',
                      ward: ['5', '6', '13']
                    }
                  ]
                },
                {
                  names: 'Mehlomnyama',
                  surburb: [
                    {
                      name: 'Mehlomnyama SP',
                      ward: ['1', '4', '5', '12']
                    }
                  ]
                },
                {
                  names: 'Mgezankamba',
                  surburb: [
                    {
                      name: 'Mgezankamba SP',
                      ward: ['7', '9']
                    }
                  ]
                },
                {
                  names: 'Mhlabatshane',
                  surburb: [
                    {
                      name: 'Mhlabatshane SP',
                      ward: ['3', '10']
                    }
                  ]
                },
                {
                  names: 'Mnamfu',
                  surburb: [
                    {
                      name: 'Mnamfu SP',
                      ward: ['7', '10', '17', '18', '19']
                    }
                  ]
                },
                {
                  names: 'Mpikanisweni',
                  surburb: [
                    {
                      name: 'Mpikanisweni SP',
                      ward: ['2', '4']
                    }
                  ]
                },
                {
                  names: 'Mthaleni',
                  surburb: [
                    {
                      name: 'Mthaleni SP',
                      ward: ['6', '7', '12']
                    }
                  ]
                },
                {
                  names: 'Mthwalume',
                  surburb: [
                    {
                      name: 'Mthwalume SP',
                      ward: ['8', '9']
                    }
                  ]
                },
                {
                  names: 'Mvuzane',
                  surburb: [
                    {
                      name: 'Mvuzane SP',
                      ward: ['1', '5', '6', '13']
                    }
                  ]
                },
                {
                  names: 'Ncane',
                  surburb: [
                    {
                      name: 'Ncane SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Ndlovuzulu',
                  surburb: [
                    {
                      name: 'Ndlovuzulu SP',
                      ward: ['1', '2', '6']
                    }
                  ]
                },
                {
                  names: 'Ndumakude',
                  surburb: [
                    {
                      name: 'Ndumakude SP',
                      ward: ['13', '14']
                    }
                  ]
                },
                {
                  names: 'Ndunge',
                  surburb: [
                    {
                      name: 'Ndunge SP',
                      ward: ['11', '16']
                    }
                  ]
                },
                {
                  names: 'Ndwebu',
                  surburb: [
                    {
                      name: 'Ndwebu SP',
                      ward: ['4', '7']
                    }
                  ]
                },
                {
                  names: 'Ngcazolo',
                  surburb: [
                    {
                      name: 'Ngcazolo SP',
                      ward: ['6', '12', '13']
                    }
                  ]
                },
                {
                  names: 'Ngcengesi',
                  surburb: [
                    {
                      name: 'Ngcengesi SP',
                      ward: ['2']
                    }
                  ]
                },
                {
                  names: 'Ngoleleni',
                  surburb: [
                    {
                      name: 'Ngoleleni SP',
                      ward: ['1', '2', '6']
                    }
                  ]
                },
                  {
                    names: 'Ngomakazi',
                    surburb: [
                      {
                        name: 'Ngomakazi SP',
                        ward: ['7', '8']
                      },
                      {
                        name: 'Sikaka Forest',
                        ward: ['7', '8', '9']
                      }
                    ]
                  },
                  {
                    names: 'Ngweda',
                    surburb: [
                      {
                        name: 'Ngweda SP',
                        ward: ['2', '4', '7', '9']
                      }
                    ]
                  },
                  {
                    names: 'Nhlalwane',
                    surburb: [
                      {
                        name: 'Nhlalwane SP',
                        ward: ['1', '3', '14', '15']
                      }
                    ]
                  },
                  {
                    names: 'Nhlengesi',
                    surburb: [
                      {
                        name: 'Nhlengesi SP',
                        ward: ['4']
                      }
                    ]
                  },
                  {
                    names: 'Nkalokazi',
                    surburb: [
                      {
                        name: 'Nkalokazi SP',
                        ward: ['5', '13', '14', '15']
                      }
                    ]
                  },
                  {
                    names: 'Nkangala',
                    surburb: [
                      {
                        name: 'Nkangala SP',
                        ward: ['7', '11', '15', '16']
                      }
                    ]
                  },
                  {
                    names: 'Nomageje',
                    surburb: [
                      {
                        name: 'Nomageje SP',
                        ward: ['2', '3', '15']
                      }
                    ]
                  },
                  {
                    names: 'Nomakhanzana',
                    surburb: [
                      {
                        name: 'Nomakhanzana SP',
                        ward: ['7', '10', '15']
                      }
                    ]
                  },
                  {
                    names: 'Ntabakucasha',
                    surburb: [
                      {
                        name: 'Ntabakucasha SP',
                        ward: ['4', '7']
                      }
                    ]
                  },
                  {
                    names: 'Ntabazu',
                    surburb: [
                      {
                        name: 'Ntabazu SP',
                        ward: ['11', '12', '16']
                      }
                    ]
                  },
                  {
                    names: 'Ntenguland',
                    surburb: [
                      {
                        name: 'Ntenguland SP',
                        ward: ['11', '16']
                      }
                    ]
                  },
                  {
                    names: 'Nyavini',
                    surburb: [
                      {
                        name: 'Nyavini SP',
                        ward: ['7', '8', '12']
                      }
                    ]
                  },
                  {
                    names: 'Nyonyana',
                    surburb: [
                      {
                        name: 'Nyonyana SP',
                        ward: ['12', '14', '16']
                      }
                    ]
                  },
                  {
                    names: 'Odeke',
                    surburb: [
                      {
                        name: 'Odeke SP',
                        ward: ['12', '13', '14']
                      }
                    ]
                  },
                  {
                    names: 'Oshamba',
                    surburb: [
                      {
                        name: 'Oshamba SP',
                        ward: ['2', '6', '7']
                      }
                    ]
                  },
                  {
                    names: 'Phongolo',
                    surburb: [
                      {
                        name: 'Phongolo SP',
                        ward: ['2', '3']
                      }
                    ]
                  },
                  {
                    names: 'Qoloqolo',
                    surburb: [
                      {
                        name: 'Qoloqolo SP',
                        ward: ['2', '6']
                      }
                    ]
                  },
                  {
                    names: 'Quha',
                    surburb: [
                      {
                        name: 'Quha SP',
                        ward: ['7', '12']
                      }
                    ]
                  },
                  {
                    names: 'Rosettenville',
                    surburb: [
                      {
                        name: 'Rosettenville SP',
                        ward: ['13', '14', '16']
                      }
                    ]
                  },
                  {
                    names: 'Sipofu',
                    surburb: [
                      {
                        name: 'Sipofu SP',
                        ward: ['12', '16']
                      }
                    ]
                  },
                  {
                    names: 'Sosibo',
                    surburb: [
                      {
                        name: 'Sosibo SP',
                        ward: ['2', '4', '4']
                      }
                    ]
                  },
                  {
                    names: 'Sunduza',
                    surburb: [
                      {
                        name: 'Sunduza SP',
                        ward: ['1']
                      }
                    ]
                  },
                  {
                    names: 'Thaleni',
                    surburb: [
                      {
                        name: 'Thaleni SP',
                        ward: ['1', '2', '6']
                      }
                    ]
                  },
                  {
                    names: 'The Ridge',
                    surburb: [
                      {
                        name: 'The Ridge SP',
                        ward: ['8', '9']
                      }
                    ]
                  },
                  {
                    names: 'Thembelihle',
                    surburb: [
                      {
                        name: 'Thembelihle SP',
                        ward: ['2', '4']
                      }
                    ]
                  },
                  {
                    names: 'Thendeni',
                    surburb: [
                      {
                        name: 'Thendeni SP',
                        ward: ['4', '7']
                      }
                    ]
                  },
                  {
                    names: 'Thuntutha',
                    surburb: [
                      {
                        name: 'Thuntutha SP',
                        ward: ['5', '13', '14']
                      }
                    ]
                  },
                  {
                    names: 'Thuthuka',
                    surburb: [
                      {
                        name: 'Thuthuka SP',
                        ward: ['4', '7', '9']
                      }
                    ]
                  },
                  {
                    names: 'Umgai',
                    surburb: [
                      {
                        name: 'Umgai SP',
                        ward: ['9', '11', '12']
                      }
                    ]
                  },
                  {
                    names: 'Umgayi',
                    surburb: [
                      {
                        name: 'Umgayi SP',
                        ward: ['8', '9']
                      }
                    ]
                  },
                  {
                    names: 'Umzumbe NU',
                    surburb: [
                      {
                        name: 'Amahwaqa SP',
                        ward: ['1', '2', '3', '4', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16']
                      }
                    ]
                  },
                  {
                    names: 'Velumemeze',
                    surburb: [
                      {
                        name: 'Velumemeze SP',
                        ward: ['13', '14', '15', '16']
                      }
                    ]
                  },
                  {
                    names: 'Wowana',
                    surburb: [
                      {
                        name: 'Wowana SP',
                        ward: ['2', '4', '6', '7']
                      }
                    ]
                  },
                
              ]
            },
            {
              name: 'Vulamehlo',
              city: [
                {
                  names: 'Adams Rural',
                  surburb: [
                    {
                      name: 'Adams Rural SP',
                      ward: ['1', '67', '96']
                    }
                  ]
                },
                {
                  names: 'Amahwaqa ',
                  surburb: [
                    {
                      name: 'Amahwaqa SP',
                      ward: ['4', '6']
                    }
                  ]
                },
                {
                  names: 'Beula ',
                  surburb: [
                    {
                      name: 'Beula SP',
                      ward: ['6', '7']
                    }
                  ]
                },
                {
                  names: 'Bhobhobho ',
                  surburb: [
                    {
                      name: 'Bhobhobho SP',
                      ward: ['5', '7', '8']
                    }
                  ]
                },

                {
                  names: 'Bhudubhudu ',
                  surburb: [
                    {
                      name: 'Bhudubhudu SP',
                      ward: ['5', '7']
                    }
                  ]
                },
                {
                  names: 'Braemar ',
                  surburb: [
                    {
                      name: 'Braemar SP',
                      ward: ['10']
                    }
                  ]
                },
                {
                  names: 'Dududu ',
                  surburb: [
                    {
                      name: 'Dududu SP',
                      ward: ['6', '7']
                    }
                  ]
                },
                {
                  names: 'Dumisa ',
                  surburb: [
                    {
                      name: 'Dumisa SP',
                      ward: ['8', '9']
                    }
                  ]
                },
                {
                  names: 'Echobeni ',
                  surburb: [
                    {
                      name: 'Echobeni SP',
                      ward: ['4', '7']
                    }
                  ]
                },
                {
                  names: 'Egudwini ',
                  surburb: [
                    {
                      name: 'Egudwini SP',
                      ward: ['2', '3', '98']
                    }
                  ]
                },
                {
                  names: 'Ehlanzeni ',
                  surburb: [
                    {
                      name: 'Ehlanzeni SP',
                      ward: [ '5', '8']
                    }
                  ]
                },
                {
                  names: 'Emahlathini ',
                  surburb: [
                    {
                      name: 'Emahlathini SP',
                      ward: ['3', '7', '10']
                    }
                  ]
                },
                {
                  names: 'eMandlalathi ',
                  surburb: [
                    {
                      name: 'eMandlalathi SP',
                      ward: [ '5', '7']
                    }
                  ]
                },
                {
                  names: 'Emgangeni ',
                  surburb: [
                    {
                      name: 'Emgangeni SP',
                      ward: ['1', '3', '4']
                    }
                  ]
                },
                {
                  names: 'eMjunundwini ',
                  surburb: [
                    {
                      name: 'eMjunundwini SP',
                      ward: ['4', '6', '7']
                    }
                  ]
                },
                {
                  names: 'eTshenkombo ',
                  surburb: [
                    {
                      name: 'eTshenkombo SP',
                      ward: ['5', '6', '7']
                    }
                  ]
                },
                {
                  names: 'Glen Albyn ',
                  surburb: [
                    {
                      name: 'Glen Albyn SP',
                      ward: ['9', '10']
                    }
                  ]
                },
                {
                  names: 'Itshehlophe ',
                  surburb: [
                    {
                      name: 'Itshehlophe SP',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'KaDlangezwe ',
                  surburb: [
                    {
                      name: 'KaDlangezwe SP',
                      ward: ['2', '4', '7', '99']
                    }
                  ]
                },
                {
                  names: 'KaMpuco ',
                  surburb: [
                    {
                      name: 'KaMpuco SP',
                      ward: ['4', '5', '7']
                    }
                  ]
                },
                {
                  names: 'Kenterton ',
                  surburb: [
                    {
                      name: 'Kenterton SP',
                      ward: ['7', '8', '9']
                    }
                  ]
                },

                {
                  names: 'KwaDonsa ',
                  surburb: [
                    {
                      name: 'KwaDonsa SP',
                      ward: ['4', '5', '7']
                    }
                  ]
                },
                {
                  names: 'KwaDumisa ',
                  surburb: [
                    {
                      name: 'KwaDumisa SP',
                      ward: ['5', '7', '8']
                    }
                  ]
                },
                {
                  names: 'KwaFakazi ',
                  surburb: [
                    {
                      name: 'KwaFakazi SP',
                      ward: ['1', '2', '98']
                    }
                  ]
                },
                {
                  names: 'KwaLembe ',
                  surburb: [
                    {
                      name: 'KwaLembe SP',
                      ward: ['5', '7']
                    }
                  ]
                },
                {
                  names: 'KwaQumbu ',
                  surburb: [
                    {
                      name: 'KwaQumbu SP',
                      ward: ['1', '4', '5']
                    }
                  ]
                },
                {
                  names: 'Kwa-Rwayi ',
                  surburb: [
                    {
                      name: 'Kwa-Rwayi SP',
                      ward: ['1', '96']
                    }
                  ]
                },
                {
                  names: 'KwaSunduzwayo ',
                  surburb: [
                    {
                      name: 'KwaSunduzwayo SP',
                      ward: ['1', '96']
                    }
                  ]
                },
                {
                  names: 'Madudubala ',
                  surburb: [
                    {
                      name: 'Madudubala SP',
                      ward: ['3', '4', '99']
                    }
                  ]
                },
                {
                  names: 'Magwaza ',
                  surburb: [
                    {
                      name: 'Magwaza SP',
                      ward: ['10', '11']
                    }
                  ]
                },
                {
                  names: 'Mashiwase ',
                  surburb: [
                    {
                      name: 'Mashiwase SP',
                      ward: ['1', '2', '3']
                    }
                  ]
                },
                {
                  names: 'Mathongwana ',
                  surburb: [
                    {
                      name: 'Mathongwana SP',
                      ward: ['4', '6']
                    }
                  ]
                },
                {
                  names: 'Mayfield ',
                  surburb: [
                    {
                      name: 'Mayfield SP',
                      ward: ['7', '9']
                    }
                  ]
                },
                {
                  names: 'Mbongolwane ',
                  surburb: [
                    {
                      name: 'Mbongolwane SP',
                      ward: ['1', '2', '3', '4']
                    }
                  ]
                },
                {
                  names: 'Mbulula ',
                  surburb: [
                    {
                      name: 'Mbulula SP',
                      ward: ['8', '9']
                    }
                  ]
                },

                {
                  names: 'Mdumezulu ',
                  surburb: [
                    {
                      name: 'Mdumezulu SP',
                      ward: ['1', '96']
                    }
                  ]
                },
                {
                  names: 'Mfume ',
                  surburb: [
                    {
                      name: 'Mfume SP',
                      ward: ['2', '3','4' ,'98', '99']
                    }
                  ]
                },
                {
                  names: 'Mkhumbani ',
                  surburb: [
                    {
                      name: 'Mkhumbani SP',
                      ward: ['5', '6', '7', '8']
                    }
                  ]
                },
                {
                  names: 'Mkhunya ',
                  surburb: [
                    {
                      name: 'Mkhunya SP',
                      ward: ['5']
                    }
                  ]
                },
                {
                  names: 'Mphambanyoni ',
                  surburb: [
                    {
                      name: 'Mphambanyoni SP',
                      ward: ['5', '8']
                    }
                  ]
                },
                {
                  names: 'Mqangqala ',
                  surburb: [
                    {
                      name: 'Mqangqala SP',
                      ward: ['8', '9']
                    }
                  ]
                },
                {
                  names: 'Mtoli ',
                  surburb: [
                    {
                      name: 'Mtoli SP',
                      ward: ['5']
                    }
                  ]
                },
                {
                  names: 'Mysieland ',
                  surburb: [
                    {
                      name: 'Mysieland SP',
                      ward: ['7', '10']
                    }
                  ]
                },
                {
                  names: 'Ncazuka ',
                  surburb: [
                    {
                      name: 'Ncazuka SP',
                      ward: ['5', '8']
                    }
                  ]
                },
                {
                  names: 'Ncombololo ',
                  surburb: [
                    {
                      name: 'Ncombololo SP',
                      ward: ['8', '9']
                    }
                  ]
                },
                {
                  names: 'Ndaya ',
                  surburb: [
                    {
                      name: 'Ndaya SP',
                      ward: ['1', '4', '5']
                    }
                  ]
                },
                {
                  names: 'Ngwadini ',
                  surburb: [
                    {
                      name: 'Ngwadini SP',
                      ward: ['4', '6', '7']
                    }
                  ]
                },

                {
                  names: 'Nhlazanyoni ',
                  surburb: [
                    {
                      name: 'Nhlazanyoni SP',
                      ward: ['5', '8']
                    }
                  ]
                },
                {
                  names: 'Nkwali ',
                  surburb: [
                    {
                      name: 'Nkwali SP',
                      ward: ['2', '3', '98']
                    }
                  ]
                },
                {
                  names: 'Ntabesikopo ',
                  surburb: [
                    {
                      name: 'Ntabesikopo SP',
                      ward: ['5', '7']
                    }
                  ]
                },
                 {
                  names: 'Ntontonto ',
                  surburb: [
                    {
                      name: 'Ntontonto SP',
                      ward: ['6', '7', '10']
                    }
                  ]
                },
                {
                  names: 'Ntshaseni ',
                  surburb: [
                    {
                      name: 'Ntshaseni SP',
                      ward: ['5']
                    }
                  ]
                },
                {
                  names: 'Ntshingwana ',
                  surburb: [
                    {
                      name: 'Ntshingwana SP',
                      ward: ['5']
                    }
                  ]
                },
                {
                  names: 'Ntukwini ',
                  surburb: [
                    {
                      name: 'Ntukwini SP',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'Ntweka ',
                  surburb: [
                    {
                      name: 'Ntweka SP',
                      ward: ['1', '5']
                    }
                  ]
                },
                {
                  names: 'Odidini ',
                  surburb: [
                    {
                      name: 'Odidini SP1',
                      ward: ['1', '5', '96']
                    },
                    {
                      name: 'Odidini SP2',
                      ward: ['5', '8']
                    },
                    
                  ]
                },
                {
                  names: 'Okhalweni ',
                  surburb: [
                    {
                      name: 'Okhalweni SP',
                      ward: ['5', '7']
                    }
                  ]
                },
                {
                  names: 'Ophondweni ',
                  surburb: [
                    {
                      name: 'Ophondweni SP',
                      ward: ['7']
                    }
                  ]
                },
                {
                  names: 'Salaap ',
                  surburb: [
                    {
                      name: 'Salaap SP',
                      ward: ['9', '10']
                    }
                  ]
                },
                {
                  names: 'Umbumbulu ',
                  surburb: [
                    {
                      name: 'Umbumbulu SP',
                      ward: ['3', '4', '99']
                    }
                  ]
                },
                {
                  names: 'Ungendwa ',
                  surburb: [
                    {
                      name: 'Ungendwa SP',
                      ward: ['1', '2','67', '96', '98']
                    }
                  ]
                },

                {
                  names: 'Vernon Crookes ',
                  surburb: [
                    {
                      name: 'Vernon Crookes Game Park',
                      ward: ['1', '67', '96']
                    }
                  ]
                },
                {
                  names: 'Vonguzana ',
                  surburb: [
                    {
                      name: 'Vonguzana SP',
                      ward: ['7', '9']
                    }
                  ]
                },
                {
                  names: 'Vulamehlo NU ',
                  surburb: [
                    {
                      name: 'Vulamehlo NU',
                      ward: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11',]
                    }
                  ]
                },
                {
                  names: 'Vulindlela ',
                  surburb: [
                    {
                      name: 'Vulindlela SP',
                      ward: ['4']
                    }
                  ]
                },
                {
                  names: 'Wubwini ',
                  surburb: [
                    {
                      name: 'Wubwini SP',
                      ward: ['1', '67', '96']
                    }
                  ]
                }
                  
         
              ]
            }
          ]
        },
        
        {
          name: 'uMgungundlovu',
          municipality: [
            {
              name: 'Impendle',
              city: [
                {
                  names: 'Bucklands',
                  surburb: [
                    {
                      name: 'Bucklands SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Cibelichle',
                  surburb: [
                    {
                      name: 'Cibelichle SP',
                      ward: ['2']
                    }
                  ]
                },
                {
                  names: 'Enguga',
                  surburb: [
                    {
                      name: 'Enguga SP',
                      ward: ['2', '3']
                    }
                  ]
                },
                {
                  names: 'Enkangala',
                  surburb: [
                    {
                      name: 'Enkangala SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Fikesuthi',
                  surburb: [
                    {
                      name: 'Fikesuthi SP',
                      ward: ['3']
                    }
                  ]
                },
                {
                  names: 'Ga-Keta',
                  surburb: [
                    {
                      name: 'Ga-Keta SP',
                      ward: ['2', '3', '4']
                    }
                  ]
                },
                {
                  names: 'Glenmile',
                  surburb: [
                    {
                      name: 'Glenmile SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Gomane',
                  surburb: [
                    {
                      name: 'Gomane SP',
                      ward: ['3', '4', '7']
                    }
                  ]
                },
                {
                  names: 'Gwanovunga',
                  surburb: [
                    {
                      name: 'Gwanovunga SP',
                      ward: ['2', '3', '4']
                    }
                  ]
                },
                {
                  names: 'Highmoor',
                  surburb: [
                    {
                      name: 'Highmoor State Forest SP',
                      ward: ['1', '2', '3']
                    }
                  ]
                },
                {
                  names: 'Impendle',
                  surburb: [
                    {
                      name: 'Impendle SP',
                      ward: ['3']
                    }
                  ]
                },
                {
                  names: 'Ingqiya',
                  surburb: [
                    {
                      name: 'Ingqiya SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Kamensi',
                  surburb: [
                    {
                      name: 'Kamensi SP',
                      ward: ['3']
                    }
                  ]
                },
                {
                  names: 'Kwa Thunzi',
                  surburb: [
                    {
                      name: 'Kwa Thunzi SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'KwaGade',
                  surburb: [
                    {
                      name: 'KwaGade SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Loteni',
                  surburb: [
                    {
                      name: 'Loteni Nature Reserve ',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Mahlutshini',
                  surburb: [
                    {
                      name: 'Mahlutshini SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Maitland',
                  surburb: [
                    {
                      name: 'Maitland SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Mgodi',
                  surburb: [
                    {
                      name: 'Mgodi SP1',
                      ward: ['2']
                    },
                    {
                      name: 'Mgodi SP2',
                      ward: ['2']
                    }
                  ]
                },{
                  names: 'Mkhomazi',
                  surburb: [
                    {
                      name: 'Mkhomazi State Forest',
                      ward: ['1', '2']
                    }
                  ]
                },


                {
                  names: 'Mkomazi',
                  surburb: [
                    {
                      name: 'Mkomazi SP',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'Moyeni',
                  surburb: [
                    {
                      name: 'Moyeni SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Mpofana NU',
                  surburb: [
                    {
                      name: 'Cobham State Forest SP1',
                      ward: ['1']
                    },
                    {
                      name: 'Cobham State Forest SP1',
                      ward: ['1']
                    },
                    {
                      name: 'Mpofana NU',
                      ward: ['1', '2', '3', '4', '7', '8', '9']
                    },
                    {
                      name: 'Vergelegen',
                      ward: ['1']
                    },
                  ]
                },
                {
                  names: 'Mzumbe',
                  surburb: [
                    {
                      name: 'Mzumbe SP',
                      ward: ['2']
                    }
                  ]
                },
                {
                  names: 'Nhlabamkhosi',
                  surburb: [
                    {
                      name: 'Nhlabamkhosi SP',
                      ward: ['3', '4']
                    }
                  ]
                },{
                  names: 'Nhlambamasoka',
                  surburb: [
                    {
                      name: 'Nhlambamasoka SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Nhlathimbe',
                  surburb: [
                    {
                      name: 'Nhlathimbe SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Nkothweni',
                  surburb: [
                    {
                      name: 'Nkothweni SP',
                      ward: ['1']
                    }
                  ]
                },

                {
                  names: 'Ntshinini',
                  surburb: [
                    {
                      name: 'Ntshinini SP',
                      ward: ['3', '4']
                    }
                  ]
                },
                {
                  names: 'Ntwasahlobo',
                  surburb: [
                    {
                      name: 'Ntwasahlobo SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Nzinga',
                  surburb: [
                    {
                      name: 'Nzinga SP',
                      ward: ['2']
                    }
                  ]
                },
                {
                  names: 'Shellfish',
                  surburb: [
                    {
                      name: 'Shellfish SP',
                      ward: ['2']
                    }
                  ]
                },
                {
                  names: 'Shiyabantu',
                  surburb: [
                    {
                      name: 'Shiyabantu SP',
                      ward: ['2']
                    }
                  ]
                },
                {
                  names: 'Simolobha',
                  surburb: [
                    {
                      name: 'Simolobha SP',
                      ward: ['3', '7']
                    }
                  ]
                },
                {
                  names: 'Sithunjwana',
                  surburb: [
                    {
                      name: 'Sithunjwana SP',
                      ward: ['2', '3']
                    }
                  ]
                },
                {
                  names: 'Sitofela',
                  surburb: [
                    {
                      name: 'Sitofela SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Willowbrook',
                  surburb: [
                    {
                      name: 'Bucklands SP',
                      ward: ['1']
                    }
                  ]
                }
                

              ]
            },
            {
              name: 'Mkhambathini ',
              city: [
                {
                  names: 'Abebhuzi',
                  surburb: [
                    {
                      name: 'Abebhuzi SP',
                      ward: ['2', '6']
                    }
                  ]
                },
                {
                  names: 'Cabazini',
                  surburb: [
                    {
                      name: 'Cabazini SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Camperdown',
                  surburb: [
                    {
                      name: 'Camperdown SP',
                      ward: ['1', '3', '4']
                    }
                  ]
                },
                {
                  names: 'Chibini',
                  surburb: [
                    {
                      name: 'Chibini SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Egulube',
                  surburb: [
                    {
                      name: 'Egulube SP',
                      ward: ['5', '6', '7']
                    }
                  ]
                },
                {
                  names: 'Entsongeni',
                  surburb: [
                    {
                      name: 'Entsongeni SP',
                      ward: ['4', '5', '7']
                    }
                  ]
                },
                {
                  names: 'Esigodini',
                  surburb: [
                    {
                      name: 'Esigodini SP',
                      ward: ['6', '7']
                    }
                  ]
                },
                {
                  names: 'Esinyameni',
                  surburb: [
                    {
                      name: 'Esinyameni SP',
                      ward: ['1','2', '3']
                    }
                  ]
                },
                {
                  names: 'Esitingini',
                  surburb: [
                    {
                      name: 'Esitingini SP',
                      ward: ['1', '9']
                    }
                  ]
                },
                {
                  names: 'Ezimwini',
                  surburb: [
                    {
                      name: 'Ezimwini SP',
                      ward: ['5', '6']
                    }
                  ]
                },
                {
                  names: 'Eziphambathini',
                  surburb: [
                    {
                      name: 'Eziphambathini SP',
                      ward: ['1', '4', '5']
                    }
                  ]
                },
                {
                  names: 'Jilafohla',
                  surburb: [
                    {
                      name: 'Jilafohla SP',
                      ward: ['4', '5', '7']
                    }
                  ]
                },
                {
                  names: 'KwaDwengu',
                  surburb: [
                    {
                      name: 'KwaDwengu SP',
                      ward: ['6', '7']
                    }
                  ]
                },
                {
                  names: 'Mahlabathini',
                  surburb: [
                    {
                      name: 'Mahlabathini SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Makholweni',
                  surburb: [
                    {
                      name: 'Makholweni SP',
                      ward: ['6', '100']
                    }
                  ]
                },
                {
                  names: 'Manzamnyama',
                  surburb: [
                    {
                      name: 'Manzamnyama SP',
                      ward: ['2']
                    }
                  ]
                },
                {
                  names: 'Maqongqo',
                  surburb: [
                    {
                      name: 'Maqongqo SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Mbila',
                  surburb: [
                    {
                      name: 'Mbila SP',
                      ward: ['4', '5', '6']
                    }
                  ]
                },
                {
                  names: 'Mboyi',
                  surburb: [
                    {
                      name: 'Mboyi SP',
                      ward: ['1', '3']
                    }
                  ]
                },
                {
                  names: 'Mgugu',
                  surburb: [
                    {
                      name: 'Mgugu SP',
                      ward: ['4', '5', '7']
                    }
                  ]
                },
                {
                  names: 'Mgwenya',
                  surburb: [
                    {
                      name: 'Mgwenya SP',
                      ward: ['5', '7']
                    }
                  ]
                },
                {
                  names: 'Mkhambathini NU',
                  surburb: [
                    {
                      name: 'Mkhambathini NU',
                      ward: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '18', '37', '91', '100']
                    }
                  ]
                },
                {
                  names: 'Mpangisa',
                  surburb: [
                    {
                      name: 'Mpangisa SP',
                      ward: [ '6']
                    }
                  ]
                },
                {
                  names: 'Mvuyane',
                  surburb: [
                    {
                      name: 'Mvuyane SP',
                      ward: ['5', '96']
                    }
                  ]
                },
                {
                  names: 'Nagle',
                  surburb: [
                    {
                      name: 'Nagle Dam Nature Reserve',
                      ward: ['1', '2', '6', '9']
                    }
                  ]
                },
                {
                  names: 'Ngilanyoni',
                  surburb: [
                    {
                      name: 'Ngilanyoni SP',
                      ward: ['7']
                    }
                  ]
                },
                {
                  names: 'Nungwane',
                  surburb: [
                    {
                      name: 'Nungwane SP',
                      ward: ['5', '6', '96', '100']
                    }
                  ]
                },
                {
                  names: 'Ogagwini',
                  surburb: [
                    {
                      name: 'Ogagwini SP',
                      ward: ['1', '5', '96']
                    }
                  ]
                },
                {
                  names: 'Okhalweni',
                  surburb: [
                    {
                      name: 'Okhalweni SP',
                      ward: ['5', '7']
                    }
                  ]
                },
                {
                  names: 'Ophekweni A',
                  surburb: [
                    {
                      name: 'Ophekweni A SP',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'Ophokweni B',
                  surburb: [
                    {
                      name: 'Ophekweni B SP',
                      ward: ['1','2', '6']
                    }
                  ]
                },
                {
                  names: 'Shayamoya',
                  surburb: [
                    {
                      name: 'Shayamoya SP',
                      ward: ['4', '6', '7', '91']
                    }
                  ]
                },
                {
                  names: 'Simondi',
                  surburb: [
                    {
                      name: 'Simondi SP',
                      ward: [ '6']
                    }
                  ]
                },
                {
                  names: 'White City',
                  surburb: [
                    {
                      name: 'White City SP',
                      ward: ['1']
                    }
                  ]
                }
    
              ]
            },
            {
              name: 'Mpofana',
              city: [
                {
                  names: 'Bruntville',
                  surburb: [
                    {
                      name: 'Bruntville SP',
                      ward: ['1', '2', '3']
                    }
                  ]
                },
                {
                  names: 'Highmoor ',
                  surburb: [
                    {
                      name: 'Highmoor State Forest',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'Kamberg',
                  surburb: [
                    {
                      name: 'Kamberg Nature Reserve',
                      ward: ['1', '2', '3']
                    }
                  ]
                },
                {
                  names: 'KwaNontshilwane',
                  surburb: [
                    {
                      name: 'KwaNontshilwane SP',
                      ward: ['4', '8']
                    }
                  ]
                },
                {
                  names: 'Meyerdene',
                  surburb: [
                    {
                      name: 'Meyerdene SP',
                      ward: ['1', '3']
                    }
                  ]
                },
                {
                  names: 'Mooi Rivier',
                  surburb: [
                    {
                      name: 'Lakeview ',
                      ward: ['1', '3']
                    },
                    {
                      name: 'Mooi Rivier SP ',
                      ward: ['1', '2']
                    },
                    {
                      name: 'Pennendale ',
                      ward: ['1', '2']
                    },
                    {
                      name: 'Riverdale ',
                      ward: ['1', '2']
                    },
                    {
                      name: 'Weston ',
                      ward: ['1','2' ,'3']
                    },

                  ]
                },
                {
                  names: 'Mpofana NU',
                  surburb: [
                    {
                      name: 'Mpofana NU',
                      ward: ['1', '2', '3', '4', '5', '7', '8', '9', '11']
                    }
                  ]
                },
                {
                  names: 'Rosetta',
                  surburb: [
                    {
                      name: 'Rosetta SP',
                      ward: ['2', '3']
                    }
                  ]
                },
                {
                  names: 'Southerlands',
                  surburb: [
                    {
                      name: 'Southerlands SP',
                      ward: ['4', '8', '11']
                    }
                  ]
                },
                {
                  names: 'Thendele',
                  surburb: [
                    {
                      name: 'Thendele SP',
                      ward: ['2']
                    }
                  ]
                },
                {
                  names: 'Townview',
                  surburb: [
                    {
                      name: 'Townview SP',
                      ward: ['1', '3']
                    }
                  ]
                },
                {
                  names: 'Winterhoek',
                  surburb: [
                    {
                      name: 'Winterhoek SP',
                      ward: ['4']
                    }
                  ]
                }


              ]
            },
            {
              name: 'Richmond',
              city: [
                {
                  names: 'Embuthweni',
                  surburb: [
                    {
                      name: 'Embuthweni SP',
                      ward: ['5', '6']
                    }
                  ]
                },
                {
                  names: 'Hopewell',
                  surburb: [
                    {
                      name: 'Hopewell SP',
                      ward: ['3', '4']
                    }
                  ]
                },
                {
                  names: 'Inkumane',
                  surburb: [
                    {
                      name: 'Inkumane SP',
                      ward: ['5']
                    }
                  ]
                },
                {
                  names: 'Kupholeni',
                  surburb: [
                    {
                      name: 'Kupholeni SP',
                      ward: ['1', '2', '6', '7']
                    }
                  ]
                },
                {
                  names: 'KwaCebelele',
                  surburb: [
                    {
                      name: 'KwaCebelele SP',
                      ward: ['1','2' ,'6', '7']
                    }
                  ]
                },
                {
                  names: 'KwaMagoda',
                  surburb: [
                    {
                      name: 'KwaMagoda SP',
                      ward: ['1', '6', '7']
                    }
                  ]
                },
                {
                  names: 'KwaNkukhu',
                  surburb: [
                    {
                      name: 'KwaNkukhu SP',
                      ward: ['6']
                    }
                  ]
                },
                {
                  names: 'Mbila',
                  surburb: [
                    {
                      name: 'Mbila SP',
                      ward: ['5', '6']
                    }
                  ]
                },
                {
                  names: 'Mpofana',
                  surburb: [
                    {
                      name: 'Mpofana SP',
                      ward: ['4','5', '6']
                    }
                  ]
                },
                {
                  names: 'Ndaleni',
                  surburb: [
                    {
                      name: 'Ndaleni SP',
                      ward: ['1','2', '6', '7']
                    }
                  ]
                },
                {
                  names: 'Ngqokweni',
                  surburb: [
                    {
                      name: 'Ngqokweni SP',
                      ward: ['1', '6', '7']
                    }
                  ]
                },

                {
                  names: 'Ngqulu',
                  surburb: [
                    {
                      name: 'Ngqulu SP',
                      ward: ['5', '6', '7']
                    }
                  ]
                },
                {
                  names: 'Richmond',
                  surburb: [
                    {
                      name: 'Richmond SP',
                      ward: ['1', '2', '4']
                    }
                  ]
                },
                {
                  names: 'Richmond NU',
                  surburb: [
                    {
                      name: 'Richmond NU',
                      ward: ['1', '2', '3', '4', '5', '6', '7', '9', '11', '14', '18']
                    }
                  ]
                },
                {
                  names: 'Shiyamphahla',
                  surburb: [
                    {
                      name: 'Shiyamphahla SP',
                      ward: ['5']
                    }
                  ]
                },
                {
                  names: 'Siyathuthuka',
                  surburb: [
                    {
                      name: 'Siyathuthuka SP',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: "St Bernard's Mission",
                  surburb: [
                    {
                      name: "St Bernard's Mission SP",
                      ward: ['4' ,'5', '6']
                    }
                  ]
                },
                {
                  names: 'Thornville',
                  surburb: [
                    {
                      name: 'Thornville SP',
                      ward: ['3', '18']
                    }
                  ]
                },
                {
                  names: 'Umgwenya',
                  surburb: [
                    {
                      name: 'Umgwenya SP',
                      ward: ['5', '7']
                    }
                  ]
                }
     
              ]
            },
            {
              name: 'The Msunduzi',
              city: [
                {
                  names: 'Ashburton',
                  surburb: [
                    {
                      name: 'Ashburton SP',
                      ward: ['18', '37']
                    },
                    {
                      name: 'Lynnfield Park',
                      ward: ['37']
                    }
                  ]
                },
                {
                  names: 'Chaewe',
                  surburb: [
                    {
                      name: 'Chaewe SP',
                      ward: ['3']
                    }
                  ]
                },
                {
                  names: 'Chase Valley',
                  surburb: [
                    {
                      name: 'Chase Valley',
                      ward: ['6', '25']
                    },
                    {
                      name: 'Chase Valley Downs',
                      ward: ['25']
                    },
                    {
                      name: 'Chase Valley Heights',
                      ward: ['25']
                    },
                    {
                      name: 'Chase Valley SP',
                      ward: ['6', '9', '25', '28', '31', '32']
                    },
                    {
                      name: 'Chase Valley',
                      ward: ['3']
                    },
                    {
                      name: 'Chasedene',
                      ward: ['25', '32']
                    },
                    {
                      name: 'Ferncliffe',
                      ward: ['25']
                    },
                    {
                      name: 'Kingston Park',
                      ward: ['25']
                    },
                    {
                      name: 'Oak Park',
                      ward: ['25']
                    },
                    {
                      name: 'Upper Ferncliffe',
                      ward: ['25']
                    },
                  ]
                },
                {
                  names: 'Deda',
                  surburb: [
                    {
                      name: 'Deda SP',
                      ward: ['4', '5', '6']
                    }
                  ]
                },
                {
                  names: 'Ebaleni',
                  surburb: [
                    {
                      name: 'Ebaleni SP',
                      ward: ['3', '9']
                    }
                  ]
                },
                {
                  names: 'Edendale',
                  surburb: [
                    {
                      name: 'Edendale AA SP',
                      ward: ['10', '14', '15', '17']
                    },
                    {
                      name: 'Edendale BB SP',
                      ward: [ '14', '15', '17']
                    },
                    {
                      name: 'Edendale EE SP',
                      ward: [ '14', '17', '18']
                    },
                    {
                      name: 'Edendale H SP',
                      ward: ['10', '11', '16', '21']
                    },
                    {
                      name: 'Edendale J SP',
                      ward: ['10', '15', '16', '22']
                    },
                    {
                      name: 'Edendale N SP',
                      ward: ['10', '13', '15', '17', '18']
                    },
                    {
                      name: 'Edendale P SP',
                      ward: ['13', '17', '18']
                    },
                    {
                      name: 'Edendale Q SP',
                      ward: ['13', '15', '17', '18', '19']
                    },
                    {
                      name: 'Edendale RR SP',
                      ward: ['11']
                    },
                    {
                      name: 'Edendale S SP',
                      ward: ['10','11' ,'14', '15', '16']
                    },
                    {
                      name: 'Edendale SP',
                      ward: ['1', '2', '4', '5', '11', '12', '16', '20', '21', '22']
                    },
                    {
                      name: 'Edendale T SP',
                      ward: ['10', '14', '15', '16', '17']
                    },
                    {
                      name: 'Sanzwili',
                      ward: ['10', '11', '16']
                    },

                  ]
                },
                {
                  names: 'Ehashini',
                  surburb: [
                    {
                      name: 'Ehashini SP',
                      ward: ['7', '9']
                    }
                  ]
                },
                {
                  names: 'Emaswazini',
                  surburb: [
                    {
                      name: 'Emaswazini SP',
                      ward: ['4', '8', '9']
                    }
                  ]
                },
                {
                  names: 'eMunyini',
                  surburb: [
                    {
                      name: 'eMunyini SP',
                      ward: ['4', '6', '7', '9']
                    }
                  ]
                },
                {
                  names: 'eSigodini Esifishane',
                  surburb: [
                    {
                      name: 'eSigodini Esifishane SP',
                      ward: ['5', '6', '11']
                    }
                  ]
                },
                {
                  names: 'Esinyaneni',
                  surburb: [
                    {
                      name: 'Esinyaneni SP',
                      ward: ['6', '7']
                    }
                  ]
                },
                {
                  names: 'eZibomvini',
                  surburb: [
                    {
                      name: 'eZibomvini SP',
                      ward: ['3', '4']
                    }
                  ]
                },
                {
                  names: 'Gezubuso',
                  surburb: [
                    {
                      name: 'Gezubuso SP',
                      ward: ['4', '5', '6']
                    }
                  ]
                },
                {
                  names: 'Heza',
                  surburb: [
                    {
                      name: 'Heza SP',
                      ward: ['3', '9']
                    }
                  ]
                },
                {
                  names: 'Henley',
                  surburb: [
                    {
                      name: 'Henley SP',
                      ward: ['2', '3', '4', '5', '12']
                    }
                  ]
                },
                {
                  names: 'Imbali',
                  surburb: [
                    {
                      name: 'Imbali SP',
                      ward: ['13', '15', '16', '17', '19', '22', '23']
                    }
                  ]
                },
                {
                  names: 'Kanzakana',
                  surburb: [
                    {
                      name: 'Kanzakana SP',
                      ward: ['9']
                    }
                  ]
                },
                {
                  names: 'Khobongwaneni',
                  surburb: [
                    {
                      name: 'Khobongwaneni SP',
                      ward: ['3', '4', '9']
                    }
                  ]
                },
                {
                  names: 'Khokwane',
                  surburb: [
                    {
                      name: 'Khokwane SP',
                      ward: ['7', '8']
                    }
                  ]
                },
                {
                  names: 'KwaDulela',
                  surburb: [
                    {
                      name: 'KwaDulela A SP',
                      ward: ['3', '8', '9']
                    },
                    {
                      name: 'KwaDulela B SP',
                      ward: ['3']
                    }
                  ]
                },
                {
                  names: 'KwaMgwagwa',
                  surburb: [
                    {
                      name: 'KwaMgwagwa SP',
                      ward: ['3', '9']
                    }
                  ]
                },
                {
                  names: 'KwaMncane',
                  surburb: [
                    {
                      name: 'KwaMncane SP',
                      ward: ['4', '7', '8', '9']
                    }
                  ]
                },
                {
                  names: 'KwaMnyandu',
                  surburb: [
                    {
                      name: 'KwaMnyandu SP',
                      ward: ['4', '5']
                    }
                  ]
                },
                {
                  names: 'KwaMpande',
                  surburb: [
                    {
                      name: 'KwaMpande SP',
                      ward: ['3', '4']
                    }
                  ]
                },
                {
                  names: 'KwaMthoqotho',
                  surburb: [
                    {
                      name: 'KwaMthoqotho SP',
                      ward: ['2', '3', '4']
                    }
                  ]
                },
                {
                  names: 'KwaNomo',
                  surburb: [
                    {
                      name: 'KwaNomo SP',
                      ward: ['3', '7']
                    }
                  ]
                },
                {
                  names: 'KwaShange',
                  surburb: [
                    {
                      name: 'KwaShange SP',
                      ward: ['3', '4', '5']
                    }
                  ]
                },
                {
                  names: 'Mafakathini',
                  surburb: [
                    {
                      name: 'Mafakathini SP',
                      ward: ['4', '8', '9']
                    }
                  ]
                },
                {
                  names: 'Mbabane',
                  surburb: [
                    {
                      name: 'Mbabane SP',
                      ward: ['7', '8', '9']
                    }
                  ]
                },
                {
                  names: 'Mbumbane',
                  surburb: [
                    {
                      name: 'Mbumbane SP',
                      ward: ['3', '6', '7']
                    }
                  ]
                },
                {
                  names: 'Mbumbu',
                  surburb: [
                    {
                      name: 'Mbumbu SP',
                      ward: ['1', '2', '4', '7']
                    }
                  ]
                },
                {
                  names: 'Munywini',
                  surburb: [
                    {
                      name: 'Munywini SP',
                      ward: ['7']
                    }
                  ]
                },
                {
                  names: 'Mvubukazi',
                  surburb: [
                    {
                      name: 'Mvubukazi SP',
                      ward: ['1', '2', '7', '26']
                    }
                  ]
                },
                {
                  names: 'Mvundlweni',
                  surburb: [
                    {
                      name: 'Mvundlweni SP',
                      ward: ['4', '5']
                    }
                  ]
                },
                {
                  names: 'Ngubeni',
                  surburb: [
                    {
                      name: 'Ngubeni SP',
                      ward: ['5', '6', '11']
                    }
                  ]
                },
                {
                  names: 'Nhluthelo',
                  surburb: [
                    {
                      name: 'Nhluthelo SP',
                      ward: ['4', '5', '11', '12']
                    }
                  ]
                },
                {
                  names: 'Nkabini',
                  surburb: [
                    {
                      name: 'Nkabini SP',
                      ward: ['3', '7']
                    }
                  ]
                },
                {
                  names: 'Northdale',
                  surburb: [
                    {
                      name: 'Allandale SP',
                      ward: ['29', '30', '35']
                    },
                    {
                      name: 'Belfort Estates SP',
                      ward: ['9', '25', '28', '31']
                    },
                    {
                      name: 'Bombay Heights SP',
                      ward: ['3']
                    },
                    {
                      name: 'Dunveria SP',
                      ward: ['29', '30']
                    },
                    {
                      name: 'Happy Valley',
                      ward: ['25', '32']
                    },
                    {
                      name: 'Lotusville SP',
                      ward: ['31', '32']
                    },
                    {
                      name: 'Mysore Ridge',
                      ward: ['9', '28']
                    },
                    {
                      name: 'Newholme SP',
                      ward: ['28', '30', '31']
                    },
                    {
                      name: 'Northdale SP',
                      ward: ['9', '25', '28', '30', '31', '32', '35']
                    },
                    {
                      name: 'Orient Heights SP',
                      ward: ['29', '30']
                    },
                    {
                      name: 'Raisethorpe SP',
                      ward: ['3']
                    },
                    {
                      name: 'Samanville SP',
                      ward: ['29', '30', '35']
                    },
                    {
                      name: 'Woodlands Happy Valley SP',
                      ward: ['25', '32']
                    }

                  ]
                },
                {
                  names: 'Noshezi',
                  surburb: [
                    {
                      name: 'Noshezi SP',
                      ward: ['5']
                    }
                  ]
                },
                {
                  names: 'Nqabeni',
                  surburb: [
                    {
                      name: 'Nqabeni SP',
                      ward: ['2', '3', '4']
                    }
                  ]
                },
                {
                  names: 'Nzondweni',
                  surburb: [
                    {
                      name: 'Nzondweni SP',
                      ward: ['7']
                    }
                  ]
                },

                {
                  names: 'Okhalweni',
                  surburb: [
                    {
                      name: 'Okhalweni SP',
                      ward: ['6']
                    }
                  ]
                },
                {
                  names: 'Phayipini',
                  surburb: [
                    {
                      name: 'Phayipini SP',
                      ward: ['1', '20', '23', '26']
                    }
                  ]
                },
                {
                  names: 'Pietermaritzburg',
                  surburb: [
                    {
                      name: 'Ambleton',
                      ward: ['13', '18', '24']
                    },
                    {
                      name: 'Ashdown',
                      ward: ['1', '20', '22', '23']
                    },
                    {
                      name: 'Athlone',
                      ward: ['25', '26']
                    },
                    {
                      name: 'Bullevue',
                      ward: ['36']
                    },
                    {
                      name: 'Bisley Crest',
                      ward: ['24']
                    },

                    {
                      name: 'Bisley Heights',
                      ward: ['3']
                    },
                    {
                      name: 'Blackridge',
                      ward: ['1', '7', '26']
                    },
                    {
                      name: 'Boughton',
                      ward: ['7', '26']
                    },
                    {
                      name: 'Camps Drift',
                      ward: ['23', '24', '27', '36']
                    },
                    {
                      name: 'Clarendon',
                      ward: ['25', '26', '27']
                    },
                    {
                      name: 'Claveshay',
                      ward: ['36']
                    },
                    {
                      name: 'Cleland SP',
                      ward: ['36', '37']
                    },
                    {
                      name: 'Copesville',
                      ward: ['9', '29', '30']
                    },
                    {
                      name: 'Eastwood',
                      ward: ['34', '35', '37']
                    },
                    {
                      name: 'Epworth',
                      ward: ['36', '37']
                    },
                    {
                      name: 'Fillan Park',
                      ward: ['24', '36']
                    },
                    {
                      name: 'Glenwood',
                      ward: ['34', '35', '37']
                    },
                    {
                      name: 'Harewood',
                      ward: ['1', '12', '20', '22']
                    },
                    {
                      name: 'Hyfields',
                      ward: ['33', '34', '35', '36', '37']
                    },
                    {
                      name: 'Hazelmere',
                      ward: ['24']
                    },
                    {
                      name: 'Lester Park',
                      ward: ['26']
                    },
                    {
                      name: 'Lincoln Meade',
                      ward: ['35', '37']
                    },
                    {
                      name: 'Lynroy',
                      ward: ['36', '37']
                    },
                    {
                      name: 'Manor',
                      ward: ['33']
                    },
                    {
                      name: 'Masons Mill',
                      ward: ['13', '19', '23', '24', '26', '27']
                    },
                    {
                      name: 'Mkondeni',
                      ward: ['24', '36', '37']
                    },
                    {
                      name: 'Montrose',
                      ward: ['25', '26']
                    },
                    {
                      name: 'Mountain Rise',
                      ward: ['32', '35']
                    },

                    {
                      name: 'Napierville',
                      ward: ['23', '26', '27']
                    },
                    {
                      name: 'Natal Crushers',
                      ward: ['29', '30', '34', '35', '37']
                    },
                    {
                      name: 'Northern Park',
                      ward: ['25']
                    },
                    {
                      name: 'Ockerts Kraal',
                      ward: ['36', '37']
                    },
                    {
                      name: 'Oribi Heights',
                      ward: ['24']
                    },
                    {
                      name: 'Oribi Village',
                      ward: ['24', '36']
                    },
                    {
                      name: 'Panorama Gardens',
                      ward: ['29', '30', '34', '35', '37']
                    },
                    {
                      name: 'Pelham',
                      ward: ['24', '27', '36']
                    },
                    {
                      name: 'Pietermaritzburg SP',
                      ward: ['25', '26', '27', '32', '33', '35']
                    },
                    {
                      name: 'Plessis-Laer',
                      ward: ['1', '12', '19', '20', '22', '23']
                    },
                    {
                      name: 'Prestbury',
                      ward: ['1', '26', '27']
                    },
                    {
                      name: 'Queen Elizabeth',
                      ward: ['6', '25']
                    },
                    {
                      name: 'Richmond Crest',
                      ward: ['24']
                    },
                    {
                      name: 'Ridgepark',
                      ward: ['13', '24']
                    },
                    {
                      name: 'Scottvilee',
                      ward: ['27', '33', '36', '37'] 
                    },
                    {
                      name: 'Scottvilee Ext',
                      ward: ['24', '36', '37'] 
                    },
                     {
                      name: 'Shortts Retreat',
                      ward: ['18', '24', '36', '37']
                    },
                    {
                      name: 'Signal Hill',
                      ward: ['26']
                    },
                    {
                      name: 'Slangspruit',
                      ward: ['13', '18', '18','24' ]
                    },
                    {
                      name: 'Sobantu',
                      ward: ['34', '35']
                    },
                    {
                      name: 'The Grange',
                      ward: ['24']
                    },
                    {
                      name: 'The Meadows',
                      ward: ['36', '37']
                    },
                    {
                      name: 'Town Bush Valley',
                      ward: ['6', '25']
                    },{
                      name: 'Town Hill',
                      ward: ['25', '26', '27', '32']
                    },
                    {
                      name: 'Wembley',
                      ward: ['7', '25', '26']
                    },
                    {
                      name: 'Wensleydale',
                      ward: ['33', '35', '37']
                    },
                    {
                      name: 'Westgate',
                      ward: ['13', '24', '36']
                    },
                    {
                      name: 'Whispers',
                      ward: ['9', '29', '30']
                    },
                    {
                      name: 'Willowton',
                      ward: [ '32', '33', '34', '35', '37']
                    },
                    {
                      name: 'Woodlands',
                      ward: ['25', '31', '32', '33', '35']
                    },
                    {
                      name: 'Worlds View',
                      ward: ['6', '7', '25', '26']
                    }
    
                  ]
                },
                {
                  names: 'Qanda',
                  surburb: [
                    {
                      name: 'Qanda SP',
                      ward: ['5', '6']
                    }
                  ]
                },
                {
                  names: 'Sinathingi',
                  surburb: [
                    {
                      name: 'Sinathingi SP',
                      ward: ['5', '11']
                    }
                  ]
                },
                {
                  names: 'Songonzima',
                  surburb: [
                    {
                      name: 'Songonzima SP',
                      ward: ['7', '8']
                    }
                  ]
                },
                {
                  names: 'Tafuleni',
                  surburb: [
                    {
                      name: 'Tafuleni SP',
                      ward: ['5', '6', '11']
                    }
                  ]
                },
                {
                  names: 'The Msunsuzi NU',
                  surburb: [
                    {
                      name: 'The Msunsuzi NU',
                      ward: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '13', '14', '16', '17', '18', '24', '29', '30', '34', '35', '36', '37']
                    }
                  ]
                },
                {
                  names: 'Wilgefontein',
                  surburb: [
                    {
                      name: 'Wilgefontein SP',
                      ward: ['14', '17', '18']
                    }
                  ]
                },
                {
                  names: 'Xamuxolo',
                  surburb: [
                    {
                      name: 'Xamuxolo SP',
                      ward: ['3', '9']
                    }
                  ]
                },
                {
                  names: 'Zayeka',
                  surburb: [
                    {
                      name: 'Zayeka SP',
                      ward: ['1', '2', '4', '20']
                    }
                  ]
                },

              ]
            },
            {
              name: 'uMngeni',
              city: [
                {
                  names: 'Balgowan',
                  surburb: [
                    {
                      name: 'Balgowan SP',
                      ward: ['3', '4']
                    }
                  ]
                },
                {
                  names: 'Cedara',
                  surburb: [
                    {
                      name: 'Cedara Agricultural College',
                      ward: ['2', '3', '6', '7', '8']
                    },
                    {
                      name: 'Cedara SP',
                      ward: ['6', '7', '12']
                    }
                  ]
                },
                {
                  names: 'Cedarge',
                  surburb: [
                    {
                      name: 'Cedarge SP',
                      ward: ['3', '8', '9', '10', '11']
                    }
                  ]
                },
                {
                  names: 'Emashingeni',
                  surburb: [
                    {
                      name: 'Emashingeni SP',
                      ward: ['3', '8']
                    }
                  ]
                },
                {
                  names: 'Fort Nottingham',
                  surburb: [
                    {
                      name: 'Fort Nottingham SP',
                      ward: ['3']
                    }
                  ]
                },
                {
                  names: 'Garlington',
                  surburb: [
                    {
                      name: 'Garlington Estate',
                      ward: ['6']
                    }
                  ]
                },
                {
                  names: 'Hilton',
                  surburb: [
                    {
                      name: 'Berry Hill',
                      ward: ['6', '7']
                    },
                    {
                      name: 'Hiltara Park',
                      ward: ['6', '7']
                    },
                    {
                      name: 'Hilton College',
                      ward: ['6']
                    },
                    {
                      name: 'Hilton Gardens',
                      ward: ['6']
                    },
                    {
                      name: 'Hilton SP',
                      ward: ['6', '7', '25']
                    },
                    {
                      name: 'Leonard',
                      ward: ['6', '7']
                    },
                    {
                      name: 'Mount Michael',
                      ward: ['2', '7']
                    },
                    {
                      name: 'Mountain Homes',
                      ward: ['7']
                    },
                    {
                      name: 'Sweetwaters',
                      ward: ['1', '7', '26']
                    },
                    {
                      name: 'Winterskloof',
                      ward: ['1','2' ,'7', '26']
                    },
                    {
                      name: 'Worlds View',
                      ward: ['6', '7', '25', '26']
                    }

                  ]
                },
                {
                  names: 'Howick',
                  surburb: [
                    {
                      name: 'Greendale Park',
                      ward: ['2', '5', '9', '12']
                    },
                    {
                      name: 'Howick SP',
                      ward: ['1', '2', '4', '5', '6', '9', '12']
                    },
                    {
                      name: 'Howick West',
                      ward: ['1', '7', '12']
                    },
                    {
                      name: 'Merrivale',
                      ward: ['1', '7', '12']
                    },
                    {
                      name: 'Merrivale Heights',
                      ward: ['6', '7', '12']
                    },
                    {
                      name: 'Sakabula Golf & Country Estate',
                      ward: ['7', '12']
                    },

                  ]
                },
                {
                  names: 'Karkloof',
                  surburb: [
                    {
                      name: 'Karkloof Nature Reserve',
                      ward: ['4', '5']
                    }
                  ]
                },
                {
                  names: 'KwaMevana',
                  surburb: [
                    {
                      name: 'KwaMevana SP',
                      ward: ['1', '2', '5', '6', '12']
                    }
                  ]
                },
                {
                  names: 'Lidgetton West',
                  surburb: [
                    {
                      name: 'Lidgetton West SP',
                      ward: ['4']
                    }
                  ]
                },
                {
                  names: 'Lions River ',
                  surburb: [
                    {
                      name: 'Lions River SP',
                      ward: ['4', '9']
                    }
                  ]
                },
                {
                  names: 'Midmar',
                  surburb: [
                    {
                      name: 'Midmar Public Resort Nature Reserve',
                      ward: ['1', '7', '9', '12']
                    }
                  ]
                },
                {
                  names: 'Mpophomeni',
                  surburb: [
                    {
                      name: 'Mpophomeni A',
                      ward: ['8', '10', '11']
                    },
                    {
                      name: 'Mpophomeni A',
                      ward: ['8','9' ,'10', '11']
                    }
                  ]
                },
                {
                  names: 'Nottingham Road',
                  surburb: [
                    {
                      name: 'Nottingham Road SP',
                      ward: ['2', '3']
                    }
                  ]
                },
                {
                  names: 'uMngeni NU',
                  surburb: [
                    {
                      name: 'Albert Falls Public Resort Nature Reserve',
                      ward: ['1', '6', '9']
                    },
                    {
                      name: 'uMngeni NU',
                      ward: ['1','2' ,'3', '4', '5', '6', '7', '8', '9', '10', '12', '25']
                    },
                    {
                      name: 'uMngeni Valley Nature Reserve',
                      ward: ['5','6' ]
                    }
                  ]
                },
                {
                  names: 'Zenzani',
                  surburb: [
                    {
                      name: 'Zenzani SP',
                      ward: ['3']
                    }
                  ]
                }
                
              ]
            },
            {
              name: 'uMshwathi',
              city: [
                {
                  names: 'Albert Falls',
                  surburb: [
                    {
                      name: 'Albert Falls SP',
                      ward: ['1', '9']
                    }
                  ]
                },
                {
                  names: 'Amalanga ',
                  surburb: [
                    {
                      name: 'Amalanga  SP',
                      ward: ['2', '8', '16']
                    }
                  ]
                },
                {
                  names: 'Bock en houd Fontein ',
                  surburb: [
                    {
                      name: 'Bock en houd Fontein  SP',
                      ward: ['3']
                    }
                  ]
                },
                {
                  names: 'Carney Hill ',
                  surburb: [
                    {
                      name: 'Carney Hill  SP',
                      ward: ['3']
                    }
                  ]
                },
                {
                  names: 'Claridge Estate ',
                  surburb: [
                    {
                      name: 'Claridge Estate  SP',
                      ward: ['6', '9', '25', '28']
                    }
                  ]
                },
                {
                  names: 'Cool Air  ',
                  surburb: [
                    {
                      name: 'Cool Air  SP',
                      ward: ['2', '7']
                    }
                  ]
                },
                {
                  names: 'Cuphulaka ',
                  surburb: [
                    {
                      name: 'Cuphulaka  SP',
                      ward: ['6', '8', '16']
                    }
                  ]
                },
                {
                  names: 'Dalton ',
                  surburb: [
                    {
                      name: 'Dalton  SP',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'Ekukhanyeni ',
                  surburb: [
                    {
                      name: 'Ekukhanyeni  SP',
                      ward: ['6']
                    }
                  ]
                },
                {
                  names: 'Enbuyeni ',
                  surburb: [
                    {
                      name: 'Enbuyeni  SP',
                      ward: ['2', '6', '8']
                    }
                  ]
                },
                {
                  names: 'Engoleleni ',
                  surburb: [
                    {
                      name: 'Engoleleni  SP',
                      ward: ['7', '8', '11', '13']
                    }
                  ]
                },
                {
                  names: 'Esthezi ',
                  surburb: [
                    {
                      name: 'Esthezi  SP',
                      ward: ['1','6' ,'9', '13']
                    }
                  ]
                },
                {
                  names: 'Etsheni ',
                  surburb: [
                    {
                      name: 'Etsheni  SP',
                      ward: ['4', '5']
                    }
                  ]
                },
                {
                  names: 'Faya ',
                  surburb: [
                    {
                      name: 'Faya  SP',
                      ward: ['1', '3']
                    }
                  ]
                },
                {
                  names: 'Frenchay West ',
                  surburb: [
                    {
                      name: 'Frenchay West  SP',
                      ward: ['3']
                    }
                  ]
                },
                {
                  names: 'Gobinsimbi ',
                  surburb: [
                    {
                      name: 'Gobinsimbi  SP',
                      ward: ['4', '5']
                    }
                  ]
                },
                {
                  names: 'Hlathikhulu ',
                  surburb: [
                    {
                      name: 'Hlathikhulu  SP',
                      ward: ['2', '4', '5', '6', '9']
                    }
                  ]
                },
                {
                  names: 'Jaagbaan ',
                  surburb: [
                    {
                      name: 'Jaagbaan  SP',
                      ward: ['1', '7']
                    }
                  ]
                },
                {
                  names: 'Ksikotho ',
                  surburb: [
                    {
                      name: 'Ksikotho  SP',
                      ward: ['4', '5', '6']
                    }
                  ]
                },
                {
                  names: 'KwaHlwemini ',
                  surburb: [
                    {
                      name: 'KwaHlwemini  SP',
                      ward: ['4', '7', '8', '11', '16']
                    }
                  ]
                },
                {
                  names: 'KwaMophumula ',
                  surburb: [
                    {
                      name: 'KwaMophumula  SP',
                      ward: ['1', '6','9', '13']
                    }
                  ]
                },
                {
                  names: 'KwaSokesimbone ',
                  surburb: [
                    {
                      name: 'KwaSokesimbone  SP',
                      ward: ['6', '8', '11', '13', '16']
                    }
                  ]
                },
                {
                  names: 'KwaYibusele ',
                  surburb: [
                    {
                      name: 'KwaYibusele  SP',
                      ward: ['1', '3', '4', '5']
                    }
                  ]
                },
                {
                  names: 'Madwaleni ',
                  surburb: [
                    {
                      name: 'Madwaleni  SP',
                      ward: ['4', '5']
                    }
                  ]
                },
                {
                  names: 'Mbalenhle ',
                  surburb: [
                    {
                      name: 'Mbalenhle  SP',
                      ward: ['4', '5']
                    }
                  ]
                },
                {
                  names: 'Mbeka ',
                  surburb: [
                    {
                      name: 'Mbeka  SP',
                      ward: ['2', '6', '8']
                    }
                  ]
                },
                {
                  names: 'Mbhava ',
                  surburb: [
                    {
                      name: 'Mbhava  SP',
                      ward: ['6', '8']
                    }
                  ]
                },
                {
                  names: 'Mbulwane ',
                  surburb: [
                    {
                      name: 'Mbulwane  SP',
                      ward: ['1', '4']
                    }
                  ]
                },
                {
                  names: 'Mpolweni ',
                  surburb: [
                    {
                      name: 'Mpolweni  SP',
                      ward: ['9', '10', '12']
                    }
                  ]
                },
                {
                  names: 'Mtulwa ',
                  surburb: [
                    {
                      name: 'Mtulwa  SP',
                      ward: ['1', '3']
                    }
                  ]
                },
                {
                  names: 'Mvoti ',
                  surburb: [
                    {
                      name: 'Mvoti  SP',
                      ward: ['3']
                    }
                  ]
                },
                {
                  names: 'New Hanover ',
                  surburb: [
                    {
                      name: 'New Hanover Nature Reserve',
                      ward: ['1', '6','9']
                    },
                    {
                      name: 'New Hanover SP',
                      ward: ['1', '2','9']
                    }
                  ]
                },
                {
                  names: 'Newspaper',
                  surburb: [
                    {
                      name: 'Newspaper SP',
                      ward: ['4', '6']
                    }
                  ]
                },
                {
                  names: 'Ngabayena ',
                  surburb: [
                    {
                      name: 'Ngabayena  SP',
                      ward: ['1', '2', '6', '8', '13']
                    }
                  ]
                },
                {
                  names: 'Odlameni ',
                  surburb: [
                    {
                      name: 'Odlameni  SP',
                      ward: ['1', '6', '8', '13']
                    }
                  ]
                },
                {
                  names: 'Solhem ',
                  surburb: [
                    {
                      name: 'Solhem  SP',
                      ward: ['4']
                    }
                  ]
                },
                {
                  names: 'Swayimana ',
                  surburb: [
                    {
                      name: 'Swayimana  SP',
                      ward: ['6', '7', '11', '12', '13']
                    }
                  ]
                },
                {
                  names: 'Swidi ',
                  surburb: [
                    {
                      name: 'Swidi  SP',
                      ward: ['4', '5', '6']
                    }
                  ]
                },
                {
                  names: 'Trust Feed A ',
                  surburb: [
                    {
                      name: 'Trust Feed A  SP',
                      ward: ['9']
                    }
                  ]
                },
                {
                  names: 'Trust Feed B ',
                  surburb: [
                    {
                      name: 'Trust Feed B SP',
                      ward: ['6', '12', '13']
                    }
                  ]
                },
                {
                  names: 'uMshwathi NU ',
                  surburb: [
                    {
                      name: 'uMshwathi NU',
                      ward: ['1', '2', '3', '4', '5', '6', '7', '9', '10', '11', '12', '13', '16', '25', '28', '29', '30', '37' ]
                    }
                  ]
                },
                {
                  names: 'Wartburg ',
                  surburb: [
                    {
                      name: 'Wartburg  SP',
                      ward: ['7', '12']
                    }
                  ]
                },
                {
                  names: 'Weltevreden ',
                  surburb: [
                    {
                      name: 'Weltevreden  SP',
                      ward: ['3']
                    }
                  ]
                },
                {
                  names: 'Ziba ',
                  surburb: [
                    {
                      name: 'Ziba  SP',
                      ward: ['3']
                    }
                  ]
                }
              ]
            }
          ]
        },
        
        {
          name: 'uMkhanyakube',
          municipality: [
            {
              name: 'Hlabisa',
              city: [
                {
                  names: 'Amatshamnyama',
                  surburb: [
                    {
                      name: 'Amatshamnyama SP',
                      ward: ['1', '3', '4']
                    }
                  ]
                },
                {
                  names: 'Bazaneni',
                  surburb: [
                    {
                      name: 'Bazaneni SP',
                      ward: ['1', '2', '3']
                    }
                  ]
                },
                {
                  names: 'Dukumbane',
                  surburb: [
                    {
                      name: 'Dukumbane SP',
                      ward: ['1', '2', '3', '5', '6', '7']
                    }
                  ]
                },
                {
                  names: 'Hlabisa ',
                  surburb: [
                    {
                      name: 'Hlabisa SP',
                      ward: ['2', '3']
                    }
                  ]
                },
                {
                  names: 'Hlabisa NU',
                  surburb: [
                    {
                      name: 'Hlabisa NU',
                      ward: ['3', '4', '8', '11', '13', '15', '19']
                    }
                  ]
                },
                {
                  names: 'Hlambanyathi',
                  surburb: [
                    {
                      name: 'Hlambanyathi SP',
                      ward: ['1', '8', '11']
                    }
                  ]
                },
                {
                  names: 'Hluhluwe',
                  surburb: [
                    {
                      name: 'Hluhluwe Game Reserve',
                      ward: ['4', '5', '8', '19']
                    }
                  ]
                },
                {
                  names: 'Koqhoqhoqho',
                  surburb: [
                    {
                      name: 'Koqhoqhoqho SP',
                      ward: ['3', '6', '7']
                    }
                  ]
                },
                {
                  names: 'KwaGula',
                  surburb: [
                    {
                      name: 'KwaGula SP',
                      ward: ['4', '5', '8']
                    }
                  ]
                },
                {
                  names: 'KwaHlabisa',
                  surburb: [
                    {
                      name: 'KwaHlabisa SP',
                      ward: ['1', '3', '8', '11']
                    }
                  ]
                },
                {
                  names: 'KwaMkenkethe',
                  surburb: [
                    {
                      name: 'KwaMkenkethe SP',
                      ward: ['3', '4']
                    }
                  ]
                },
                {
                  names: 'KwaQonsa',
                  surburb: [
                    {
                      name: 'KwaQonsa SP',
                      ward: ['2', '3', '8']
                    }
                  ]
                },
                {
                  names: 'KwaQunwane',
                  surburb: [
                    {
                      name: 'KwaQunwane SP',
                      ward: ['1', '3', '4']
                    }
                  ]
                },
                {
                  names: 'KwaSeme',
                  surburb: [
                    {
                      name: 'KwaSeme SP',
                      ward: ['3', '8']
                    }
                  ]
                },
                {
                  names: 'KwaThembeka',
                  surburb: [
                    {
                      name: 'KwaThembeka SP',
                      ward: ['1', '10', '11']
                    }
                  ]
                },
                {
                  names: 'Mabhokisini',
                  surburb: [
                    {
                      name: 'Mabhokisini SP',
                      ward: ['1', '2', '3', '8']
                    }
                  ]
                },
                {
                  names: 'Mabundeni',
                  surburb: [
                    {
                      name: 'Mabundeni SP',
                      ward: ['1', '2', '3']
                    }
                  ]
                },
                {
                  names: 'Madunjini',
                  surburb: [
                    {
                      name: 'Madunjini SP',
                      ward: [ '4', '8']
                    }
                  ]
                },
                {
                  names: 'Matshamhlophe',
                  surburb: [
                    {
                      name: 'Matshamhlophe SP',
                      ward: ['4', '5', '6']
                    }
                  ]
                },
                {
                  names: 'Matshamnyama',
                  surburb: [
                    {
                      name: 'Matshamnyama SP',
                      ward: ['4', '5', '6', '7']
                    }
                  ]
                },
                {
                  names: 'Mawuza',
                  surburb: [
                    {
                      name: 'Mawuza SP',
                      ward: ['5', '6', '7', '8']
                    }
                  ]
                },
                {
                  names: 'Mgangado',
                  surburb: [
                    {
                      name: 'Mgangado SP',
                      ward: ['3', '4', '7', '8']
                    }
                  ]
                },
                {
                  names: 'Mgovuzo',
                  surburb: [
                    {
                      name: 'Mgovuzo SP',
                      ward: ['1', '3', '4', '10']
                    }
                  ]
                },
                {
                  names: 'Mgwaqeni',
                  surburb: [
                    {
                      name: 'Mgwaqeni SP',
                      ward: ['2', '3', '8']
                    }
                  ]
                },
                {
                  names: 'Mpembeni',
                  surburb: [
                    {
                      name: 'Mpembeni SP',
                      ward: ['3']
                    }
                  ]
                },
                {
                  names: 'Mthwandlana',
                  surburb: [
                    {
                      name: 'Mthwandlana SP',
                      ward: ['2', '5', '6', '7']
                    }
                  ]
                },
                {
                  names: 'Mzinene',
                  surburb: [
                    {
                      name: 'Mzinene SP',
                      ward: ['5', '6', '7', '8']
                    }
                  ]
                },
                {
                  names: 'Nhlawathi',
                  surburb: [
                    {
                      name: 'Nhlawathi SP',
                      ward: ['4', '5', '6']
                    }
                  ]
                },
                {
                  names: 'Nkonyamaneni',
                  surburb: [
                    {
                      name: 'Nkonyamaneni SP',
                      ward: ['3', '6', '7', '8']
                    }
                  ]
                },
                {
                  names: 'Nomcondo',
                  surburb: [
                    {
                      name: 'Nomcondo SP',
                      ward: ['3', '7', '8', '19']
                    }
                  ]
                },
                {
                  names: 'Nqotweni',
                  surburb: [
                    {
                      name: 'Nqotweni SP',
                      ward: ['1', '2', '3']
                    }
                  ]
                },
                {
                  names: 'Papasi',
                  surburb: [
                    {
                      name: 'Papasi SP',
                      ward: ['4', '6', '7']
                    }
                  ]
                },
                {
                  names: 'Sitezi',
                  surburb: [
                    {
                      name: 'Sitezi SP',
                      ward: ['1', '3', '4']
                    }
                  ]
                },
                {
                  names: 'Tanganeni',
                  surburb: [
                    {
                      name: 'Tanganeni SP',
                      ward: ['2', '3']
                    }
                  ]
                },
                {
                  names: 'Thandanani',
                  surburb: [
                    {
                      name: 'Thandanani SP',
                      ward: ['3', '4', '8']
                    }
                  ]
                },
                {
                  names: 'Umfolozi',
                  surburb: [
                    {
                      name: 'Umfolozi Game Reserve',
                      ward: ['1', '6', '8', '11', '12', '13', '15']   
                    }
                  ]
                },
                {
                  names: 'Zibayeni',
                  surburb: [
                    {
                      name: 'Zibayeni SP',
                      ward: ['5', '8']
                    }
                  ]
                },
                {
                  names: 'Zodonini',
                  surburb: [
                    {
                      name: 'Zodonini SP',
                      ward: ['3', '4', '8']
                    }
                  ]
                },

              ]
            },
            {
              name: 'Jozini',
              city: [
                {
                  names: 'Banjana',
                  surburb: [
                    {
                      name: 'Banjana SP',
                      ward: ['5', '6']
                    }
                  ]
                },
                {
                  names: 'Bhambanani',
                  surburb: [
                    {
                      name: 'Bhambanani SP',
                      ward: ['12']
                    }
                  ]
                },
                {
                  names: 'Bhekindoda',
                  surburb: [
                    {
                      name: 'Bhekindoda SP',
                      ward: ['9', '10', '11']
                    }
                  ]
                },
                {
                  names: 'Bhokweni',
                  surburb: [
                    {
                      name: 'Bhokweni SP',
                      ward: ['8', '14']
                    }
                  ]
                },
                {
                  names: 'Biva',
                  surburb: [
                    {
                      name: 'Biva SP',
                      ward: ['6', '14']
                    }
                  ]
                },

                {
                  names: 'Dubulwayo',
                  surburb: [
                    {
                      name: 'Dubulwayo SP',
                      ward: ['15']
                    }
                  ]
                },
                {
                  names: 'Ebovini',
                  surburb: [
                    {
                      name: 'Ebovini SP',
                      ward: ['17', '18']
                    }
                  ]
                },
                {
                  names: 'eGujini',
                  surburb: [
                    {
                      name: 'eGujini SP',
                      ward: ['2', '4', '20']
                    }
                  ]
                },
                {
                  names: 'Ekhuhlehleni',
                  surburb: [
                    {
                      name: 'Ekhuhlehleni SP',
                      ward: ['15']
                    }
                  ]
                },
                {
                  names: 'eMachobeni',
                  surburb: [
                    {
                      name: 'eMachobeni SP',
                      ward: ['14']
                    }
                  ]
                },
                {
                  names: 'eManqayini',
                  surburb: [
                    {
                      name: 'eMaphaya SP',
                      ward: ['7', '8']
                    }
                  ]
                },
                {
                  names: 'Emanyiseni',
                  surburb: [
                    {
                      name: 'Emanyiseni SP',
                      ward: ['16', '17']
                    }
                  ]
                },
                {
                  names: 'Embandleni',
                  surburb: [
                    {
                      name: 'Embandleni SP',
                      ward: ['16', '17']
                    }
                  ]
                },
                {
                  names: 'eMombeni',
                  surburb: [
                    {
                      name: 'eMombeni SP',
                      ward: ['9']
                    }
                  ]
                },
                {
                  names: 'eMthonjeni',
                  surburb: [
                    {
                      name: 'eMthonjeni SP',
                      ward: ['11', '14']
                    }
                  ]
                },
                {
                  names: 'ePhosheni',
                  surburb: [
                    {
                      name: 'ePhosheni SP',
                      ward: ['16', '17']
                    }
                  ]
                },
                {
                  names: 'eSiweni',
                  surburb: [
                    {
                      name: 'eSiweni SP',
                      ward: ['10', '11', '12']
                    }
                  ]
                },
                {
                  names: 'eZinhlwathini',
                  surburb: [
                    {
                      name: 'eZinhlwathini SP',
                      ward: ['10', '11', '12']
                    }
                  ]
                },
                {
                  names: 'eZinkunini',
                  surburb: [
                    {
                      name: 'eZinkunini SP',
                      ward: ['2', '4', '5']
                    }
                  ]
                },
                {
                  names: 'Fakude',
                  surburb: [
                    {
                      name: 'Fakude SP',
                      ward: ['1', '20']
                    }
                  ]
                },
                {
                  names: 'Hlalanathi',
                  surburb: [
                    {
                      name: 'Makhatini Flats',
                      ward: ['5']
                    }
                  ]
                },
                {
                  names: 'Ingwavuma',
                  surburb: [
                    {
                      name: 'Ingwavuma SP',
                      ward: ['11', '14']
                    }
                  ]
                },
                {
                  names: 'Isihlangwini',
                  surburb: [
                    {
                      name: 'Isihlangwini SP',
                      ward: ['11', '14']
                    }
                  ]
                },
                {
                  names: 'Jozini',
                  surburb: [
                    {
                      name: 'Jozini Part1',
                      ward: ['7']
                    },
                    {
                      name: 'Jozini Part1',
                      ward: ['7', '8']
                    },
                    {
                      name: 'Msimbane',
                      ward: ['7', '8']
                    }
                  ]
                },
                {
                  names: 'Jozini NU',
                  surburb: [
                    {
                      name: 'Biva Experimental Farm',
                      ward: ['6', '14']
                    },
                    {
                      name: 'Biva Experimental Farm',
                      ward: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
                    }
                  ]
                },
                {
                  names: 'Khandane',
                  surburb: [
                    {
                      name: 'Khandane SP',
                      ward: ['8', '9', '14']
                    }
                  ]
                },
                {
                  names: 'Khume',
                  surburb: [
                    {
                      name: 'Khume SP',
                      ward: ['15', '16']
                    }
                  ]
                },
                {
                  names: 'KwaBoniswayo',
                  surburb: [
                    {
                      name: 'KwaBoniswayo SP',
                      ward: ['11', '18']
                    }
                  ]
                },
                {
                  names: 'KwaDinabanye',
                  surburb: [
                    {
                      name: 'KwaDinabanye SP',
                      ward: ['18']
                    }
                  ]
                },
                {
                  names: 'KwaGedle',
                  surburb: [
                    {
                      name: 'KwaGedle SP',
                      ward: ['5', '6','14']
                    }
                  ]
                },
                {
                  names: 'KwaJobe',
                  surburb: [
                    {
                      name: 'KwaJobe SP',
                      ward: ['3', '4', '5', '7', '14', '20']
                    }
                  ]
                },
                {
                  names: 'KwaLiweni',
                  surburb: [
                    {
                      name: 'KwaLiweni SP',
                      ward: ['8', '9', '14', '19']
                    }
                  ]
                },
                {
                  names: 'KwaMabona',
                  surburb: [
                    {
                      name: 'KwaMabona SP',
                      ward: ['15']
                    }
                  ]
                },
                {
                  names: 'KwaMakhonyeni',
                  surburb: [
                    {
                      name: 'KwaMakhonyeni SP',
                      ward: ['5', '7', '8']
                    }
                  ]
                },
                {
                  names: 'KwaMangqwashu',
                  surburb: [
                    {
                      name: 'KwaMangqwashu SP',
                      ward: ['9', '10', '19']
                    }
                  ]
                },
                {
                  names: 'KwaMbuzi',
                  surburb: [
                    {
                      name: 'KwaMbuzi SP',
                      ward: ['6', '10', '12', '13']
                    }
                  ]
                },
                {
                  names: 'KwaNonjinjikazi',
                  surburb: [
                    {
                      name: 'KwaNonjinjikazi SP',
                      ward: ['11', '12', '17', '18']
                    }
                  ]
                },
                {
                  names: 'KwaQondile',
                  surburb: [
                    {
                      name: 'KwaQondile SP',
                      ward: ['2', '5', '7']
                    }
                  ]
                },
                {
                  names: 'Late View',
                  surburb: [
                    {
                      name: 'Late View SP',
                      ward: ['6', '12', '13', '17']
                    }
                  ]
                },
                {
                  names: 'Lindizwe',
                  surburb: [
                    {
                      name: 'Lindizwe SP',
                      ward: ['14']
                    }
                  ]
                },
                {
                  names: 'Lundini',
                  surburb: [
                    {
                      name: 'Lundini SP',
                      ward: ['14']
                    }
                  ]
                },
                {
                  names: 'Magugu',
                  surburb: [
                    {
                      name: 'Magugu SP',
                      ward: ['11', '14']
                    }
                  ]
                },
                {
                  names: 'Majozini',
                  surburb: [
                    {
                      name: 'Majozini SP',
                      ward: ['2', '7', '14']
                    }
                  ]
                },
                {
                  names: 'Makane',
                  surburb: [
                    {
                      name: 'Makane SP',
                      ward: ['6', '9', '13', '16', '17']
                    }
                  ]
                },
                {
                  names: 'Malobeni',
                  surburb: [
                    {
                      name: 'Malobeni SP',
                      ward: ['4', '5', '14']
                    }
                  ]
                },
                {
                  names: 'Mangwazane',
                  surburb: [
                    {
                      name: 'Mangwazane SP',
                      ward: ['9', '10', '19']
                    }
                  ]
                },
                {
                  names: 'Manhlali',
                  surburb: [
                    {
                      name: 'Manhlali SP',
                      ward: ['11', '14']
                    }
                  ]
                },
                {
                  names: 'Manyisane',
                  surburb: [
                    {
                      name: 'Manyisane SP',
                      ward: ['15']
                    }
                  ]
                },
                {
                  names: 'Masabe',
                  surburb: [
                    {
                      name: 'Masabe SP',
                      ward: ['6', '10','14' ,'19']
                    }
                  ]
                },
                {
                  names: 'Mathenjwa',
                  surburb: [
                    {
                      name: 'Mathenjwa SP',
                      ward: ['15', '18']
                    }
                  ]
                },
                {
                  names: 'Mayaluka',
                  surburb: [
                    {
                      name: 'Mayaluka SP',
                      ward: ['15']
                    }
                  ]
                },
                {
                  names: 'Mbodla',
                  surburb: [
                    {
                      name: 'Mbodla SP',
                      ward: ['12', '13']
                    }
                  ]
                },
                {
                  names: 'Mhlekazi',
                  surburb: [
                    {
                      name: 'Mhlekazi SP',
                      ward: ['1', '20']
                    }
                  ]
                },
                {
                  names: 'Mjindi',
                  surburb: [
                    {
                      name: 'Mjindi SP',
                      ward: ['9', '10', '19']
                    }
                  ]
                },
                {
                  names: 'Mkhanyeni',
                  surburb: [
                    {
                      name: 'Mkhanyeni SP',
                      ward: ['17', '18']
                    }
                  ]
                },
                {
                  names: 'Mthonjeni',
                  surburb: [
                    {
                      name: 'Mthonjeni SP',
                      ward: ['5', '6']
                    }
                  ]
                },
                {
                  names: 'Mkhuze',
                  surburb: [
                    {
                      name: 'Mkhuze SP',
                      ward: ['20']
                    },
                    {
                      name: 'Mlingo',
                      ward: ['20']
                    }
                  ]
                },
                {
                  names: 'Mkuze',
                  surburb: [
                    {
                      name: 'Mkuze Game Reserve',
                      ward: ['1', '2', '3', '4','20']
                    }
                  ]
                },
                {
                  names: 'Mlambongwenya',
                  surburb: [
                    {
                      name: 'Mlambongwenya SP',
                      ward: ['10', '11', '14']
                    }
                  ]
                },

                {
                  names: 'Mngomezulu',
                  surburb: [
                    {
                      name: 'Mngomezulu SP',
                      ward: ['18']
                    }
                  ]
                },
                {
                  names: 'Mphakathi',
                  surburb: [
                    {
                      name: 'Mphakathi SP',
                      ward: [ '2', '14']
                    }
                  ]
                },
                {
                  names: 'Mpileni',
                  surburb: [
                    {
                      name: 'Mpileni SP',
                      ward: ['1', '3', '20']
                    }
                  ]
                },
                {
                  names: 'Mpondwana',
                  surburb: [
                    {
                      name: 'Mpondwana SP',
                      ward: ['7', '8']
                    }
                  ]
                },
                {
                  names: 'Mpondweni',
                  surburb: [
                    {
                      name: 'Mpondweni SP',
                      ward: ['7', '8', '14']
                    }
                  ]
                },
                {
                  names: 'Mshonisalanga',
                  surburb: [
                    {
                      name: 'Mshonisalanga SP',
                      ward: ['15']
                    }
                  ]
                },
                {
                  names: 'Munywana',
                  surburb: [
                    {
                      name: 'Munywana SP',
                      ward: ['16', '17']
                    }
                  ]
                },
                {
                  names: 'Muza',
                  surburb: [
                    {
                      name: 'Muza SP',
                      ward: ['3', '4', '7', '20']
                    }
                  ]
                },
                {
                  names: 'Mziki',
                  surburb: [
                    {
                      name: 'Mziki SP',
                      ward: ['13', '17']
                    }
                  ]
                },
                {
                  names: 'Mzinyoni',
                  surburb: [
                    {
                      name: 'Mzinyoni SP',
                      ward: [ '10', '13']
                    }
                  ]
                },
                {
                  names: 'Nambulungwana',
                  surburb: [
                    {
                      name: 'Nambulungwana SP',
                      ward: ['9', '10', '19']
                    }
                  ]
                },
                {
                  names: 'Ndabeni',
                  surburb: [
                    {
                      name: 'Ndabeni Forest',
                      ward: ['8', '9']
                    },
                    {
                      name: 'Ndabeni SP',
                      ward: ['8', '9', '19']
                    }
                  ]
                },
                {
                  names: 'Ndubo',
                  surburb: [
                    {
                      name: 'Ndubo Game Park',
                      ward: ['9', '16']
                    }
                  ]
                },
                {
                  names: 'Ndumu',
                  surburb: [
                    {
                      name: 'Ndumu SP',
                      ward: ['9', '16', '17']
                    }
                  ]
                },
                {
                  names: 'Ngude',
                  surburb: [
                    {
                      name: 'Ngude SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Ngwenyameni',
                  surburb: [
                    {
                      name: 'Ngwenyameni SP',
                      ward: ['18']
                    }
                  ]
                },
                {
                  names: 'Nhlabezinde',
                  surburb: [
                    {
                      name: 'Nhlabezinde SP',
                      ward: ['15']
                    }
                  ]
                },
                {
                  names: 'Nkangala',
                  surburb: [
                    {
                      name: 'Nkangala SP',
                      ward: ['2', '14']
                    }
                  ]
                },
                {
                  names: 'Nkungwini',
                  surburb: [
                    {
                      name: 'Nkungwini SP',
                      ward: ['18']
                    }
                  ]
                },
                {
                  names: 'Nkwambane',
                  surburb: [
                    {
                      name: 'Nkwambane SP',
                      ward: ['11', '12', '17']
                    }
                  ]
                },
                {
                  names: 'Nohhihhi',
                  surburb: [
                    {
                      name: 'Nohhihhi SP',
                      ward: ['2']
                    }
                  ]
                },
                {
                  names: 'Nondabuya',
                  surburb: [
                    {
                      name: 'Nondabuya SP',
                      ward: ['6', '9', '19']
                    }
                  ]
                },
                {
                  names: 'Ntabayengwe',
                  surburb: [
                    {
                      name: 'Ntabayengwe SP',
                      ward: ['11', '18']
                    }
                  ]
                },
                {
                  names: 'Nyawo',
                  surburb: [
                    {
                      name: 'Nyawo SP',
                      ward: ['9', '11']
                    }
                  ]
                },
                {
                  names: 'Ohlalwini',
                  surburb: [
                    {
                      name: 'eManyuka',
                      ward: ['8', '9', '19']
                    },
                    {
                      name: 'Othobothini',
                      ward: ['6', '7', '8', '19']
                    }
                  ]
                },
                {
                  names: 'Ophondweni',
                  surburb: [
                    {
                      name: 'Ophondweni SP',
                      ward: ['9', '10', '19']
                    }
                  ]
                },
                {
                  names: 'Oshabeni',
                  surburb: [
                    {
                      name: 'Oshabeni SP',
                      ward: ['18']
                    }
                  ]
                },
                {
                  names: 'Phapheni',
                  surburb: [
                    {
                      name: 'Phapheni SP',
                      ward: ['10', '13','14' ,'19']
                    }
                  ]
                },
                {
                  names: 'Pikinini Nyamazane',
                  surburb: [
                    {
                      name: 'Pikinini Nyamazane SP',
                      ward: ['11', '14']
                    }
                  ]
                },
                {
                  names: 'Qokolwane',
                  surburb: [
                    {
                      name: 'Qokolwane SP',
                      ward: ['4', '5']
                    }
                  ]
                },
                {
                  names: 'Shemula',
                  surburb: [
                    {
                      name: 'Shemula SP',
                      ward: ['6', '12']
                    }
                  ]
                },
                {
                  names: 'Sibongile',
                  surburb: [
                    {
                      name: 'Sibongile SP',
                      ward: ['5']
                    }
                  ]
                },
                {
                  names: 'Sibonokuhle',
                  surburb: [
                    {
                      name: 'Sibonokuhle SP',
                      ward: ['3', '4', '5', '20']
                    }
                  ]
                },
                {
                  names: 'Sihlangwini',
                  surburb: [
                    {
                      name: 'Sihlangwini SP',
                      ward: ['9', '14']
                    }
                  ]
                },
                {
                  names: 'Thembalethu',
                  surburb: [
                    {
                      name: 'Thembalethu SP',
                      ward: ['20']
                    }
                  ]
                },
                {
                  names: 'Tshaneni',
                  surburb: [
                    {
                      name: 'Tshaneni SP',
                      ward: ['1', '2', '20']
                    }
                  ]
                },
                {
                  names: 'Ubombo',
                  surburb: [
                    {
                      name: 'Ubombo SP',
                      ward: ['2', '20']
                    }
                  ]
                },
                {
                  names: 'Uphande',
                  surburb: [
                    {
                      name: 'Uphande SP',
                      ward: ['2', '5', '7']
                    }
                  ]
                },
                {
                  names: 'Zulwini',
                  surburb: [
                    {
                      name: 'Zulwini SP',
                      ward: ['9']
                    }
                  ]
                }
              ]
            },
            {
              name: 'Mtubatuba',
              city: [
                {
                  names: 'DukuDuku', 
                  surburb: [
                    {
                      name: 'DukuDuku SP',
                      ward: ['2', '8', '9']
                    }
                  ]
                },
                {
                  names: 'DukuDuku NU', 
                  surburb: [
                    {
                      name: 'DukuDuku NU',
                      ward: ['1', '2', '3', '4', '5', '6', '8', '9', '10', '11', '12', '13', '16']
                    }
                  ]
                },
                {
                  names: 'Ebaswzini', 
                  surburb: [
                    {
                      name: 'Ebaswzini SP',
                      ward: ['13', '14', '15', '16', '17', '18']
                    }
                  ]
                },
                {
                  names: 'Enqupheni', 
                  surburb: [
                    {
                      name: 'Enqupheni SP',
                      ward: ['3', '6', '16']
                    }
                  ]
                },
                {
                  names: 'Ensolweni', 
                  surburb: [
                    {
                      name: 'Ensolweni SP',
                      ward: ['8', '18', '19']
                    }
                  ]
                },
                {
                  names: 'Esiyembeni', 
                  surburb: [
                    {
                      name: 'Esiyembeni SP',
                      ward: ['8', '13', '15']
                    }
                  ]
                },
                {
                  names: 'Gunjaneni', 
                  surburb: [
                    {
                      name: 'Gunjaneni SP',
                      ward: ['15', '18', '19']
                    }
                  ]
                },
                {
                  names: 'Hoho', 
                  surburb: [
                    {
                      name: 'Hoho SP',
                      ward: ['13', '14', '15']
                    }
                  ]
                },
                {
                  names: 'KwaMsane', 
                  surburb: [
                    {
                      name: 'KwaMsane SP',
                      ward: ['1', '2', '4', '6', '11', '13']
                    }
                  ]
                },
                {
                  names: 'KwaMthole', 
                  surburb: [
                    {
                      name: 'KwaMthole SP',
                      ward: ['8', '19']
                    }
                  ]
                },
                {
                  names: 'KwaSithole', 
                  surburb: [
                    {
                      name: 'KwaSithole SP',
                      ward: ['8', '18', '19']
                    }
                  ]
                },
                {
                  names: 'Machibini', 
                  surburb: [
                    {
                      name: 'Machibini SP',
                      ward: ['8', '15', '18', '19']
                    }
                  ]
                },
                {
                  names: 'Madwaleni', 
                  surburb: [
                    {
                      name: 'Madwaleni SP',
                      ward: ['7', '11', '12', '16', '17']
                    }
                  ]
                },
                {
                  names: 'Makhambane', 
                  surburb: [
                    {
                      name: 'Makhambane SP',
                      ward: ['3', '6', '12', '16', '17']
                    }
                  ]
                },
                {
                  names: 'Mapheleni', 
                  surburb: [
                    {
                      name: 'Mapheleni SP',
                      ward: ['7', '12', '17', '18', '19']
                    }
                  ]
                },
                {
                  names: 'Mfekayi', 
                  surburb: [
                    {
                      name: 'Mfekayi SP',
                      ward: ['3', '7', '8', '9', '10', '11']
                    }
                  ]
                },
                {
                  names: 'Mhujini', 
                  surburb: [
                    {
                      name: 'Mhujini SP',
                      ward: ['17', '18', '19']
                    }
                  ]
                },
                {
                  names: 'Mshaya', 
                  surburb: [
                    {
                      name: 'Mshaya SP',
                      ward: ['2', '11', '13', '14']
                    }
                  ]
                },
                {
                  names: 'Mtubatuba', 
                  surburb: [
                    {
                      name: 'Blackiston',
                      ward: ['2', '5', '6']
                    },
                    {
                      name: 'Duku',
                      ward: ['3', '4']
                    },
                    {
                      name: 'Honeydale',
                      ward: ['5']
                    },
                    {
                      name: 'Khula Village',
                      ward: ['3', '5']
                    },
                    {
                      name: 'Monzi SH',
                      ward: ['3', '4', '5']
                    },
                    {
                      name: 'Mtubatuba A SP',
                      ward: ['5', '6']
                    },
                    {
                      name: 'Uitkytoring Landstrip',
                      ward: ['2', '8', '9']
                    }
                  ]
                },
                {
                  names: 'Mvutshini', 
                  surburb: [
                    {
                      name: 'Mvutshini SP',
                      ward: ['8', '19']
                    }
                  ]
                },
                {
                  names: 'Ndombeni', 
                  surburb: [
                    {
                      name: 'Ndombeni SP',
                      ward: ['7', '10', '11', '12', '17', '19']
                    }
                  ]
                },
                {
                  names: 'Nkatha', 
                  surburb: [
                    {
                      name: 'Nkatha 2 SP',
                      ward: ['11', '13', '14', '15']
                    },
                    {
                      name: 'Nkatha SP',
                      ward: ['6', '13', '14', '16', '17', '19']
                    }
                  ]
                },
                {
                  names: 'Nkolokoto', 
                  surburb: [
                    {
                      name: 'Nkolokoto SP',
                      ward: ['13', '14', '15', '18']
                    }
                  ]
                },
                {
                  names: 'Nkombose', 
                  surburb: [
                    {
                      name: 'Nkombose SP',
                      ward: ['2', '6', '13', '16']
                    }
                  ]
                },
                {
                  names: 'Ntondweni', 
                  surburb: [
                    {
                      name: 'Ntondweni SP',
                      ward: ['7', '8', '17', '18', '19']
                    }
                  ]
                },
                {
                  names: 'Ogengele', 
                  surburb: [
                    {
                      name: 'Ogengele SP',
                      ward: ['16', '17', '18']
                    }
                  ]
                },
                {
                  names: 'Ophondweni', 
                  surburb: [
                    {
                      name: 'Ophondweni SP',
                      ward: ['3', '7', '8', '10', '19']
                    }
                  ]
                },
                {
                  names: 'Phondweni', 
                  surburb: [
                    {
                      name: 'Phondweni A SP',
                      ward: ['3', '12', '16']
                    }
                  ]
                },
                {
                  names: 'Qakwini', 
                  surburb: [
                    {
                      name: 'Qakwini',
                      ward: ['3', '8', '9', '10']
                    }
                  ]
                },
                {
                  names: 'River View', 
                  surburb: [
                    {
                      name: 'River View',
                      ward: ['2', '4', '5', '6']
                    }
                  ]
                },
                {
                  names: 'ShikiShela', 
                  surburb: [
                    {
                      name: 'ShikiShela SP',
                      ward: ['3', '11', '12', '16']
                    }
                  ]
                },
                {
                  names: 'Somkele', 
                  surburb: [
                    {
                      name: 'Myeki',
                      ward: ['14', '15', '17', '18']
                    }
                  ]
                },

                {
                  names: 'St Lucia', 
                  surburb: [
                    {
                      name: "St Lucia's SP",
                      ward: ['4']
                    }
                  ]
                }
              ]
            },
            {
              name: 'The Big 5 False Bay',
              city: [
                {
                  names: 'Bangiswa',
                  surburb: [
                    {
                      name: 'Bangiswa SP',
                      ward: ['4']
                    }
                  ]
                },
                {
                  names: 'Ezimbondweni',
                  surburb: [
                    {
                      name: 'Ezimbondweni SP',
                      ward: ['1','4']
                    }
                  ]
                },
                {
                  names: 'Giba',
                  surburb: [
                    {
                      name: 'Giba SP',
                      ward: ['1','4']
                    },
                    {
                      name: 'Nokomkhonto',
                      ward: ['4']
                    }
                  ]
                },
                {
                  names: 'Hlabisa',
                  surburb: [
                    {
                      name: 'Sungulwane',
                      ward: ['1', '3', '20']
                    }
                  ]
                },
                {
                  names: 'Hluhluwe',
                  surburb: [
                    {
                      name: 'Bartown',
                      ward: ['3']
                    },
                    {
                      name: 'Hluhluwe SP',
                      ward: ['3']
                    }
                  ]
                },
                {
                  names: 'Mahongoza',
                  surburb: [
                    {
                      name: 'Mahongoza SP',
                      ward: ['1','2', '3','4']
                    }
                  ]
                },
                {
                  names: 'Mphakathini',
                  surburb: [
                    {
                      name: 'Mphakathini SP',
                      ward: ['2','4']
                    }
                  ]
                },
                {
                  names: 'Mphakathini B',
                  surburb: [
                    {
                      name: 'Mphakathini B SP',
                      ward: ['1', '2', '4']
                    }
                  ]
                },
                {
                  names: 'Ngyenya',
                  surburb: [
                    {
                      name: 'Ngyenya SP',
                      ward: ['1','2', '3','4']
                    }
                  ]
                },
                {
                  names: 'Njiya',
                  surburb: [
                    {
                      name: 'Njiya SP',
                      ward: ['1', '4', '20']
                    }
                  ]
                },
                {
                  names: 'Nqutsheni',
                  surburb: [
                    {
                      name: 'Nqutsheni SP',
                      ward: ['2']
                    }
                  ]
                },
                {
                  names: 'Nsimane',
                  surburb: [
                    {
                      name: 'Ekuseni',
                      ward: ['1', '2', '3']
                    },
                    {
                      name: 'Nsimane SP',
                      ward: ['1', '2', '3']
                    }
                  ]
                },
                {
                  names: 'Nyalazi',
                  surburb: [
                    {
                      name: 'Nyalazi State Forest',
                      ward: ['2', '9']
                    }
                  ]
                },
                {
                  names: 'Qomukuphila',
                  surburb: [
                    {
                      name: 'Qomukuphila SP',
                      ward: ['2', '4']
                    }
                  ]
                },
                {
                  names: 'Sikwakwaneni',
                  surburb: [
                    {
                      name: 'Sikwakwaneni SP',
                      ward: ['1','4']
                    }
                  ]
                },
                {
                  names: 'Sondwana',
                  surburb: [
                    {
                      name: 'Sondwana Bay National Park',
                      ward: ['4', '5']
                    }
                  ]
                },
                {
                  names: 'St. Lucia Marine Reserve',
                  surburb: [
                    {
                      name: 'St. Lucia Marine Reserve SP',
                      ward: ['2', '3', '4', '9']
                    }
                  ]
                },
                {
                  names: 'The Big 5 False Bay NU',
                  surburb: [
                    {
                      name: 'The Big 5 False Bay NU',
                      ward: ['1', '2', '3', '4', '6', '7', '8', '9', '20']
                    }
                  ]
                },
                {
                  names: 'The Great St.Lucia',
                  surburb: [
                    {
                      name: 'The Great St.Lucia WEtland Park',
                      ward: ['4']
                    }
                  ]
                }

              ]
            },
            {
              name: 'Umhlabuyalingana',
              city: [
                {
                  names: 'Bangizwe',
                  surburb: [
                    {
                      name: 'Bangizwe SP',
                      ward: ['7', '15']
                    }
                  ]
                },
                {
                  names: 'eKuhluphekeni',
                  surburb: [
                    {
                      name: 'eKuhluphekeni SP',
                      ward: ['1', '4', '10', '17']
                    }
                  ]
                },
                {
                  names: 'eMangweni',
                  surburb: [
                    {
                      name: 'eMangweni SP',
                      ward: ['9']
                    }
                  ]
                },
                {
                  names: 'eNgozini',
                  surburb: [
                    {
                      name: 'eNgozini SP',
                      ward: ['10', '12', '17']
                    }
                  ]
                },
                {
                  names: 'Enhlambeni',
                  surburb: [
                    {
                      name: 'Enhlambeni SP',
                      ward: ['13','14' ,'15']
                    }
                  ]
                },
                {
                  names: 'Enkathweni',
                  surburb: [
                    {
                      name: 'Enkathweni SP',
                      ward: ['1', '4']
                    }
                  ]
                },
                {
                  names: 'eNkovukeni',
                  surburb: [
                    {
                      name: 'eNkovukeni SP',
                      ward: ['4', '10']
                    }
                  ]
                },
                {
                  names: 'Esibhoweni',
                  surburb: [
                    {
                      name: 'Esibhoweni SP',
                      ward: ['7','14' ,'15']
                    }
                  ]
                },
                {
                  names: 'Esicabaziri',
                  surburb: [
                    {
                      name: 'Esicabaziri SP',
                      ward: ['16']
                    }
                  ]
                },
                {
                  names: 'Esiphahleni',
                  surburb: [
                    {
                      name: 'Esiphahleni SP',
                      ward: ['3', '4']
                    }
                  ]
                },
                {
                  names: 'Gazini',
                  surburb: [
                    {
                      name: 'Gazini SP',
                      ward: ['9', '12']
                    }
                  ]
                },
                {
                  names: 'Hagaza',
                  surburb: [
                    {
                      name: 'Hagaza SP',
                      ward: ['2', '7']
                    }
                  ]
                },
                {
                  names: 'Hlabezinhlohe',
                  surburb: [
                    {
                      name: 'Hlabezinhlohe SP',
                      ward: ['4', '5', '8']
                    }
                  ]
                },
                {
                  names: 'Hlazane',
                  surburb: [
                    {
                      name: 'Hlazane SP',
                      ward: [ '13']
                    }
                  ]
                },
                {
                  names: 'Hlokohloko',
                  surburb: [
                    {
                      name: 'Hlokohloko SP',
                      ward: ['13', '14', '15']
                    }
                  ]
                },
                {
                  names: 'Jobe',
                  surburb: [
                    {
                      name: 'Jobe SP',
                      ward: ['5', '15']
                    }
                  ]
                },
                {
                  names: 'Kosimeer',
                  surburb: [
                    {
                      name: 'Kosimeer SP',
                      ward: ['10']
                    }
                  ]
                },
                {
                  names: 'KuShengesa',
                  surburb: [
                    {
                      name: 'KuShengesa SP',
                      ward: ['4']
                    }
                  ]
                },
                {
                  names: 'KwaDapha',
                  surburb: [
                    {
                      name: 'KwaDapha SP',
                      ward: ['4', '10']
                    }
                  ]
                },
                {
                  names: 'KwaGoerge',
                  surburb: [
                    {
                      name: 'KwaGoerge SP',
                      ward: ['4', '10', '17']
                    }
                  ]
                },
                {
                  names: 'KwaMahlungula',
                  surburb: [
                    {
                      name: 'KwaMahlungula SP',
                      ward: ['10', '12', '17']
                    }
                  ]
                },
                {
                  names: 'KwaMazambane',
                  surburb: [
                    {
                      name: 'Kosi Bay',
                      ward: ['10']
                    },
                     {
                      name: 'Kosi Bay Lodge',
                      ward: ['10']
                    },
                     {
                      name: 'KwaMazambane SP',
                      ward: ['4', '10', '12', '17']
                    },
                     {
                      name: 'Star of the Sea Mission ',
                      ward: ['10']
                    },
                  ]
                },
                {
                  names: 'KwaMbokodo',
                  surburb: [
                    {
                      name: 'KwaMbokodo SP',
                      ward: ['9', '16']
                    }
                  ]
                },
                {
                  names: 'KwaMjiji',
                  surburb: [
                    {
                      name: 'KwaMjiji SP',
                      ward: ['5']
                    }
                  ]
                },
                {
                  names: 'KwaMshudu',
                  surburb: [
                    {
                      name: 'KwaMshudu SP',
                      ward: ['9', '12', '17']
                    }
                  ]
                },
                {
                  names: 'KwaMzimba',
                  surburb: [
                    {
                      name: 'KwaMzimba SP',
                      ward: ['9', '16', '17']
                    }
                  ]
                },
                {
                  names: 'KwaNdaba',
                  surburb: [
                    {
                      name: 'KwaNdaba SP',
                      ward: ['6', '9', '13', '16', '17']
                    }
                  ]
                },
                {
                  names: 'KwaNdongeni',
                  surburb: [
                    {
                      name: 'KwaNdongeni SP',
                      ward: ['2','3','7', '15']
                    }
                  ]
                },
                {
                  names: 'KwaNovunya',
                  surburb: [
                    {
                      name: 'KwaNovunya SP',
                      ward: ['4']
                    }
                  ]
                },
                {
                  names: 'KwaNsukumbili',
                  surburb: [
                    {
                      name: 'KwaNsukumbili SP',
                      ward: ['5', '8']
                    }
                  ]
                },
                {
                  names: 'KwaNyamazane',
                  surburb: [
                    {
                      name: 'KwaNyamazane SP',
                      ward: ['5', '87', '15']
                    }
                  ]
                },
                {
                  names: 'KwaShukela',
                  surburb: [
                    {
                      name: 'KwaShukela SP',
                      ward: ['10', '13']
                    }
                  ]
                },
                {
                  names: 'KwaSonto',
                  surburb: [
                    {
                      name: 'KwaSonto SP',
                      ward: ['5']
                    }
                  ]
                },
                {
                  names: 'KwaThelizolo',
                  surburb: [
                    {
                      name: 'KwaThelizolo SP',
                      ward: ['10', '12']
                    }
                  ]
                },
                {
                  names: 'KwaZamaZama',
                  surburb: [
                    {
                      name: 'KwaZamaZama SP',
                      ward: ['6', '12', '13', '15', '16']
                    }
                  ]
                },
                {
                  names: 'KwaZibi',
                  surburb: [
                    {
                      name: 'KwaZibi SP',
                      ward: ['4', '8']
                    }
                  ]
                },
                {
                  names: 'Lulwane',
                  surburb: [
                    {
                      name: 'Lulwane SP',
                      ward: ['6', '12', '13', '16']
                    }
                  ]
                },
                {
                  names: 'Mabaso',
                  surburb: [
                    {
                      name: 'Mabaso SP',
                      ward: ['7', '15']
                    }
                  ]
                },
                {
                  names: 'Mabhudu',
                  surburb: [
                    {
                      name: 'Mabhudu SP',
                      ward: ['6','8' , '13', '15', '16']
                    }
                  ]
                },
                {
                  names: 'Mabibi',
                  surburb: [
                    {
                      name: 'Mabibi SP',
                      ward: ['5']
                    }
                  ]
                },

                {
                  names: 'Madonela',
                  surburb: [
                    {
                      name: 'Madonela SP',
                      ward: ['6', '13', '14']
                    }
                  ]
                },
                {
                  names: 'Magovini',
                  surburb: [
                    {
                      name: 'Magovini SP',
                      ward: ['13', '14']
                    }
                  ]
                },
                {
                  names: 'Mahlakwe',
                  surburb: [
                    {
                      name: 'Mahlakwe SP',
                      ward: ['2', '3', '7']
                    }
                  ]
                },
                {
                  names: 'Mahlungulu',
                  surburb: [
                    {
                      name: 'Mahlungulu SP',
                      ward: ['10', '12']
                    }
                  ]
                },
                {
                  names: 'Makhaya',
                  surburb: [
                    {
                      name: 'Makhaya SP',
                      ward: ['4', '8', '9', '11']
                    }
                  ]
                },
                {
                  names: 'Malangeni',
                  surburb: [
                    {
                      name: 'Malangeni SP',
                      ward: ['4', '10']
                    }
                  ]
                },
                {
                  names: 'Malobeni',
                  surburb: [
                    {
                      name: 'Malobeni SP',
                      ward: ['3', '4', '5', '7', '14']
                    }
                  ]
                },
                {
                  names: 'Mamfene',
                  surburb: [
                    {
                      name: 'Mamfene SP',
                      ward: ['6', '14', '19']
                    }
                  ]
                },
                {
                  names: 'Manguzi',
                  surburb: [
                    {
                      name: 'Manguzi A',
                      ward: ['1', '4']
                    },
                    {
                      name: 'Manguzi B',
                      ward: ['1', '4', '17']
                    },
                    {
                      name: 'Manguzi Forest Reserve',
                      ward: ['1', '11', '12']
                    },
                  ]
                },
                {
                  names: 'Manyampisi',
                  surburb: [
                    {
                      name: 'Manyampisi SP',
                      ward: ['13', '14', '15']
                    }
                  ]
                },
                {
                  names: 'Mazibomvu',
                  surburb: [
                    {
                      name: 'Mazibomvu SP',
                      ward: ['2', '3', '4', '7']
                    }
                  ]
                },
                {
                  names: 'Mbazwana',
                  surburb: [
                    {
                      name: 'Mbazwana A',
                      ward: ['2', '3']
                    },
                    {
                      name: 'Mbazwana B',
                      ward: ['2', '3', '7']
                    }
                  ]
                },
                {
                  names: 'Mboma',
                  surburb: [
                    {
                      name: 'Mboma SP',
                      ward: ['3','5','7', '15']
                    }
                  ]
                },
                {
                  names: 'Mboza',
                  surburb: [
                    {
                      name: 'Mboza SP',
                      ward: ['6', '10', '12', '13']
                    }
                  ]
                },
                {
                  names: 'Mbube',
                  surburb: [
                    {
                      name: 'Mbube SP',
                      ward: ['2','7', '15']
                    }
                  ]
                },
                {
                  names: 'Mfakubeka',
                  surburb: [
                    {
                      name: 'Mfakubeka SP',
                      ward: ['9', '11', '12']
                    }
                  ]
                },
                {
                  names: 'Mfilweni',
                  surburb: [
                    {
                      name: 'Mfilweni SP',
                      ward: ['9', '11', '12']
                    }
                  ]
                },
                {
                  names: 'Mjindi',
                  surburb: [
                    {
                      name: 'Mjindi SP',
                      ward: ['6','7', '14']
                    }
                  ]
                },
                {
                  names: 'Mlamula',
                  surburb: [
                    {
                      name: 'Mlamula SP',
                      ward: ['5','8', '15']
                    }
                  ]
                },
                {
                  names: 'Mloli',
                  surburb: [
                    {
                      name: 'Mloli SP',
                      ward: ['9', '11', '12']
                    }
                  ]
                },
                {
                  names: 'Mozi',
                  surburb: [
                    {
                      name: 'Mozi A',
                      ward: ['7', '14']
                    },
                    {
                      name: 'Mozi A',
                      ward: ['3','7', '14']
                    }
                  ]
                },
                {
                  names: 'Mpini',
                  surburb: [
                    {
                      name: 'Mpini SP',
                      ward: ['3', '15']
                    }
                  ]
                },
                {
                  names: 'Mpophomeni',
                  surburb: [
                    {
                      name: 'Mpophomeni A',
                      ward: ['6','9', '15', '16']
                    },
                    {
                      name: 'Mpophomeni B',
                      ward: ['8','9', '15', '16']
                    }
                  ]
                },
                {
                  names: 'Mqobela',
                  surburb: [
                    {
                      name: 'Mqobela SP',
                      ward: ['7', '15']
                    }
                  ]
                },
                {
                  names: 'Mseleni',
                  surburb: [
                    {
                      name: 'Mseleni SP',
                      ward: ['5', '15']
                    }
                  ]
                },
                {
                  names: 'Mtanenkosi',
                  surburb: [
                    {
                      name: 'Mtanenkosi SP',
                      ward: ['3', '4']
                    }
                  ]
                },
                {
                  names: 'Mtinkwe',
                  surburb: [
                    {
                      name: 'Mtinkwe SP',
                      ward: ['5', '6', '7', '14']
                    }
                  ]
                },
                {
                  names: 'Munyu',
                  surburb: [
                    {
                      name: 'Munyu SP',
                      ward: ['7', '14']
                    }
                  ]
                },
                {
                  names: 'Mvelabusha',
                  surburb: [
                    {
                      name: 'Mvelabusha SP',
                      ward: ['4', '8', '11']
                    }
                  ]
                },
                {
                  names: 'Mvutshane',
                  surburb: [
                    {
                      name: 'Mvutshane SP',
                      ward: ['10']
                    }
                  ]
                },

                {
                  names: 'Ndlondlweni',
                  surburb: [
                    {
                      name: 'Ndlondlweni SP',
                      ward: ['8', '9', '11', '15', '16']
                    }
                  ]
                },
                {
                  names: 'Ndumu',
                  surburb: [
                    {
                      name: 'Ndumu Game Reserve',
                      ward: ['9', '16']
                    }
                  ]
                },
                {
                  names: 'Ngxabano',
                  surburb: [
                    {
                      name: 'Ngxabano SP',
                      ward: ['4', '8']
                    }
                  ]
                },
                {
                  names: 'Nhlamvu',
                  surburb: [
                    {
                      name: 'Nhlamvu SP',
                      ward: ['5', '15']
                    }
                  ]
                },
                {
                  names: 'Nhlanzana',
                  surburb: [
                    {
                      name: 'Nhlanzana SP',
                      ward: ['10', '13', '14', '19']
                    }
                  ]
                },
                {
                  names: 'Nsukumbili',
                  surburb: [
                    {
                      name: 'Nsukumbili SP',
                      ward: ['4', '8', '10', '11']
                    }
                  ]
                },
                {
                  names: 'Nsthongwe',
                  surburb: [
                    {
                      name: 'Nsthongwe SP',
                      ward: ['7', '14']
                    }
                  ]
                },
                {
                  names: 'Nyenyane',
                  surburb: [
                    {
                      name: 'Nyenyane SP',
                      ward: ['11']
                    }
                  ]
                },
                {
                  names: 'Olakeni',
                  surburb: [
                    {
                      name: 'Olakeni SP',
                      ward: ['2', '3', '4']
                    }
                  ]
                },
                {
                  names: 'Phelandaba',
                  surburb: [
                    {
                      name: 'Phelandaba SP',
                      ward: ['8', '9','16']
                    }
                  ]
                },
                {
                  names: 'Pikinini Myamazane',
                  surburb: [
                    {
                      name: 'Pikinini Myamazane SP',
                      ward: ['11', '12', '17']
                    }
                  ]
                },
                {
                  names: 'Qondwane',
                  surburb: [
                    {
                      name: 'Qondwane SP',
                      ward: ['3', '5']
                    }
                  ]
                },
                {
                  names: 'Qondweni',
                  surburb: [
                    {
                      name: 'Qondweni A',
                      ward: ['3', '4', '7']
                    },
                    {
                      name: 'Qondweni B',
                      ward: ['2', '4', '7']
                    }
                  ]
                },
                {
                  names: 'Sibhoweni',
                  surburb: [
                    {
                      name: 'Sibhoweni SP',
                      ward: ['5','7', '15']
                    }
                  ]
                },
                {
                  names: 'Sihangwane',
                  surburb: [
                    {
                      name: 'Sihangwane A',
                      ward: ['9', '16']
                    },
                    {
                      name: 'Sihangwane B',
                      ward: ['9', '16']
                    }
                  ]
                },
                {
                  names: 'Sihlenga',
                  surburb: [
                    {
                      name: 'Sihlenga SP',
                      ward: ['9', '16']
                    }
                  ]
                },
                {
                  names: 'Siphondweni',
                  surburb: [
                    {
                      name: 'Siphondweni A',
                      ward: ['13']
                    },
                    {
                      name: 'Siphondweni B',
                      ward: ['6','13']
                    }
                  ]
                },
                {
                  names: 'Siqobeleni',
                  surburb: [
                    {
                      name: 'Siqobeleni SP',
                      ward: ['4', '8']
                    }
                  ]
                },
                {
                  names: 'Sodwana',
                  surburb: [
                    {
                      name: 'Sodwana Bay National Park',
                      ward: ['4', '5']
                    }
                  ]
                },
                {
                  names: 'Tembe',
                  surburb: [
                    {
                      name: 'Tembe Elephant Reserve',
                      ward: ['9', '16']
                    }
                  ]
                },
                {
                  names: 'Thandizwe',
                  surburb: [
                    {
                      name: 'Thandizwe SP',
                      ward: ['1', '4', '11', '12', '17']
                    }
                  ]
                },
                {
                  names: 'Thengani',
                  surburb: [
                    {
                      name: 'Thengani A',
                      ward: ['1', '4', '11']
                    },
                    {
                      name: 'Thengani B',
                      ward: ['1', '4', '11', '12']
                    },
                    {
                      name: 'Thengani A',
                      ward: ['4', '11']
                    }
                  ]
                },
                {
                  names: 'Thungwini',
                  surburb: [
                    {
                      name: 'Thungwini SP',
                      ward: ['3', '5']
                    }
                  ]
                },
                {
                  names: 'Ubombo',
                  surburb: [
                    {
                      name: 'Ubombo SP',
                      ward: ['3', '5']
                    }
                  ]
                },
                {
                  names: 'Umhlabuyalingana NU',
                  surburb: [
                    {
                      name: 'Umhlabuyalingana NU',
                      ward: ['3', '4', '5', '8', '9', '11', '13', '14','15']
                    }
                  ]
                },
                {
                  names: 'Welcome',
                  surburb: [
                    {
                      name: 'Welcome SP',
                      ward: ['13']
                    }
                  ]
                }
              ]
            }
          ]
        },
        
        {
          name: 'uMzinyathi',
          municipality: [
            {
              name: 'Endumeni',
              city: [
                {
                  names: 'Bloed River', 
                  surburb:[
                    {
                      name: 'Bloed River SP',
                      ward: ['6', '15', '16']
                    }
                  ]
                },
                {
                  names: 'Dundee', 
                  surburb:[
                    {
                      name: 'Dundee SP',
                      ward: ['2', '3', '4', '5', '6']
                    },
                     {
                      name: 'Sbongile',
                      ward: ['2', '3', '4', '5']
                    }
                  ]
                },
                {
                  names: 'Endumeni NU', 
                  surburb:[
                    {
                      name: 'Endumeni NU',
                      ward: ['1', '2', '3', '4', '5', '6', '12', '15', '16', '19', '24']
                    }
                  ]
                },
                {
                  names: 'Glencoe', 
                  surburb:[
                    {
                      name: 'Glencoe SP',
                      ward: ['1', '2', '3']
                    },
                    {
                      name: 'Shroeders Hope',
                      ward: ['1', '2']
                    },
                    {
                      name: 'Sithembile',
                      ward: ['1', '2', '3']
                    },
                  ]
                },
                {
                  names: 'KwaTelapi', 
                  surburb:[
                    {
                      name: 'KwaTelapi SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Ruigtefontein', 
                  surburb:[
                    {
                      name: 'Ruigtefontein SP',
                      ward: ['1', '24']
                    }
                  ]
                },
                {
                  names: 'Stratford', 
                  surburb:[
                    {
                      name: 'Stratford SP',
                      ward: ['3']
                    }
                  ]
                },
                {
                  names: 'Wasbank', 
                  surburb:[
                    {
                      name: 'Wasbank SP',
                      ward: ['1', '3']
                    }
                  ]
                }
              ]
          },
          {
            name: 'Msinga',
            city: [
              {
                names: 'Bhaza',
                surburb: [
                  {
                    name: 'Bhaza SP',
                    ward: ['2', '3', '9', '10']
                  }
                ]
              },
              { 
                names: 'Chunu A',
                surburb: [
                  {
                    name: 'Chunu A SP1',
                    ward: ['5', '6', '7']
                  },
                  {
                    name: 'Chunu A SP2',
                    ward: ['7', '9']
                  }
                ]
              },
              
              {
                names: 'Chunu',
                surburb: [
                  {
                    name: 'Chunu B SP1',
                    ward: ['8']
                  },
                  {
                    name: 'Chunu B SP2',
                    ward: ['8', '10', '11']
                  }
                ]
              },
              {
                names: 'Cwaka',
                surburb: [
                  {
                    name: 'Cwaka SP',
                    ward: ['4', '14', '16', '17']
                  }
                ]
              },
              {
                names: 'Dolo',
                surburb: [
                  {
                    name: 'Dolo SP',
                    ward: [ '5', '12']
                  }
                ]
              },
              {
                names: 'Dumbe',
                surburb: [
                  {
                    name: 'Dumbe SP',
                    ward: ['1']
                  }
                ]
              },
              {
                names: 'Dungamanzi',
                surburb: [
                  {
                    name: 'Dungamanzi SP',
                    ward: ['5', '7', '10', '11', '13', '14']
                  }
                ]
              },
              {
                names: 'Ekuvukeni',
                surburb: [
                  {
                    name: 'Ekuvukeni SP',
                    ward: ['7', '8', '9']
                  }
                ]
              },
              {
                names: 'Emachunwini',
                surburb: [
                  {
                    name: 'Emachunwini SP',
                    ward: ['8', '9']
                  }
                ]
              },
              {
                names: 'Embangweni',
                surburb: [
                  {
                    name: 'Embangweni SP',
                    ward: ['5', '7','8', '9', '10']
                  }
                ]
              },
              {
                names: 'Embidlini',
                surburb: [
                  {
                    name: 'Embidlini SP',
                    ward: ['18', '19']
                  }
                ]
              },
              {
                names: 'Emthaleni',
                surburb: [
                  {
                    name: 'Emthaleni SP',
                    ward: ['16', '17', '18', '19']
                  }
                ]
              },
              {
                names: 'eNhlalakahle',
                surburb: [
                  {
                    name: 'eNhlalakahle SP',
                    ward: ['7', '9']
                  }
                ]
              },
              {
                names: 'Enyandu',
                surburb: [
                  {
                    name: 'Enyandu SP',
                    ward: ['2', '3', '4', '17']
                  }
                ]
              },
              {
                names: 'Esifuleni',
                surburb: [
                  {
                    name: 'Esifuleni SP1',
                    ward: ['16', '17', '18']
                  },
                  {
                    name: 'Esifuleni SP',
                    ward: ['16', '18']
                  }
                ]
              },
              {
                names: 'Esijozini',
                surburb: [
                  {
                    name: 'Esijozini SP',
                    ward: ['3', '4', '5']
                  }
                ]
              },
              {
                names: 'eSinyameni',
                surburb: [
                  {
                    name: 'eSinyameni SP',
                    ward: ['7', '9']
                  }
                ]
              },
              {
                names: 'Ezingulubeni',
                surburb: [
                  {
                    name: 'Ezingulubeni SP',
                    ward: ['4', '5', '14', '15']
                  }
                ]
              },
              {
                names: 'Gabela',
                surburb: [
                  {
                    name: 'Gabela SP',
                    ward: ['2', '4', '16', '17']
                  }
                ]
              },
              {
                names: 'Ghobo',
                surburb: [
                  {
                    name: 'Ghobo SP',
                    ward: ['1','2', '3']
                  }
                ]
              },
              {
                names: 'Ghohi',
                surburb: [
                  {
                    name: 'Ghohi SP',
                    ward: ['14', '15', '16', '17']
                  }
                ]
              },
              {
                names: 'Gujini',
                surburb: [
                  {
                    name: 'Gujini SP1',
                    ward: ['7', '9']
                  },
                  {
                    name: 'Gujini SP2',
                    ward: ['6','7','8' ,'9']
                  }
                ]
              },
              {
                names: 'Gunjana',
                surburb: [
                  {
                    name: 'Gunjana SP',
                    ward: ['1', '2']
                  }
                ]
              },
              {
                names: 'Guqa',
                surburb: [
                  {
                    name: 'Guqa SP1',
                    ward: ['5', '6', '7']
                  },
                  {
                    name: 'Guqa SP2',
                    ward: ['5', '6', '7']
                  }
                ]
              },
              {
                names: 'Gxobanyawo',
                surburb: [
                  {
                    name: 'Gxobanyawo SP',
                    ward: ['14', '15', '16']
                  }
                ]
              },
              {
                names: 'Gxushaneni',
                surburb: [
                  {
                    name: 'Gxushaneni SP',
                    ward: ['16']
                  }
                ]
              },
              {
                names: 'iNdanyana B',
                surburb: [
                  {
                    name: 'iNdanyana B SP',
                    ward: ['18', '19']
                  }
                ]
              },
              {
                names: 'Inhlonze',
                surburb: [
                  {
                    name: 'Inhlonze SP',
                    ward: ['8']
                  }
                ]
              },
              {
                names: 'Jolwayo',
                surburb: [
                  {
                    name: 'Jolwayo SP',
                    ward: [ '3', '6']
                  }
                ]
              },
              {
                names: 'Kliprivier',
                surburb: [
                  {
                    name: 'Kliprivier SP',
                    ward: ['1', '4']
                  }
                ]
              },
              {
                names: 'KwaMathonsi',
                surburb: [
                  {
                    name: 'KwaMathonsi SP',
                    ward: ['5', '6', '7', '9']
                  }
                ]
              },
              {
                names: 'KwaNtabandni',
                surburb: [
                  {
                    name: 'KwaNtabandni SP',
                    ward: [ '7', '8']
                  }
                ]
              },
              {
                names: 'KwaNtonga',
                surburb: [
                  {
                    name: 'KwaNtonga SP',
                    ward: [ '4', '14']
                  }
                ]
              },
              {
                names: 'Latha',
                surburb: [
                  {
                    name: 'Latha SP',
                    ward: ['8', '10', '11', '13']
                  }
                ]
              },
              {
                names: 'Mabuzela',
                surburb: [
                  {
                    name: 'Mabuzela SP',
                    ward: ['3', '4']
                  }
                ]
              },
              {
                names: 'Macanco',
                surburb: [
                  {
                    name: 'Macanco SP',
                    ward: ['2', '3', '4']
                  }
                ]
              },

              {
                names: 'Mahlaba',
                surburb: [
                  {
                    name: 'Mahlaba SP',
                    ward: ['1', '16', '18']
                  }
                ]
              },
              {
                names: 'Majozi',
                surburb: [
                  {
                    name: 'Majozi SP',
                    ward: ['1', '2', '7', '9']
                  }
                ]
              },
              {
                names: 'Makhasana',
                surburb: [
                  {
                    name: 'Makhasana SP',
                    ward: ['16', '17', '18', '19']
                  }
                ]
              },
              {
                names: 'Malomeni',
                surburb: [
                  {
                    name: 'Malomeni SP',
                    ward: ['4', '5', '7', '10', '14']
                  }
                ]
              },
              {
                names: 'Mambeni',
                surburb: [
                  {
                    name: 'Mambeni SP',
                    ward: ['3', '5', '6']
                  }
                ]
              },
              {
                names: 'Mandulane',
                surburb: [
                  {
                    name: 'Mandulane SP',
                    ward: ['8']
                  }
                ]
              },
              {
                names: 'Mashunka',
                surburb: [
                  {
                    name: 'Mashunka SP',
                    ward: ['3', '5', '6', '10']
                  }
                ]
              },
              {
                names: 'Mathima',
                surburb: [
                  {
                    name: 'Mathima SP',
                    ward: ['5', '6']
                  }
                ]
              },
              {
                names: 'Matshematshe',
                surburb: [
                  {
                    name: 'Matshematshe SP',
                    ward: ['2', '17']
                  }
                ]
              },
              {
                names: 'Mawozini',
                surburb: [
                  {
                    name: 'Mawozini SP',
                    ward: ['8', '11', '13']
                  }
                ]
              },
              {
                names: 'Mazabeko',
                surburb: [
                  {
                    name: 'Mazabeko SP',
                    ward: ['1', '16', '18', '19']
                  }
                ]
              },
              {
                names: 'Mbabane',
                surburb: [
                  {
                    name: 'Mbabane SP',
                    ward: ['3', '4', '5', '6']
                  }
                ]
              },
              {
                names: 'Mbhono',
                surburb: [
                  {
                    name: 'Mbhono SP',
                    ward: [ '13', '14']
                  }
                ]
              },
              {
                names: 'Mbindolo',
                surburb: [
                  {
                    name: 'Mbindolo SP',
                    ward: ['2', '16', '17']
                  }
                ]
              },
              {
                names: 'Mduna',
                surburb: [
                  {
                    name: 'Mduna SP',
                    ward: ['6']
                  }
                ]
              },
              {
                names: 'Mhlangana',
                surburb: [
                  {
                    name: 'Mhlangana SP',
                    ward: [ '7', '9']
                  }
                ]
              },
              {
                names: 'Mkhupula',
                surburb: [
                  {
                    name: 'Mkhupula SP1',
                    ward: ['10', '11', '13', '15']
                  },
                  {
                    name: 'Mkhupula SP2',
                    ward: ['8', '12', '13']
                  }
                ]
              },
               {
                names: 'Mkhuzeni',
                surburb: [
                  {
                    name: 'Mkhuzeni SP',
                    ward: ['1', '2', '4', '7']
                  }
                ]
              },
              {
                names: 'Mngeni',
                surburb: [
                  {
                    name: 'Mngeni SP',
                    ward: ['1', '15', '16']
                  }
                ]
              },
              {
                names: 'Mnqamukantaba',
                surburb: [
                  {
                    name: 'Mnqamukantaba SP',
                    ward: ['5', '6']
                  }
                ]
              },
              {
                names: 'Mpondweni',
                surburb: [
                  {
                    name: 'Mpondweni SP',
                    ward: ['1', '2']
                  }
                ]
              },
              {
                names: 'Mpopolwane',
                surburb: [
                  {
                    name: 'Mpopolwane SP',
                    ward: ['1', '2']
                  }
                ]
              },
              {
                names: 'Msinga NU',
                surburb: [
                  {
                    name: 'Msinga NU',
                    ward: ['1','2', '3', '6', '10', '12', '17', '18', '19']
                  }
                ]
              },
              {
                names: 'Ndaya',
                surburb: [
                  {
                    name: 'Ndaya SP',
                    ward: ['12', '13']
                  }
                ]
              },
              {
                names: 'Ngabayena',
                surburb: [
                  {
                    name: 'Ngabayena SP',
                    ward: ['1', '2']
                  }
                ]
              },
               {
                names: 'Ngoengeni',
                surburb: [
                  {
                    name: 'Ngoengeni SP',
                    ward: ['2', '3', '4']
                  }
                ]
              },
               {
                names: 'Ngubevu',
                surburb: [
                  {
                    name: 'Ngubevu SP1',
                    ward: ['15']
                  },
                  {
                    name: 'Ngubevu SP2',
                    ward: ['13','15']
                  }
                ]
              },
              {
                names: 'Ngubo',
                surburb: [
                  {
                    name: 'Ngubo SP',
                    ward: ['3', '6']
                  }
                ]
              },
              {
                names: 'Ngulule',
                surburb: [
                  {
                    name: 'Ngulule SP1',
                    ward: ['1', '2']
                  },
                  {
                    name: 'Ngulule SP2',
                    ward: ['2', '3']
                  }
                ]
              },
              {
                names: 'Nhlanhleni',
                surburb: [
                  {
                    name: 'Nhlanhleni SP',
                    ward: ['1', '2', '17', '19']
                  }
                ]
              },
              {
                names: 'Nhlesi',
                surburb: [
                  {
                    name: 'Nhlesi SP',
                    ward: ['13', '14', '15']
                  }
                ]
              },

              {
                names: 'Nhlonga',
                surburb: [
                  {
                    name: 'Nhlonga SP',
                    ward: ['9', '12', '13', '15']
                  }
                ]
              },
              {
                names: 'Nkamba',
                surburb: [
                  {
                    name: 'Nkamba SP',
                    ward: ['2', '4', '17']
                  }
                ]
              },
              {
                names: 'Nkonyane',
                surburb: [
                  {
                    name: 'Nkonyane SP',
                    ward: ['8']
                  }
                ]
              },
              {
                names: 'Nqabeni',
                surburb: [
                  {
                    name: 'Nqabeni SP',
                    ward: ['1', '9', '15', '16']
                  }
                ]
              },

              {
                names: 'Nqoleni',
                surburb: [
                  {
                    name: 'Nqoleni SP',
                    ward: ['5', '8', '12']
                  }
                ]
              },
              {
                names: 'Ntababomvu',
                surburb: [
                  {
                    name: 'Ntababomvu SP',
                    ward: ['4', '7', '9']
                  }
                ]
              },
              {
                names: 'Ntabakayishi',
                surburb: [
                  {
                    name: 'Ntabakayishi SP',
                    ward: ['8']
                  }
                ]
              },
              {
                names: 'Ntanyazulu',
                surburb: [
                  {
                    name: 'Ntanyazulu SP',
                    ward: ['1', '2']
                  }
                ]
              },
              {
                names: 'Ntuli',
                surburb: [
                  {
                    name: 'Ntuli SP',
                    ward: ['1','2', '3']
                  }
                ]
              },

              {
                names: 'Nxamalala',
                surburb: [
                  {
                    name: 'Nxamalala SP',
                    ward: ['7', '8', '10']
                  }
                ]
              },
              {
                names: 'Nzala',
                surburb: [
                  {
                    name: 'Nzala SP',
                    ward: ['5', '9', '12', '13']
                  }
                ]
              },
              {
                names: 'Nzimane',
                surburb: [
                  {
                    name: 'Nzimane SP',
                    ward: ['1', '2', '7']
                  }
                ]
              },
              {
                names: 'Ophathe',
                surburb: [
                  {
                    name: 'Ophathe SP',
                    ward: ['4', '8', '9']
                  }
                ]
              },
              {
                names: 'Othame',
                surburb: [
                  {
                    name: 'Othame SP1',
                    ward: ['14', '15']
                  },
                  {
                    name: 'Othame SP2',
                    ward: ['13','14', '15']
                  },
                  {
                    name: 'Othame SP3',
                    ward: ['5','9','13','14', '15']
                  }
                ]
              },
              {
                names: 'Othulini',
                surburb: [
                  {
                    name: 'Lwezulu',
                    ward: ['10', '11', '13']
                  },
                  {
                    name: 'Othulini SP',
                    ward: ['8', '10', '11']
                  }
                ]
              },
              {
                names: 'Phakwe',
                surburb: [
                  {
                    name: 'Phakwe SP',
                    ward: ['8', '12', '13']
                  }
                ]
              },

              {
                names: 'Phalafini',
                surburb: [
                  {
                    name: 'Phalafini SP',
                    ward: ['2', '17', '19']
                  }
                ]
              },
              {
                names: 'Pomeroy',
                surburb: [
                  {
                    name: 'Bhaza SP',
                    ward: ['2', '3', '9', '10']
                  }
                ]
              },
              {
                names: 'Sampofu',
                surburb: [
                  {
                    name: 'Sampofu SP',
                    ward: ['3', '4', '5', '14']
                  }
                ]
              },


              {
                names: 'Sikhaleni',
                surburb: [
                  {
                    name: 'Sikhaleni SP',
                    ward: ['4', '14']
                  }
                ]
              },
              {
                names: 'Sinyama',
                surburb: [
                  {
                    name: 'Sinyama SP',
                    ward: ['9']
                  }
                ]
              },
              {
                names: 'Thulini Lwezulu',
                surburb: [
                  {
                    name: 'Thulini Lwezulu SP',
                    ward: ['10', '11']
                  }
                ]
              },
              {
                names: 'Tugela Ferry',
                surburb: [
                  {
                    name: 'Tugela Ferry SP',
                    ward: ['4', '5', '14']
                  }
                ]
              },

              {
                names: 'Wolwane',
                surburb: [
                  {
                    name: 'Wolwane SP',
                    ward: ['1', '14', '15', '16']
                  }
                ]
              },
              {
                names: 'Woza',
                surburb: [
                  {
                    name: 'Woza SP',
                    ward: ['1', '18']
                  }
                ]
              },
              {
                names: 'Zenzele',
                surburb: [
                  {
                    name: 'Zenzele SP',
                    ward: ['1', '2', '19']
                  }
                ]
              }
                       
            ]
          },
          {
            name: 'Nqutu',
            city: [
              {
                names: 'Barklieside',
                surburb: [
                  {
                    name: 'Barklieside SP',
                    ward: ['5', '7']
                  }
                ]
              },
              {
                names: 'Bhekabani',
                surburb: [
                  {
                    name: 'Bhekabani SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'Bhekabantu A',
                surburb: [
                  {
                    name: 'Bhekabantu A SP',
                    ward: ['5']
                  }
                ]
              },
              {
                names: 'Bhekabantu B',
                surburb: [
                  {
                    name: 'Bhekabantu B SP',
                    ward: ['4']
                  }
                ]
              },
              {
                names: 'Bulolo',
                surburb: [
                  {
                    name: 'Bulolo SP',
                    ward: ['1', '2', '8']
                  }
                ]
              },
              {
                names: 'Driefontein',
                surburb: [
                  {
                    name: 'Driefontein SP',
                    ward: ['4']
                  }
                ]
              },
              {
                names: 'Dunudunu',
                surburb: [
                  {
                    name: 'Dunudunu SP',
                    ward: ['10']
                  }
                ]
              },
              {
                names: 'eGazahlala A',
                surburb: [
                  {
                    name: 'eGazahlala A SP',
                    ward: ['3']
                  }
                ]
              },

               {
                names: 'eGazahlala B',
                surburb: [
                  {
                    name: 'eGazahlala B SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'eGazahlala C',
                surburb: [
                  {
                    name: 'eGazahlala C SP',
                    ward: ['2', '3']
                  }
                ]
              },
              {
                names: 'eGazahlala D',
                surburb: [
                  {
                    name: 'eGazahlala D SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'eGazahlala D',
                surburb: [
                  {
                    name: 'eGazahlala D SP',
                    ward: ['2', '3']
                  }
                ]
              },
              {
                names: 'eMagogo',
                surburb: [
                  {
                    name: 'eMagogo SP',
                    ward: ['1', '2']
                  }
                ]
              },
              {
                names: 'eMhosheni',
                surburb: [
                  {
                    name: 'eMhosheni SP',
                    ward: ['1', '2']
                  }
                ]
              },
              {
                names: 'eSigqokweni',
                surburb: [
                  {
                    name: 'eSigqokweni SP',
                    ward: ['2']
                  }
                ]
              },
              {
                names: 'eSigqumeni A',
                surburb: [
                  {
                    name: 'eSigqumeni A SP',
                    ward: ['9']
                  }
                ]
              },
              {
                names: 'eSigqumeni B',
                surburb: [
                  {
                    name: 'eSigqumeni B SP',
                    ward: ['2']
                  }
                ]
              },
              {
                names: 'Excelsior',
                surburb: [
                  {
                    name: 'Excelsior SP',
                    ward: ['4']
                  }
                ]
              },
              {
                names: 'Fahlaza',
                surburb: [
                  {
                    name: 'Fahlaza SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'Frischgewaagd',
                surburb: [
                  {
                    name: 'Frischgewaagd SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'Good Hope',
                surburb: [
                  {
                    name: 'Good Hope SP',
                    ward: ['9', '11']
                  }
                ]
              },
              {
                names: 'Grazing A',
                surburb: [
                  {
                    name: 'Grazing A SP',
                    ward: ['3', '5', '8']
                  }
                ]
              },
              {
                names: 'Grazing B',
                surburb: [
                  {
                    name: 'Grazing B SP',
                    ward: ['5', '8']
                  }
                ]
              },
              {
                names: 'Grazing C',
                surburb: [
                  {
                    name: 'Grazing C SP',
                    ward: ['3', '4', '5']
                  }
                ]
              },
              {
                names: 'Haladu',
                surburb: [
                  {
                    name: 'Haladu SP',
                    ward: ['16', '17']
                  }
                ]
              },
              {
                names: 'Haladu B',
                surburb: [
                  {
                    name: 'Haladu B SP',
                    ward: ['16', '17']
                  }
                ]
              },
              {
                names: 'Hlaba Nkhosi',
                surburb: [
                  {
                    name: 'Hlaba Nkhosi SP',
                    ward: ['3', '4']
                  }
                ]
              },
              {
                names: 'Hlathi Dlamini',
                surburb: [
                  {
                    name: 'Hlathi Dlamini SP',
                    ward: ['6', '12']
                  }
                ]
              },
              {
                names: 'Hlathi Ngudulwane',
                surburb: [
                  {
                    name: 'Hlathi Ngudulwane SP',
                    ward: ['12', '13', '15']
                  }
                ]
              },
              {
                names: 'Hlazakazi A',
                surburb: [
                  {
                    name: 'Hlazakazi A SP',
                    ward: ['2']
                  }
                ]
              },
              {
                names: 'Hlazakazi B',
                surburb: [
                  {
                    name: 'Hlazakazi B SP',
                    ward: ['1', '2']
                  }
                ]
              },
              {
                names: 'Hlazakazi C',
                surburb: [
                  {
                    name: 'Hlazakazi C SP',
                    ward: ['2']
                  }
                ]
              },

              {
                names: 'Hlengile',
                surburb: [
                  {
                    name: 'Hlengile SP',
                    ward: ['3', '16']
                  }
                ]
              },
              {
                names: 'iNhlabamkhosi',
                surburb: [
                  {
                    name: 'iNhlabamkhosi SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'Jabavu',
                surburb: [
                  {
                    name: 'Jabavu SP',
                    ward: ['12', '19']
                  }
                ]
              },
              {
                names: 'Khiphinkunzi A',
                surburb: [
                  {
                    name: 'Khiphinkunzi A SP',
                    ward: ['11']
                  }
                ]
              },
              {
                names: 'Khiphinkunzi B',
                surburb: [
                  {
                    name: 'Khiphinkunzi B SP',
                    ward: ['11']
                  }
                ]
              },
              {
                names: 'KwaMbunda A',
                surburb: [
                  {
                    name: 'KwaMbunda A SP',
                    ward: ['3', '12', '17']
                  }
                ]
              },
              {
                names: 'KwaMfeka A',
                surburb: [
                  {
                    name: 'KwaMfeka A SP',
                    ward: ['1']
                  }
                ]
              },
              {
                names: 'KwaNjoko A',
                surburb: [
                  {
                    name: 'KwaNjoko A SP',
                    ward: ['9']
                  }
                ]
              },
              {
                names: 'KwaNjoko B',
                surburb: [
                  {
                    name: 'KwaNjoko B SP',
                    ward: ['9']
                  }
                ]
              },
              
              {
                names: 'KwaNyezi',
                surburb: [
                  {
                    name: 'KwaNyezi SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'KwaNyoni',
                surburb: [
                  {
                    name: 'KwaNyoni SP',
                    ward: ['9']
                  }
                ]
              },
              {
                names: 'KwaThusi',
                surburb: [
                  {
                    name: 'KwaThusi SP',
                    ward: ['9', '10']
                  }
                ]
              },

              {
                names: 'KwaVuma',
                surburb: [
                  {
                    name: 'KwaVuma SP',
                    ward: ['8']
                  }
                ]
              },

              {
                names: 'Luvisi',
                surburb: [
                  {
                    name: 'Luvisi SP',
                    ward: ['7', '11', '13', '14']
                  }
                ]
              },

              {
                names: 'Mabululwane',
                surburb: [
                  {
                    name: 'Mabululwane SP',
                    ward: ['8']
                  }
                ]
              },

              {
                names: 'Maduladula A',
                surburb: [
                  {
                    name: 'Maduladula A SP',
                    ward: ['6', '7', '8']
                  }
                ]
              },

              {
                names: 'Maduladula B',
                surburb: [
                  {
                    name: ' Maduladula B SP',
                    ward: [ '7']
                  }
                ]
              },

              {
                names: 'Mafitleng',
                surburb: [
                  {
                    name: 'Mafitleng SP',
                    ward: ['13', '15']
                  }
                ]
              },

              {
                names: 'Mafitleng A',
                surburb: [
                  {
                    name: 'Mafitleng A SP',
                    ward: ['13', '14', '15']
                  }
                ]
              },

              {
                names: 'Mafitleng B',
                surburb: [
                  {
                    name: 'Mafitleng B SP',
                    ward: ['13', '14']
                  }
                ]
              },

              {
                names: 'Magabeni A',
                surburb: [
                  {
                    name: 'Magabeni A SP',
                    ward: ['7']
                  }
                ]
              },


              {
                names: 'Magabeni B',
                surburb: [
                  {
                    name: 'Magabeni B SP',
                    ward: ['7', '8']
                  }
                ]
              },

              {
                names: 'Magabeni C',
                surburb: [
                  {
                    name: 'Magabeni C SP',
                    ward: ['7', '13']
                  }
                ]
              },

              {
                names: 'Magaga',
                surburb: [
                  {
                    name: 'Magaga SP',
                    ward: ['9']
                  }
                ]
              },

              {
                names: 'Magala',
                surburb: [
                  {
                    name: 'Magala SP',
                    ward: ['8']
                  }
                ]
              },


               {
                names: 'Magongoloza',
                surburb: [
                  {
                    name: 'Magongoloza SP',
                    ward: ['7', '8']
                  }
                ]
              },

              {
                names: 'Maguzini',
                surburb: [
                  {
                    name: 'Maguzini SP',
                    ward: ['9']
                  }
                ]
              },

              {
                names: 'Malakatha',
                surburb: [
                  {
                    name: 'Malakatha SP',
                    ward: ['1', '2', '18', '19']
                  }
                ]
              },

              {
                names: 'Manxili',
                surburb: [
                  {
                    name: 'Manxili SP',
                    ward: ['1', '2']
                  }
                ]
              },

              {
                names: 'Manyongazane',
                surburb: [
                  {
                    name: 'Manyongazane SP',
                    ward: ['6', '7']
                  }
                ]
              },

              {
                names: 'Masotsheni',
                surburb: [
                  {
                    name: 'Masotsheni SP',
                    ward: ['10', '19']
                  }
                ]
              },

              {
                names: 'Matapa',
                surburb: [
                  {
                    name: 'Matapa SP',
                    ward: ['4', '5', '13']
                  }
                ]
              },


               {
                names: 'Mathengeni',
                surburb: [
                  {
                    name: 'Mathengeni SP',
                    ward: ['1', '8']
                  }
                ]
              },

              {
                names: 'Mathutshana',
                surburb: [
                  {
                    name: 'Mathutshana SP',
                    ward: ['9', '10']
                  }
                ]
              },

              {
                names: 'Matinda',
                surburb: [
                  {
                    name: 'Matinda SP',
                    ward: ['6', '15']
                  }
                ]
              },

              {
                names: 'Mbewunye A',
                surburb: [
                  {
                    name: 'Mbewunye A SP',
                    ward: ['8']
                  }
                ]
              },

              {
                names: 'Mbewunye B',
                surburb: [
                  {
                    name: 'Mbewunye B SP',
                    ward: ['8']
                  }
                ]
              },

              {
                names: 'Mgxangala',
                surburb: [
                  {
                    name: 'Mgxangala SP',
                    ward: ['2']
                  }
                ]
              },

               {
                names: 'Mhlungwane A',
                surburb: [
                  {
                    name: 'Mhlungwane A SP',
                    ward: ['5', '6','7', '12', '14']
                  }
                ]
              },
              {
                names: 'Mhlungwane B',
                surburb: [
                  {
                    name: 'Mhlungwane B SP',
                    ward: ['7', '14']
                  }
                ]
              },

              {
                names: 'Mhlungwane C',
                surburb: [
                  {
                    name: 'Mhlungwane C SP',
                    ward: ['7']
                  }
                ]
              },

              {
                names: 'Mkhonjane A',
                surburb: [
                  {
                    name: 'Mkhonjane A SP',
                    ward: ['13', '15']
                  }
                ]
              },

              {
                names: 'Mkhonjane B',
                surburb: [
                  {
                    name: 'Mkhonjane B SP',
                    ward: ['15', '16']
                  }
                ]
              },

              {
                names: 'Mkhonjane D',
                surburb: [
                  {
                    name: 'Mkhonjane D SP',
                    ward: ['15']
                  }
                ]
              },

              {
                names: 'Mkhonjane E',
                surburb: [
                  {
                    name: 'Barklieside E SP',
                    ward: ['6', '15']
                  }
                ]
              },

              {
                names: 'Mkhonjane F',
                surburb: [
                  {
                    name: 'Mkhonjane F SP',
                    ward: ['13', '15', '16']
                  }
                ]
              },

              {
                names: 'Mnqunyeni',
                surburb: [
                  {
                    name: 'Mnqunyeni SP',
                    ward: ['9']
                  }
                ]
              },

              {
                names: 'Mpandeni',
                surburb: [
                  {
                    name: 'Mpandeni SP',
                    ward: ['9', '10']
                  }
                ]
              },
              {
                names: 'Mpukunyoni',
                surburb: [
                  {
                    name: 'Mpukunyoni SP',
                    ward: ['1']
                  }
                ]
              },
              {
                names: 'Mqhedlana',
                surburb: [
                  {
                    name: 'Mqhedlana SP',
                    ward: ['12', '13']
                  }
                ]
              },
              {
                names: 'Mvane',
                surburb: [
                  {
                    name: 'Mvane SP',
                    ward: ['1', '2']
                  }
                ]
              },
              {
                names: 'Ncepheni A',
                surburb: [
                  {
                    name: 'Ncepheni A SP',
                    ward: ['10']
                  }
                ]
              },
              {
                names: 'Ncepheni B',
                surburb: [
                  {
                    name: 'Ncepheni B SP',
                    ward: ['10']
                  }
                ]
              },
              {
                names: 'Ncepheni C',
                surburb: [
                  {
                    name: 'Ncepheni C SP',
                    ward: ['9', '10']
                  }
                ]
              },

              {
                names: 'Ndatshana',
                surburb: [
                  {
                    name: 'Ndatshana SP',
                    ward: ['6', '15', '16']
                  }
                ]
              },
              {
                names: 'Ndindindi',
                surburb: [
                  {
                    name: 'Ndindindi SP',
                    ward: ['7', '13', '15']
                  }
                ]
              },
              {
                names: 'Ngedla',
                surburb: [
                  {
                    name: 'Ngedla SP',
                    ward: ['9', '10', '11']
                  }
                ]
              },

              {
                names: 'Ngolokodo',
                surburb: [
                  {
                    name: 'Ngolokodo SP',
                    ward: ['3', '16', '17']
                  }
                ]
              },
              {
                names: 'Ngqulu',
                surburb: [
                  {
                    name: 'Ngqulu SP',
                    ward: ['1', '16', '18']
                  }
                ]
              },
              {
                names: 'Ngwebini A',
                surburb: [
                  {
                    name: 'Ngwebini A SP',
                    ward: ['9']
                  }
                ]
              },
              {
                names: 'Ngwebini B',
                surburb: [
                  {
                    name: 'Ngwebini B SP',
                    ward: ['9']
                  }
                ]
              },
              {
                names: 'Ngwebini C',
                surburb: [
                  {
                    name: 'Ngwebini C SP',
                    ward: ['9']
                  }
                ]
              },

              {
                names: 'Ngwebini D',
                surburb: [
                  {
                    name: 'Ngwebini D SP',
                    ward: ['3', '16']
                  }
                ]
              },
              {
                names: 'Ngwetshana A',
                surburb: [
                  {
                    name: 'Ngwetshana A SP',
                    ward: ['11']
                  }
                ]
              },
              {
                names: 'Ngwetshana B',
                surburb: [
                  {
                    name: 'Ngwetshana B SP',
                    ward: ['11']
                  }
                ]
              },
              {
                names: 'Nhlambamasoka A',
                surburb: [
                  {
                    name: 'Nhlambamasoka A SP',
                    ward: ['5', '12']
                  }
                ]
              },
              {
                names: 'Nhlambamasoka B',
                surburb: [
                  {
                    name: 'Nhlambamasoka B SP',
                    ward: ['5', '12']
                  }
                ]
              },
              {
                names: 'Nhlambamasoka C',
                surburb: [
                  {
                    name: 'Nhlambamasoka C SP',
                    ward: ['5']
                  }
                ]
              },
              {
                names: 'Nhloya',
                surburb: [
                  {
                    name: 'Nhloya SP',
                    ward: ['10']
                  }
                ]
              },
              {
                names: 'Nkabane',
                surburb: [
                  {
                    name: 'Nkabane SP',
                    ward: ['1', '2']
                  }
                ]
              },
              {
                names: 'Nkanda',
                surburb: [
                  {
                    name: 'Nkanda SP',
                    ward: ['16', '17']
                  }
                ]
              },

              {
                names: 'Nkandle',
                surburb: [
                  {
                    name: 'Nkandle SP',
                    ward: ['12', '17', '20']
                  }
                ]
              },
              {
                names: 'Nondweni A',
                surburb: [
                  {
                    name: 'Nondweni A SP',
                    ward: ['5', '6']
                  }
                ]
              },
              {
                names: 'Nondweni B',
                surburb: [
                  {
                    name: 'Nondweni B SP',
                    ward: ['5']
                  }
                ]
              },
              {
                names: 'Nondweni C',
                surburb: [
                  {
                    name: 'Nondweni C SP',
                    ward: ['5', '6', '8']
                  }
                ]
              },
              {
                names: 'Nqutu',
                surburb: [
                  {
                    name: 'Nqutu SP',
                    ward: ['7', '8', '11', '14']
                  }
                ]
              },
              {
                names: 'Nqutu NU',
                surburb: [
                  {
                    name: 'Nqutu NU',
                    ward: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16','17', '18', '19']
                  }
                ]
              },
              {
                names: 'Nsubeni',
                surburb: [
                  {
                    name: 'Nsubeni SP',
                    ward: ['4', '13', '16']
                  }
                ]
              },

              {
                names: 'Ntababomvu A',
                surburb: [
                  {
                    name: 'Ntababomvu A SP',
                    ward: ['9', '11']
                  }
                ]
              },
              {
                names: 'Ntababomvu B',
                surburb: [
                  {
                    name: 'Ntababomvu B SP',
                    ward: ['4', '5', '12', '13']
                  }
                ]
              },
              {
                names: 'Ntababomvu',
                surburb: [
                  {
                    name: 'Ntababomvu SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'Ntanyandlovu A',
                surburb: [
                  {
                    name: 'Ntanyandlovu A SP',
                    ward: ['9']
                  }
                ]
              },
              {
                names: 'Ntanyandlovu B',
                surburb: [
                  {
                    name: 'Ntanyandlovu B SP',
                    ward: ['11']
                  }
                ]
              },
              {
                names: 'Ntanyandlovu C',
                surburb: [
                  {
                    name: 'Ntanyandlovu C SP',
                    ward: ['11']
                  }
                ]
              },
              {
                names: 'Ntanyandlovu D',
                surburb: [
                  {
                    name: 'Barklieside SP',
                    ward: ['10', '11']
                  }
                ]
              },
              {
                names: 'Ntanyandlovu E',
                surburb: [
                  {
                    name: 'Ntanyandlovu E SP',
                    ward: ['10', '11']
                  }
                ]
              },
              {
                names: 'Ntanyandlovu F',
                surburb: [
                  {
                    name: 'Ntanyandlovu F SP',
                    ward: ['9', '11']
                  }
                ]
              },

              {
                names: 'Ntanyeni',
                surburb: [
                  {
                    name: 'Ntanyeni SP',
                    ward: ['1', '2']
                  }
                ]
              },
              {
                names: 'Ogazini',
                surburb: [
                  {
                    name: 'Ogazini SP',
                    ward: ['4']
                  }
                ]
              },
              {
                names: 'Ohaleni',
                surburb: [
                  {
                    name: 'Ohaleni SP',
                    ward: ['8']
                  }
                ]
              },
              {
                names: 'Othaka',
                surburb: [
                  {
                    name: 'Othaka SP',
                    ward: ['6', '7']
                  }
                ]
              },
              {
                names: 'Patsoana A',
                surburb: [
                  {
                    name: 'Patsoana A SP',
                    ward: ['5', '8']
                  }
                ]
              },
              {
                names: 'Patsoana B',
                surburb: [
                  {
                    name: 'Patsoana B SP',
                    ward: ['6', '7', '8']
                }
                ]
              },

              {
                names: 'Patsoana C',
                surburb: [
                  {
                    name: 'Patsoana C SP',
                    ward: ['8']
                  }
                ]
              },
              {
                names: 'Qhudeni',
                surburb: [
                  {
                    name: 'Qhudeni SP',
                    ward: ['1', '8']
                  }
                ]
              },
              {
                names: 'Qwabe',
                surburb: [
                  {
                    name: 'Qwabe SP',
                    ward: ['2', '3']
                  }
                ]
              },
              {
                names: 'Seven',
                surburb: [
                  {
                    name: 'Seven SP',
                    ward: ['3', '4', '16']
                  }
                ]
              },
              {
                names: 'Shayanyawo A',
                surburb: [
                  {
                    name: 'Shayanyawo A SP',
                    ward: ['1']
                  }
                ]
              },
              {
                names: 'Shayanyawo B',
                surburb: [
                  {
                    name: 'Shayanyawo B SP',
                    ward: ['1']
                  }
                ]
              },
              {
                names: 'Sigqobheleni',
                surburb: [
                  {
                    name: 'Sigqobheleni SP',
                    ward: ['4', '5']
                  }
                ]
              },
              {
                names: 'Silutshana A',
                surburb: [
                  {
                    name: 'Silutshana A SP',
                    ward: ['2']
                  }
                ]
              },
               {
                names: 'Silutshana B',
                surburb: [
                  {
                    name: 'Silutshana B SP',
                    ward: ['2']
                  }
                ]
              },
              {
                names: 'St Mathews',
                surburb: [
                  {
                    name: 'St Mathews SP',
                    ward: ['12', '17']
                  }
                ]
              },
              {
                names: 'Straalfontein',
                surburb: [
                  {
                    name: 'Straalfontein SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'Sunrise',
                surburb: [
                  {
                    name: 'Sunrise SP',
                    ward: ['9', '11']
                  }
                ]
              }, {
                names: 'Thelezini',
                surburb: [
                  {
                    name: 'Thelezini SP',
                    ward: ['15', '16']
                  }
                ]
              }, {
                names: 'Vryheid A',
                surburb: [
                  {
                    name: 'Vryheid A SP',
                    ward: ['4', '13']
                  }
                ]
              },
               {
                names: 'Vryheid B',
                surburb: [
                  {
                    name: 'Vryheid B SP',
                    ward: ['4', '13']
                  }
                ]
              },
              {
                names: 'Vumankala',
                surburb: [
                  {
                    name: 'Vumankala SP',
                    ward: ['5']
                  }
                ]
              },
              {
                names: 'Witkop',
                surburb: [
                  {
                    name: 'Witkop SP',
                    ward: ['5']
                  }
                ]
              },

            ]
          },
          {
            name: 'Umvoti',
            city: [
              {
                names: 'Broedershoek',
                surburb: [
                  {
                    name: 'Broedershoek SP',
                    ward: ['5']
                  }
                ]
              },
              {
                names: 'Dayingubo',
                surburb: [
                  {
                    name: 'Dayingubo SP',
                    ward: ['1', '4', '5', '11']
                  }
                ]
              },
              {
                names: 'Emakhabeleni',
                surburb: [
                  {
                    name: 'Emakhabeleni SP',
                    ward: ['6']
                  }
                ]
              },
              {
                names: 'Enhlalakahle',
                surburb: [
                  {
                    name: 'eMahlalakahle',
                    ward: ['7', '10']
                  },
                  {
                    name: 'France',
                    ward: ['7']
                  }
                ]
              },
              {
                names: 'Eshane',
                surburb: [
                  {
                    name: 'Eshane SP',
                    ward: ['2', '4']
                  }
                ]
              },
              {
                names: 'Greytown',
                surburb: [
                  {
                    name: 'Greytown SP',
                    ward: ['7', '9', '10', '11']
                  }
                ]
              },
              {
                names: 'Kranskop',
                surburb: [
                  {
                    name: 'Kranskop Ext 2',
                    ward: ['5']
                  },
                  {
                    name: 'Kranskop Ext 3',
                    ward: ['5']
                  },
                  {
                    name: 'Kranskop SP',
                    ward: ['5']
                  }
                ]
              },
              {
                names: 'KwaZiba',
                surburb: [
                  {
                    name: 'KwaZiba SP',
                    ward: ['2', '3', '4']
                  }
                ]
              },
              {
                names: 'Lindelani',
                surburb: [
                  {
                    name: 'Lindelani SP',
                    ward: ['7', '9', '10']
                  }
                ]
              },
              {
                names: 'Lootshoek',
                surburb: [
                  {
                    name: 'Lootshoek SP',
                    ward: ['4','5']
                  }
                ]
              },
              {
                names: 'Maghobe',
                surburb: [
                  {
                    name: 'Maghobe SP',
                    ward: ['6', '13']
                  }
                ]
              },
              {
                names: 'Matimatolo',
                surburb: [
                  {
                    name: 'Matimatolo SP',
                    ward: ['5']
                  }
                ]
              },


              {
                names: 'Mdlelanto',
                surburb: [
                  {
                    name: 'Mdlelanto SP',
                    ward: ['2', '3', '4']
                  }
                ]
              },
              {
                names: 'Mgome',
                surburb: [
                  {
                    name: 'Mgome SP',
                    ward: ['8']
                  }
                ]
              },
              {
                names: 'Mgovu',
                surburb: [
                  {
                    name: 'Mgovu SP',
                    ward: ['8']
                  }
                ]
              },
              {
                names: 'Mhlangandlovu',
                surburb: [
                  {
                    name: 'Mhlangandlovu SP',
                    ward: ['1', '3', '4']
                  }
                ]
              },
              {
                names: 'Mkhize',
                surburb: [
                  {
                    name: 'Mkhize SP',
                    ward: ['1', '4', '6']
                  }
                ]
              },
              {
                names: 'Mpanza',
                surburb: [
                  {
                    name: 'Mpanza SP',
                    ward: ['8', '11', '13']
                  }
                ]
              },
               {
                names: 'Mudeni',
                surburb: [
                  {
                    name: 'Mudeni SP',
                    ward: ['4', '8', '9', '11']
                  }
                ]
              },
              {
                names: 'Mvoti',
                surburb: [
                  {
                    name: 'Mvoti SP',
                    ward: ['3', '4', '10']
                  }
                ]
              }, {
                names: 'Ndimakude',
                surburb: [
                  {
                    name: 'Ndimakude SP',
                    ward: ['6']
                  }
                ]
              },

               {
                names: 'Ndundumene',
                surburb: [
                  {
                    name: 'Ndundumene SP',
                    ward: ['6', '13']
                  }
                ]
              },
              {
                names: 'Ngwempisi',
                surburb: [
                  {
                    name: 'Ngwempisi SP',
                    ward: ['1', '4', '6', '11']
                  }
                ]
              },
              {
                names: 'Nietgedocht',
                surburb: [
                  {
                    name: 'Nietgedocht SP',
                    ward: ['8', '9']
                  }
                ]
              },
              {
                names: 'Ningisa',
                surburb: [
                  {
                    name: 'Ningisa SP',
                    ward: ['5', '9']
                  }
                ]
              },
              {
                names: 'Njengabantu',
                surburb: [
                  {
                    name: 'Njengabantu SP',
                    ward: ['1', '3']
                  }
                ]
              },
              {
                names: 'Ntuthela',
                surburb: [
                  {
                    name: 'Ntuthela SP',
                    ward: ['1', '6']
                  }
                ]
              },
              {
                names: 'Ophofini',
                surburb: [
                  {
                    name: 'Ophofini SP',
                    ward: ['1', '2', '6', '13']
                  }
                ]
              },
              {
                names: 'Perseverance',
                surburb: [
                  {
                    name: 'Perseverance SP',
                    ward: ['4', '7']
                  }
                ]
              },
              {
                names: 'Sangweni',
                surburb: [
                  {
                    name: 'Sangweni SP',
                    ward: ['2', '4']
                  }
                ]
              },
              {
                names: 'Sibuyane',
                surburb: [
                  {
                    name: 'Sibuyane SP',
                    ward: ['6', '13']
                  }
                ]
              },
              {
                names: 'Sokheni',
                surburb: [
                  {
                    name: 'Sokheni SP',
                    ward: ['5', '6']
                  }
                ]
              },
              {
                names: 'Thulwini',
                surburb: [
                  {
                    name: 'Thulwini SP',
                    ward: ['4', '5', '6']
                  }
                ]
              },
               {
                names: 'Tongwe/Dakeni',
                surburb: [
                  {
                    name: 'Tongwe/Dakeni SP',
                    ward: ['5', '6']
                  }
                ]
              },
              {
                names: 'uMvoti',
                surburb: [
                  {
                    name: 'uMvoti SP',
                    ward: ['3', '4']
                  }
                ]
              },
              {
                names: 'uMvoti NU',
                surburb: [
                  {
                    name: 'uMvoti NU SP',
                    ward: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']
                  }
                ]
              },
              {
                names: 'Vaalkrans',
                surburb: [
                  {
                    name: 'Vaalkrans SP',
                    ward: ['4', '11']
                  }
                ]
              },
              {
                names: 'Vukaphanzi',
                surburb: [
                  {
                    name: 'Vukaphanzi SP',
                    ward: ['6', '12', '13']
                  }
                ]
              },
               {
                names: 'Ziba',
                surburb: [
                  {
                    name: 'Ziba SP',
                    ward: ['1', '2', '3', '4', '6']
                  }
                ]
              }
            
            ]
          }
        ]
        },
        
        {
          name: 'uThukela',
          municipality: [
            {
              name: 'Emnambithi/Ladysmith',
              city: [
                {
                  names: 'Bester',
                  surburb: [
                    {
                      name: 'Bester',
                      ward:['26']
                    }
                  ]
                },
                {
                  names: 'Blue Bank',
                  surburb: [
                    {
                      name: 'Blue Bank SP',
                      ward:['26']
                    }
                  ]
                },
                {
                  names: 'Brakfontein',
                  surburb: [
                    {
                      name: 'Brakfontein SP',
                      ward:['4', '5', '6', '7', '8', '20']
                    }
                  ]
                },
                {
                  names: 'Burford',
                  surburb: [
                    {
                      name: 'Burford',
                      ward:['14', '15', '16']
                    }
                  ]
                },
                {
                  names: 'Calenso',
                  surburb: [
                    {
                      name: 'Calenso SP',
                      ward:['8','25']
                    }
                  ]
                },
                {
                  names: 'Doornhoek',
                  surburb: [
                    {
                      name: 'Doornhoek SP',
                      ward:['17','19', '26']
                    }
                  ]
                },
                {
                  names: 'Doornkloof',
                  surburb: [
                    {
                      name: 'Doornkloof SP',
                      ward:['1','2', '4', '5', '7', '8', '14']
                    }
                  ]
                },
                {
                  names: 'Driefontein',
                  surburb: [
                    {
                      name: 'Driefontein SP',
                      ward:['17','18', '19', '26']
                    }
                  ]
                },
                {
                  names: 'Emnambithi/Ladysmith NU',
                  surburb: [
                    {
                      name: 'Emnambithi/Ladysmith NU',
                      ward:['1','5', '6', '7', '8', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27']
                    }
                  ]
                },
                {
                  names: 'Ezakheni',
                  surburb: [
                    {
                      name: 'Ezakheni A',
                      ward:['1','2', '3', '7']
                    },
                    {
                      name: 'Ezakheni B',
                      ward:['1','2', '3', '20']
                    },
                    {
                      name: 'Ezakheni C',
                      ward:['1', '3', '4', '5', '6', '20']
                    },
                    {
                      name: 'Ezakheni D',
                      ward:['1','2', '3', '4','7']
                    },
                    {
                      name: 'Ezakheni E',
                      ward:['4','6', '8', '20']
                    },
                    {
                      name: 'Ezakheni SP',
                      ward:['2','3', '5','6' ,'7', '9', '14', '20', '21', '27']
                    }
                  ]
                },
                {
                  names: 'Graythorne',
                  surburb: [
                    {
                      name: 'Graythorne SP',
                      ward:['6','8', '20', '27']
                    }
                  ]
                },
                {
                  names: 'Hobsland',
                  surburb: [
                    {
                      name: 'Hobsland SP',
                      ward:['14','15', '26']
                    }
                  ]
                },
                {
                  names: 'Kirkintulloch',
                  surburb: [
                    {
                      name: 'Kirkintulloch SP',
                      ward:['15','16', '26']
                    }
                  ]
                },
                {
                  names: 'Kleinfontein',
                  surburb: [
                    {
                      name: 'Kleinfontein SP',
                      ward:['18','19', '26']
                    }
                  ]
                },
                {
                  names: 'Klipfontein',
                  surburb: [
                    {
                      name: 'Klipfontein SP',
                      ward:['14']
                    }
                  ]
                },
                {
                  names: 'Ladysmith',
                  surburb: [
                    {
                      name: 'Acaciavale',
                      ward:['10','20', '25']
                    },
                    {
                      name: 'Aloe Park ',
                      ward:['10','11','25']
                    },
                    {
                      name: 'Egerton',
                      ward:['11','12', '22']
                    },
                    {
                      name: 'Hillside',
                      ward:['10','11']
                    },
                    {
                      name: 'Hospital Park',
                      ward:['11','12']
                    },
                    {
                      name: 'Hyde Park',
                      ward:['12','14', '22']
                    },
                    {
                      name: 'Ladysmith Central',
                      ward:['10','11', '12', '21', '22']
                    },
                    {
                      name: 'Ladysmith SPA',
                      ward:['9','10', '12', '14', '20', '21', '22', '27']
                    },
                    {
                      name: 'Ladysmith SPB',
                      ward:['11','12', '25', '26']
                    },
                    {
                      name: 'Leanardsville',
                      ward:['10','12']
                    },
                    {
                      name: 'Limit Hill',
                      ward:['21','22']
                    },
                    {
                      name: 'Lynwood Park',
                      ward:['14','22']
                    },
                    {
                      name: 'Model Kloof',
                      ward:['14','22']
                    },
                    {
                      name: 'Nambiti',
                      ward:['10','20']
                    },
                    {
                      name: 'Observation Hill',
                      ward:['12','14', '22', '26']
                    },
                    {
                      name: 'Resevoir Hill',
                      ward:['11','12', '22', '26']
                    },
                    {
                      name: 'Rose Park',
                      ward:['10','11', '12']
                    },
                    {
                      name: 'Steadville',
                      ward:['9','10', '20', '21', '27']
                    },
                    {
                      name: 'Van Riebeeck Park',
                      ward:['11','12']
                    }
                  ]
                },
                {
                  names: 'Lusitania',
                  surburb: [
                    {
                      name: 'Lusitania SP',
                      ward:['24']
                    }
                  ]
                },
                {
                  names: 'Matiwane',
                  surburb: [
                    {
                      name: 'Matiwane SP',
                      ward:['14','23', '24']
                    }
                  ]
                },
                {
                  names: 'Nkunzi',
                  surburb: [
                    {
                      name: 'Nkunzi SP',
                      ward:['1','6','24']
                    }
                  ]
                },
                {
                  names: 'PeaceTown',
                  surburb: [
                    {
                      name: 'PeaceTown SP',
                      ward:['14','15', '16', '26']
                    }
                  ]
                },
                {
                  names: 'Randjieslaagte',
                  surburb: [
                    {
                      name: 'Randjieslaagte SP',
                      ward:['19']
                    }
                  ]
                },
                {
                  names: 'Roosboom',
                  surburb: [
                    {
                      name: 'Meadows',
                      ward:['13']
                    },
                    {
                      name: 'Roosboom SP',
                      ward:['13', '25']
                    }
                  ]
                },

                {
                  names: 'Umbulwana',
                  surburb: [
                    {
                      name: 'Umbulwana SP',
                      ward:['8', '20','25']
                    }
                  ]
                },
                {
                  names: 'Watershed',
                  surburb: [
                    {
                      name: 'Watershed A',
                      ward:['17','18', '19', '26']
                    }
                  ]
                },
                {
                  names: 'Watersmeet',
                  surburb: [
                    {
                      name: 'Watersmeet SP',
                      ward:['14','15', '16', '17', '18', '26']
                    }
                  ]
                },
   
              ]
            },
            {
              name: 'Imbabazane',
              city: [
                {
                  names: 'Bekabhezayo',
                  surburb: [
                    {
                      name: 'Bekabhezayo SP',
                      ward: ['3', '4']
                    }
                  ]
                },
                {
                  names: 'Bhekuzulu',
                  surburb: [
                    {
                      name: 'Bhekuzulu SP',
                      ward: ['5', '10', '12', '13']
                    }
                  ]
                },
                {
                  names: 'Boschi',
                  surburb: [
                    {
                      name: 'Boschi SP',
                      ward: ['3', '7']
                    }
                  ]
                },
                {
                  names: 'Edashi',
                  surburb: [
                    {
                      name: 'Edashi SP',
                      ward: ['4']
                    }
                  ]
                },
                {
                  names: 'Edodoci',
                  surburb: [
                    {
                      name: 'Edodoci SP',
                      ward: ['2']
                    }
                  ]
                },
                {
                  names: 'Emadolobwe',
                  surburb: [
                    {
                      name: 'Emadolobwe SP',
                      ward: ['8', '9', '14']
                    }
                  ]
                },
                {
                  names: 'Emahendeni',
                  surburb: [
                    {
                      name: 'Emahendeni SP',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'Emahlatshuni',
                  surburb: [
                    {
                      name: 'Emahlatshuni SP',
                      ward: ['2']
                    }
                  ]
                },
                {
                  names: 'Emakhekheni',
                  surburb: [
                    {
                      name: 'Emakhekheni SP',
                      ward: ['8', '9']
                    }
                  ]
                },
                {
                  names: 'Emandabeni',
                  surburb: [
                    {
                      name: 'Emandabeni SP',
                      ward: ['8', '9', '10', '14']
                    }
                  ]
                },
                {
                  names: 'Emawuza',
                  surburb: [
                    {
                      name: 'Emawuza SP',
                      ward: ['2']
                    }
                  ]
                },
                {
                  names: 'Emdwebu',
                  surburb: [
                    {
                      name: 'Emdwebu SP',
                      ward: ['3', '4', '5', '6']
                    }
                  ]
                },
                {
                  names: 'Emhlabathini',
                  surburb: [
                    {
                      name: 'Emhlabathini SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Emhubeni',
                  surburb: [
                    {
                      name: 'Emhubeni SP',
                      ward: ['1','3', '7']
                    }
                  ]
                },
                {
                  names: 'Emnyangweni',
                  surburb: [
                    {
                      name: 'Emnyangweni SP',
                      ward: ['8', '9', '10']
                    }
                  ]
                },
                {
                  names: 'Emoyeni',
                  surburb: [
                    {
                      name: 'Emoyeni SP',
                      ward: ['9', '10', '14']
                    }
                  ]
                },
                {
                  names: 'Empangweni',
                  surburb: [
                    {
                      name: 'Empangweni SP',
                      ward: ['13']
                    }
                  ]
                },
                {
                  names: 'Engodini',
                  surburb: [
                    {
                      name: 'Engodini SP',
                      ward: ['8']
                    }
                  ]
                },
                {
                  names: 'Engonyameni',
                  surburb: [
                    {
                      name: 'Engonyameni SP',
                      ward: ['10', '11', '12']
                    }
                  ]
                },
                {
                  names: 'Enyokeni',
                  surburb: [
                    {
                      name: 'Enyokeni SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Etatane',
                  surburb: [
                    {
                      name: 'Etatane SP1',
                      ward: ['10', '11', '12']
                    },
                    {
                      name: 'Etatane SP2',
                      ward: ['1', '12']
                    }
                  ]
                },
                {
                  names: 'Eyosini',
                  surburb: [
                    {
                      name: 'Eyosini SP',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'Ezidongeni',
                  surburb: [
                    {
                      name: 'Ezidongeni SP',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'Ezinyosini',
                  surburb: [
                    {
                      name: 'Ezinyosini SP',
                      ward: ['3', '4']
                    }
                  ]
                },
                {
                  names: 'Good Home',
                  surburb: [
                    {
                      name: 'Good Home SP',
                      ward: ['4', '5']
                    }
                  ]
                },
                {
                  names: 'Imbabazane NU',
                  surburb: [
                    {
                      name: 'Imbabazane NU',
                      ward: ['1', '2', '3', '4', '5', '6', '7', '8', '10', '11', '12', '13', '14']
                    }
                  ]
                },
                {
                  names: 'KwaMkhize',
                  surburb: [
                    {
                      name: 'KwaMkhize SP1',
                      ward: ['1']
                    },
                    {
                      name: 'KwaMkhize SP2',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'KwaNdaba',
                  surburb: [
                    {
                      name: 'KwaNdaba SP',
                      ward: ['1', '2', '3']
                    }
                  ]
                },
                {
                  names: 'KwaSobabili',
                  surburb: [
                    {
                      name: 'KwaSobabili SP',
                      ward: ['5', '6']
                    }
                  ]
                },
                {
                  names: 'Lochsloy A',
                  surburb: [
                    {
                      name: 'Lochsloy A SP',
                      ward: ['6', '7']
                    }
                  ]
                },
                {
                  names: 'Manjokweni',
                  surburb: [
                    {
                      name: 'Manjokweni SP',
                      ward: ['2']
                    }
                  ]
                },
                {
                  names: 'Maqabaqabeni',
                  surburb: [
                    {
                      name: 'Maqabaqabeni SP',
                      ward: ['10', '11', '14']
                    }
                  ]
                },
                {
                  names: 'Mbelekwane',
                  surburb: [
                    {
                      name: 'Mbelekwane SP',
                      ward: ['9', '10']
                    }
                  ]
                },


                {
                  names: 'Mfolozi',
                  surburb: [
                    {
                      name: 'Mfolozi SP',
                      ward: ['9', '10', '11', '14']
                    }
                  ]
                },
                {
                  names: 'Mhlungwini',
                  surburb: [
                    {
                      name: 'Mhlungwini SP',
                      ward: ['4', '5', '6']
                    }
                  ]
                },
                {
                  names: 'Mnungwini',
                  surburb: [
                    {
                      name: 'Mnungwini SP',
                      ward: ['3', '4']
                    }
                  ]
                },
                {
                  names: 'Mqedandaba',
                  surburb: [
                    {
                      name: 'Mqedandaba SP',
                      ward: ['11', '12']
                    }
                  ]
                },
                {
                  names: 'Nkomokazini',
                  surburb: [
                    {
                      name: 'Nkomokazini SP',
                      ward: ['9', '10']
                    }
                  ]
                },
                {
                  names: 'Ruins',
                  surburb: [
                    {
                      name: 'Ruins SP',
                      ward: ['1']
                    }
                  ]
                },

                {
                  names: 'Shayamoya',
                  surburb: [
                    {
                      name: 'Shayamoya SP',
                      ward: ['3', '4', '6', '7']
                    }
                  ]
                },
                {
                  names: 'Southworld',
                  surburb: [
                    {
                      name: 'Southworld C',
                      ward: ['1', '2', '6', '7']
                    }
                  ]
                },
                {
                  names: 'Wembesi A',
                  surburb: [
                    {
                      name: 'Wembesi A SP',
                      ward: ['1', '7']
                    }
                  ]
                },
                {
                  names: 'Zwelisha',
                  surburb: [
                    {
                      name: 'Zwelisha SP',
                      ward: ['6']
                    }
                  ]
                }             
              ]
            },
            {
              name: 'Indaka',
              city: [
                {
                  names: 'Dalakosi',
                  surburb: [
                    {
                      name: 'Dalakosi SP',
                      ward: ['4', '6', '7']
                    }
                  ]
                },
                {
                  names: 'Dival',
                  surburb: [
                    {
                      name: 'Dival SP',
                      ward: ['2', '19']
                    }
                  ]
                },
                {
                  names: 'Doornkraal',
                  surburb: [
                    {
                      name: 'Doornkraal SP',
                      ward: ['7', '8', '14']
                    },
                    {
                      name: 'Ingwe',
                      ward: ['8']
                    }
                  ]
                },
                {
                  names: 'Ecancane',
                  surburb: [
                    {
                      name: 'Ecancane SP',
                      ward: ['8']
                    }
                  ]
                },
                {
                  names: 'Ekuvukeni',
                  surburb: [
                    {
                      name: 'Ekuvukeni SP',
                      ward: ['5', '6']
                    }
                  ]
                },
                {
                  names: 'Entabeni',
                  surburb: [
                    {
                      name: 'Uitval Closer Settlement',
                      ward: ['1', '2', '3']
                    }
                  ]
                },
                {
                  names: 'Ezihlabathini',
                  surburb: [
                    {
                      name: 'Ezihlabathini SP',
                      ward: ['1', '2']
                    }
                  ]
                },
                {
                  names: 'Glencoe',
                  surburb: [
                    {
                      name: 'Glencoe SP',
                      ward: ['1', '3', '4', '6', '24']
                    }
                  ]
                },
                {
                  names: 'Gominakadani',
                  surburb: [
                    {
                      name: 'Gominakadani SP',
                      ward: ['8']
                    }
                  ]
                },
                {
                  names: 'Hwebede',
                  surburb: [
                    {
                      name: 'Hwebede SP',
                      ward: ['1', '7']
                    }
                  ]
                },
                {
                  names: 'Imbangi',
                  surburb: [
                    {
                      name: 'Imbangi SP',
                      ward: ['4', '7']
                    }
                  ]
                },
                {
                  names: 'Indaka',
                  surburb: [
                    {
                      name: 'Amagodlanduku',
                      ward: ['7', '8', '9']
                    },
                    {
                      name: 'Gcinalishane A',
                      ward: ['7', '9']
                    },
                    {
                      name: 'Gcinalishane B',
                      ward: ['3', '6', '9', '10']
                    },
                    {
                      name: 'Somshoek',
                      ward: ['1', '4', '7']
                    }
                  ]
                },
                {
                  names: 'Indaka NU',
                  surburb: [
                    {
                      name: 'Indaka NU ',
                      ward: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '14','19', '24']
                    }
                  ]
                },
                {
                  names: 'Ingedlengedle',
                  surburb: [
                    {
                      name: 'Ingedlengedle SP',
                      ward: ['7']
                    }
                  ]
                },
                {
                  names: 'Ingwe',
                  surburb: [
                    {
                      name: 'Amahlabathi',
                      ward: ['2', '7', '9']
                    },
                    {
                      name: 'Far View',
                      ward: ['1', '7']
                    },
                    {
                      name: 'Ingwe SP',
                      ward: ['6', '8']
                    },
                    {
                      name: 'Paarde Voet Pad',
                      ward: ['8']
                    },
                    {
                      name: 'Potsdam',
                      ward: ['8']
                    },
                  ]
                },
                {
                  names: 'Kloprivier',
                  surburb: [
                    {
                      name: 'Kloprivier SP',
                      ward: ['1']
                    },
                    {
                      name: 'Mchunu ',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Mabaso',
                  surburb: [
                    {
                      name: 'Fitty Park',
                      ward: ['6', '7', '8']
                    },
                    {
                      name: 'Wintershoek',
                      ward: ['6', '7', '8']
                    },
                    {
                      name: 'Wittekleifontein',
                      ward: ['7', '8', '9']
                    }
                  ]
                },
                {
                  names: 'Madlala',
                  surburb: [
                    {
                      name: 'Madlala SP',
                      ward: ['3', '4', '5']
                    }
                  ]
                },
                {
                  names: 'Mchunu',
                  surburb: [
                    {
                      name: 'Dumbe',
                      ward: ['1', '19']
                    },
                    {
                      name: 'Etholeni',
                      ward: ['2', '3', '4', '19']
                    },
                    {
                      name: 'Klippoort',
                      ward: ['2', '3', '4']
                    },
                    {
                      name: 'Limehill',
                      ward: ['2', '3']
                    }
                  ]
                },
                {
                  names: 'Mhlumlayo',
                  surburb: [
                    {
                      name: 'Mhlumlayo SP',
                      ward: ['4', '6', '7']
                    }
                  ]
                },
                {
                  names: 'Mhlwazi',
                  surburb: [
                    {
                      name: 'Mhlwazi SP',
                      ward: ['1', '2', '7', '9']
                    }
                  ]
                },
                {
                  names: 'Mjinti',
                  surburb: [
                    {
                      name: 'Mjinti SP',
                      ward: ['8', '9']
                    }
                  ]
                },
                {
                  names: 'Mthembu',
                  surburb: [
                    {
                      name: 'Kokwane',
                      ward: ['5', '9', '10']
                    },
                    {
                      name: 'Langa',
                      ward: ['5', '6','9', '10']
                    },
                    {
                      name: 'Makhanya',
                      ward: ['5', '8']
                    },
                    {
                      name: 'Masemesma',
                      ward: ['9', '10']
                    },
                    {
                      name: 'Mbango',
                      ward: ['5','10']
                    },
                    {
                      name: 'Mthembu SP',
                      ward: ['6', '7','9', '10']
                    },
                    {
                      name: 'Nogayizivele',
                      ward: ['8', '9']
                    },
                    {
                      name: 'Olubomvu',
                      ward: ['5', '8']
                    },
                    {
                      name: 'Opmerksaamheid',
                      ward: ['6', '8', '14']
                    },
                    {
                      name: 'The Ravine',
                      ward: ['5', '10']
                    },
                    {
                      name: 'Tugela Estates',
                      ward: ['5','10']
                    },
                    {
                      name: 'Waayhoek',
                      ward: ['6', '7', '8']
                    },
                    {
                      name: 'Zamazema',
                      ward: ['10']
                    }
                    
                  ]
                },
                {
                  names: 'Mziyanke',
                  surburb: [
                    {
                      name: 'Mziyanke SP',
                      ward: ['8']
                    }
                  ]
                },
                {
                  names: 'Namakazi',
                  surburb: [
                    {
                      name: 'Namakazi SP',
                      ward: ['1', '4', '5']
                    }
                  ]
                },
                {
                  names: 'Ndaka',
                  surburb: [
                    {
                      name: 'Ndaka SP',
                      ward: ['9']
                    }
                  ]
                },
                {
                  names: 'Niekerskraal',
                  surburb: [
                    {
                      name: 'Niekerskraal SP',
                      ward: [ '6', '24']
                    }
                  ]
                },
                {
                  names: 'Nkngala',
                  surburb: [
                    {
                      name: 'Buli',
                      ward: ['8', '9']
                    }
                  ]
                },
                {
                  names: 'Nxumalo',
                  surburb: [
                    {
                      name: 'Asynkraal',
                      ward: ['4','7']
                    }
                  ]
                },
                {
                  names: 'Oqungweni',
                  surburb: [
                    {
                      name: 'Oqungweni SP',
                      ward: ['2', '9']
                    }
                  ]
                },
                {
                  names: 'Pearl',
                  surburb: [
                    {
                      name: 'Pearl A SP',
                      ward: ['7', '8']
                    },
                    {
                      name: 'Pearl B SP',
                      ward: [ '8']
                    }
                  ]
                },
                {
                  names: 'Sgweje',
                  surburb: [
                    {
                      name: 'Entabeni ',
                      ward: ['1', '2', '4']
                    },
                    {
                      name: 'Sgweje SP',
                      ward: ['1', '4']
                    }
                  ]
                },
                {
                  names: "Tenten's Kraal",
                  surburb: [
                    {
                      name: "Tenten's Kraal SP",
                      ward: ['8', '9']
                    }
                  ]
                },
                {
                  names: 'Uitvlugt',
                  surburb: [
                    {
                      name: 'Uitvlugt SP',
                      ward: ['3', '4', '5', '6']
                    }
                  ]
                },
                {
                  names: 'Umhlumayo',
                  surburb: [
                    {
                      name: 'Umhlumayo SP',
                      ward: ['9']
                    }
                  ]
                },
                {
                  names: 'Vaalkop',
                  surburb: [
                    {
                      name: 'Amakasi',
                      ward: ['1', '2', '3', '4', '5']
                    },
                    {
                      name: 'Vaalkop SP',
                      ward: ['1', '2', '4']
                    }
                  ]
                },
                {
                  names: 'Vreemdeburg',
                  surburb: [
                    {
                      name: 'Mthembu',
                      ward: ['9']
                    },
                    {
                      name: 'Vreemdeburg SP',
                      ward: ['9']
                    }
                  ]
                },
                {
                  names: 'Waayhoek',
                  surburb: [
                    {
                      name: 'Waayhoek SP',
                      ward: ['6']
                    }
                  ]
                },
                {
                  names: 'Zamokuhle',
                  surburb: [
                    {
                      name: 'Zamokuhle SP',
                      ward: ['8']
                    }
                  ]
                },
                {
                  names: 'Zondagsrivierspoort',
                  surburb: [
                    {
                      name: 'Zondagsrivierspoort SP',
                      ward: ['7', '8']
                    }
                  ]
                },

              ]
            },
            {
              name: 'Okhahlamba',
              city: [
                {
                  names: 'Action Homes',
                  surburb: [
                    {
                      name: 'Action Homes SP',
                      ward: ['11', '12', '13']
                    }
                  ]
                },
                {
                  names: 'Amangwane',
                  surburb: [
                    {
                      name: 'Amangwane SP',
                      ward: ['14']
                    }
                  ]
                },
                {
                  names: 'Amanzana',
                  surburb: [
                    {
                      name: 'Amanzana SP',
                      ward: ['5']
                    }
                  ]
                },
                {
                  names: 'Bergville',
                  surburb: [
                    {
                      name: 'Bergville SP',
                      ward: ['12']
                    },
                    {
                      name: 'Driefontein',
                      ward: ['14']
                    }
                  ]
                },
                {
                  names: 'Bethany',
                  surburb: [
                    {
                      name: 'Bethany SP',
                      ward: ['11', '12']
                    }
                  ]
                },
                {
                  names: 'Bhalekisi',
                  surburb: [
                    {
                      name: 'Bhalekisi SP',
                      ward: ['5', '8', '10']
                    }
                  ]
                },
                {
                  names: 'Bonjaneni',
                  surburb: [
                    {
                      name: 'Bonjaneni SP',
                      ward: ['6', '10']
                    }
                  ]
                },
                {
                  names: 'Bukweni',
                  surburb: [
                    {
                      name: 'Bukweni SP1',
                      ward: ['2']
                    },
                    {
                      name: 'Bukweni SP2',
                      ward: ['3', '12']
                    }
                  ]
                },
                {
                  names: 'Busingatha A',
                  surburb: [
                    {
                      name: 'Busingatha A SP',
                      ward: ['6']
                    }
                  ]
                },
                {
                  names: 'Busingatha B',
                  surburb: [
                    {
                      name: 'Busingatha B SP',
                      ward: ['6']
                    }
                  ]
                },

                {
                  names: 'Drakensberg',
                  surburb: [
                    {
                      name: 'Drakensberg SP',
                      ward: ['10']
                    }
                  ]
                },
                {
                  names: 'Dukuza',
                  surburb: [
                    {
                      name: 'Dukuza SP',
                      ward: ['4', '5', '8', '10']
                    }
                  ]
                },
                {
                  names: 'Ekombe',
                  surburb: [
                    {
                      name: 'Ekombe SP',
                      ward: ['7']
                    }
                  ]
                },
                {
                  names: 'Emakhosaneni',
                  surburb: [
                    {
                      name: 'Emakhosaneni SP',
                      ward: ['4', '10', '12']
                    }
                  ]
                },
                {
                  names: 'Emmaus',
                  surburb: [
                    {
                      name: 'Emmaus SP',
                      ward: ['2','14']
                    }
                  ]
                },
                {
                  names: 'Empimbe',
                  surburb: [
                    {
                      name: 'Empimbe SP',
                      ward: ['2','14']
                    }
                  ]
                },
                {
                  names: 'Enyonyane',
                  surburb: [
                    {
                      name: 'Enyonyane SP',
                      ward: ['2','14']
                    }
                  ]
                },
                {
                  names: 'Esibovini',
                  surburb: [
                    {
                      name: 'Esibovini SP',
                      ward: ['4', '5', '8']
                    }
                  ]
                },
                {
                  names: 'Ethunzini',
                  surburb: [
                    {
                      name: 'Ethunzini SP',
                      ward: ['2','14']
                    }
                  ]
                },
                {
                  names: 'Gangadweni',
                  surburb: [
                    {
                      name: 'Gangadweni SP',
                      ward: ['5']
                    }
                  ]
                },
                {
                  names: 'Geluksburg',
                  surburb: [
                    {
                      name: 'Geluksburg SP',
                      ward: ['13']
                    }
                  ]
                },
                {
                  names: 'Gosheni',
                  surburb: [
                    {
                      name: 'Gosheni SP',
                      ward: ['4']
                    }
                  ]
                },
                {
                  names: 'Green Point',
                  surburb: [
                    {
                      name: 'Green Point SP',
                      ward: ['11', '13']
                    }
                  ]
                },
                {
                  names: 'Grootgluk',
                  surburb: [
                    {
                      name: 'Grootgluk SP',
                      ward: ['7', '9']
                    }
                  ]
                },
                {
                  names: 'Hambrook',
                  surburb: [
                    {
                      name: 'Hambrook SP',
                      ward: ['11', '12', '13']
                    }
                  ]
                },
                {
                  names: 'Howe',
                  surburb: [
                    {
                      name: 'Howe SP',
                      ward: ['13']
                    }
                  ]
                },
                {
                  names: 'Indanyana',
                  surburb: [
                    {
                      name: 'Indanyana SP',
                      ward: ['10', '12']
                    }
                  ]
                },
                {
                  names: 'Isandlwana',
                  surburb: [
                    {
                      name: 'Isandlwana SP',
                      ward: ['5']
                    }
                  ]
                },{
                  names: 'Jagersrust',
                  surburb: [
                    {
                      name: 'Jagersrust SP',
                      ward: ['10']
                    }
                  ]
                },

                {
                  names: 'Khethwani',
                  surburb: [
                    {
                      name: 'Khethwani SP',
                      ward: ['1','14']
                    }
                  ]
                },
                {
                  names: 'Kokwane',
                  surburb: [
                    {
                      name: 'Kokwane SP',
                      ward: ['5']
                    }
                  ]
                },
                {
                  names: 'Kwamiya',
                  surburb: [
                    {
                      name: 'Kwamiya SP',
                      ward: ['6', '7']
                    }
                  ]
                },
                {
                  names: 'KwaNkosana',
                  surburb: [
                    {
                      name: 'KwaNkosana SP',
                      ward: ['4', '5']
                    }
                  ]
                },
                {
                  names: 'Kwanokopela',
                  surburb: [
                    {
                      name: 'Kwanokopela SP',
                      ward: ['2', '12', '14']
                    }
                  ]
                },
                {
                  names: 'Langkloof',
                  surburb: [
                    {
                      name: 'Langkloof SP',
                      ward: ['10']
                    }
                  ]
                },
                {
                  names: 'Mabhulesini A',
                  surburb: [
                    {
                      name: 'Mabhulesini A SP',
                      ward: ['5']
                    }
                  ]
                },
                {
                  names: 'Mabhulesini B',
                  surburb: [
                    {
                      name: 'Mabhulesini B SP',
                      ward: ['5']
                    }
                  ]
                },{
                  names: 'Maganganguzi',
                  surburb: [
                    {
                      name: 'Maganganguzi SP',
                      ward: ['3','14']
                    }
                  ]
                },
                {
                  names: 'Makanda',
                  surburb: [
                    {
                      name: 'Makanda SP',
                      ward: ['3']
                    }
                  ]
                },
                {
                  names: 'Makhwelela A',
                  surburb: [
                    {
                      name: 'Makhwelela A SP',
                      ward: ['4']
                    }
                  ]
                },
                {
                  names: 'Makhwelela B',
                  surburb: [
                    {
                      name: 'Makhwelela B SP',
                      ward: ['5']
                    }
                  ]
                },
                {
                  names: 'Malefetheni',
                  surburb: [
                    {
                      name: 'Malefetheni SP',
                      ward: ['2', '3', '12']
                    }
                  ]
                },

                {
                  names: 'Malottas Kraal',
                  surburb: [
                    {
                      name: 'Malottas Kraal SP',
                      ward: ['13']
                    }
                  ]
                },
                {
                  names: 'Mangwaneni',
                  surburb: [
                    {
                      name: 'Mangwaneni SP',
                      ward: ['3']
                    }
                  ]
                },
                {
                  names: 'Maswazini',
                  surburb: [
                    {
                      name: 'Maswazini SP',
                      ward: ['4']
                    }
                  ]
                },
                {
                  names: 'Mazizini',
                  surburb: [
                    {
                      name: 'Mazizini SP',
                      ward: ['7']
                    }
                  ]
                },
                {
                  names: 'Mfunzini',
                  surburb: [
                    {
                      name: 'Mfunzini SP',
                      ward: ['6']
                    }
                  ]
                },
                {
                  names: 'Mkukwini',
                  surburb: [
                    {
                      name: 'Mkukwini SP',
                      ward: ['8', '9']
                    }
                  ]
                },
                {
                  names: 'Moyeni',
                  surburb: [
                    {
                      name: 'Moyeni SP',
                      ward: ['4', '5', '8', '10']
                    }
                  ]
                },
                {
                  names: 'Mpontsheni',
                  surburb: [
                    {
                      name: 'Mpontsheni SP',
                      ward: ['12']
                    }
                  ]
                },
                {
                  names: 'Ngoba',
                  surburb: [
                    {
                      name: 'Ngoba SP',
                      ward: ['3', '4', '12']
                    }
                  ]
                },
                {
                  names: 'Ngubela',
                  surburb: [
                    {
                      name: 'Ngubela SP',
                      ward: ['7']
                    }
                  ]
                },
                {
                  names: 'Nkomanzana',
                  surburb: [
                    {
                      name: 'Nkomanzana SP',
                      ward: ['4', '5']
                    }
                  ]
                },
                {
                  names: 'Nqula',
                  surburb: [
                    {
                      name: 'Nqula SP',
                      ward: ['13']
                    }
                  ]
                },
                {
                  names: 'Nyusana',
                  surburb: [
                    {
                      name: 'Nyusana SP',
                      ward: ['6']
                    }
                  ]
                },

                {
                  names: 'Ogade',
                  surburb: [
                    {
                      name: 'Ogade SP',
                      ward: ['8']
                    }
                  ]
                },
                 {
                  names: 'Okhahlamaba NU',
                  surburb: [
                    {
                      name: 'Okhahlamaba NU',
                      ward: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '19', '20', '21', '22', '26']
                    },
                    {
                      name: 'Spoioenkopdam Nature Reserve',
                      ward: ['1', '12', '13']
                    }
                  ]
                },
                 {
                  names: 'Okhombe A',
                  surburb: [
                    {
                      name: 'Okhombe A SP',
                      ward: ['7']
                    }
                  ]
                },
                 {
                  names: 'Olivia',
                  surburb: [
                    {
                      name: 'Olivia SP',
                      ward: ['8']
                    }
                  ]
                },
                {
                  names: 'Oliviershoek',
                  surburb: [
                    {
                      name: 'Oliviershoek SP',
                      ward: ['8', '9', '10']
                    }
                  ]
                },
                {
                  names: 'Oqhumo',
                  surburb: [
                    {
                      name: 'Oqhumo SP',
                      ward: ['5']
                    }
                  ]
                },
                {
                  names: 'Qolweni',
                  surburb: [
                    {
                      name: 'Qolweni SP',
                      ward: ['7']
                    }
                  ]
                },
                {
                  names: 'Rooihoek',
                  surburb: [
                    {
                      name: 'Rooihoek SP',
                      ward: ['11','13' ]
                    }
                  ]
                },
                {
                  names: 'Rookdale',
                  surburb: [
                    {
                      name: 'Rookdale SP',
                      ward: ['4', '8', '10']
                    }
                  ]
                },
                {
                  names: 'Seqomeni',
                  surburb: [
                    {
                      name: 'Seqomeni SP',
                      ward: ['7']
                    }
                  ]
                },
                {
                  names: 'Sibotsheni',
                  surburb: [
                    {
                      name: 'Sibotsheni SP',
                      ward: ['4']
                    }
                  ]
                },
                {
                  names: 'Siqalabeni',
                  surburb: [
                    {
                      name: 'Siqalabeni SP',
                      ward: ['3']
                    }
                  ]
                },
                {
                  names: 'Situlwane',
                  surburb: [
                    {
                      name: 'Situlwane SP',
                      ward: ['2','14']
                    }
                  ]
                },
                {
                  names: 'The Downs',
                  surburb: [
                    {
                      name: 'The Downs SP',
                      ward: ['8', '9', '10']
                    }
                  ]
                },
                {
                  names: 'uMhlwanzini',
                  surburb: [
                    {
                      name: 'uMhlwanzini SP',
                      ward: ['3']
                    }
                  ]
                },
                {
                  names: 'Winterton',
                  surburb: [
                    {
                      name: 'Winterton SP',
                      ward: ['1']
                    }
                  ]
                },
                {
                  names: 'Wittekop',
                  surburb: [
                    {
                      name: 'Wittekop SP',
                      ward: ['13']
                    }
                  ]
                },
                {
                  names: 'Woodford',
                  surburb: [
                    {
                      name: 'Woodford SP',
                      ward: ['11', '12']
                    }
                  ]
                },
                {
                  names: 'Zwelisha',
                  surburb: [
                    {
                      name: 'Zwelisha SP',
                      ward: ['7', '9']
                    }
                  ]
                },

              ]
            },
            {
              name: 'Umtshezi',
              city: [
                {
                  names: 'Campsie Glen ',
                  surburb: [
                    {
                      name:'Campsie Glen SP',
                      ward: ['2', '3', '6', '13']
                    }
                  ]
                },
                {
                  names: 'Cornfields ',
                  surburb: [
                    {
                      name:'Cornfields SP',
                      ward: ['6', '8']
                    }
                  ]
                },
                {
                  names: 'Estcourt ',
                  surburb: [
                    {
                      name:'Borough',
                      ward: ['3', '4']
                    },
                    {
                      name:'Brewitt',
                      ward: ['3', '4']
                    },
                    {
                      name:'Colida',
                      ward: ['4', '6']
                    },
                    {
                      name:'Drakensview',
                      ward: ['3', '4']
                    },
                    {
                      name:'Emabhanoyini',
                      ward: ['3', '9']
                    },
                    {
                      name:'Estcourt SP',
                      ward: ['3', '4', '8', '9', '13']
                    },
                    {
                      name:'Fordsburg',
                      ward: ['3', '4', '6', '8']
                    },
                    {
                      name:'Kwezi',
                      ward: ['4', '6', '9']
                    },
                  ]
                },
                {
                  names: 'Ezitendeni ',
                  surburb: [
                    {
                      name:'Ezitendeni SP',
                      ward: ['5', '7']
                    }
                  ]
                },
                {
                  names: 'Frere ',
                  surburb: [
                    {
                      name:'Frere SP',
                      ward: ['8', '13']
                    }
                  ]
                },
                {
                  names: 'Impembeni ',
                  surburb: [
                    {
                      name:'Impembeni SP',
                      ward: ['5', '8']
                    }
                  ]
                },
                {
                  names: 'Mbondwana ',
                  surburb: [
                    {
                      name:'Mbondwana SP',
                      ward: ['6', '8']
                    }
                  ]
                },
                {
                  names: 'Moor Park ',
                  surburb: [
                    {
                      name:'Moor Park Game Reserve',
                      ward: ['3', '7']
                    }
                  ]
                },

                {
                  names: 'Rensburgsdrift ',
                  surburb: [
                    {
                      name:'Rensburgsdrift SP',
                      ward: ['6', '9']
                    }
                  ]
                },
                {
                  names: 'Thembalihle ',
                  surburb: [
                    {
                      name:'Thembalihle SP',
                      ward: ['6', '8']
                    }
                  ]
                },
                {
                  names: 'uMtshezi NU ',
                  surburb: [
                    {
                      name:'uMtshezi NU',
                      ward: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '12', '25']
                    }
                  ]
                },
                {
                  names: 'Weenen ',
                  surburb: [
                    {
                      name:'Weenen SP',
                      ward: ['5', '7', '8']
                    }
                  ]
                },
                {
                  names: 'Wembesi A',
                  surburb: [
                    {
                      name:'Wembesi A SP',
                      ward: ['1', '2', '3', '7']
                    }
                  ]
                },
                {
                  names: 'Wembesi B ',
                  surburb: [
                    {
                      name:'Wembesi B SP',
                      ward: ['1', '2', '3']
                    }
                  ]
                },
                {
                  names: 'Wembesi C ',
                  surburb: [
                    {
                      name:'Wembesi C SP',
                      ward: ['1', '2', '6', '7']
                    }
                  ]
                }

              ]
            }
          ]
        },
        
        
        {
          name: 'uThungulu',
          municipality: [
          {
            name: 'Mfolozi',
            city: [
              {
                names: 'Amalaba',
                surburb: [
                  {
                    name: 'Amalaba SP',
                    ward: ['1', '4']
                  }
                ]
              },
              {
                names: 'Bumbaneni',
                surburb: [
                  {
                    name: 'Bumbaneni SP',
                    ward: ['7', '8', '9']
                  }
                ]
              },
              {
                names: 'Ehlabosini',
                surburb: [
                  {
                    name: 'Ehlabosini SP',
                    ward: ['2', '4', '11', '15']
                  }
                ]
              },
              {
                names: 'Ekusayeni',
                surburb: [
                  {
                    name: 'Ekusayeni SP',
                    ward: ['2', '11', '15']
                  }
                ]
              },
              {
                names: 'Emakwezini',
                surburb: [
                  {
                    name: 'Emakwezini SP',
                    ward: ['6', '12']
                  }
                ]
              },
              {
                names: 'Ematholeni',
                surburb: [
                  {
                    name: 'Ematholeni SP',
                    ward: ['8', '9', '10', '15']
                  }
                ]
              },
              {
                names: 'Emahlanzini',
                surburb: [
                  {
                    name: 'Emahlanzini SP',
                    ward: ['3', '5']
                  }
                ]
              },
              {
                names: 'Enhlabosini',
                surburb: [
                  {
                    name: 'Enhlabosini SP',
                    ward: ['2', '4', '11', '13', '14', '15']
                  }
                ]
              },
              {
                names: 'Entobozi',
                surburb: [
                  {
                    name: 'Entobozi SP',
                    ward: ['10', '15']
                  }
                ]
              },
              {
                names: 'Enxebeni',
                surburb: [
                  {
                    name: 'Enxebeni SP',
                    ward: ['7', '9', '10', '15']
                  }
                ]
              },
              {
                names: 'Ezidonini',
                surburb: [
                  {
                    name: 'Ezidonini SP',
                    ward: ['10', '12', '13']
                  }
                ]
              },

              {
                names: 'Ezindzebeni',
                surburb: [
                  {
                    name: 'Ezindzebeni SP',
                    ward: ['1', '3','4']
                  }
                ]
              },
              {
                names: 'Fuleni Reserve',
                surburb: [
                  {
                    name: 'Fuleni Reserve SP',
                    ward: ['13', '15']
                  }
                ]
              },
              {
                names: 'Gwabalanda Hlawi',
                surburb: [
                  {
                    name: 'Gwabalanda Hlawi SP',
                    ward: ['1','3' ,'4']
                  }
                ]
              },
              {
                names: 'Hlanzeni',
                surburb: [
                  {
                    name: 'Hlanzeni SP',
                    ward: ['1', '4']
                  }
                ]
              },
              {
                names: 'Holinyoka',
                surburb: [
                  {
                    name: 'Holinyoka SP',
                    ward: ['1', '4']
                  }
                ]
              },
              {
                names: 'KwaGcoba',
                surburb: [
                  {
                    name: 'KwaGcoba SP',
                    ward: ['10', '11', '13', '14', '15']
                  }
                ]
              },
              {
                names: 'Kwamendo',
                surburb: [
                  {
                    name: 'Kwamendo SP',
                    ward: ['10', '13']
                  }
                ]
              },
              {
                names: 'Mabhuyeni',
                surburb: [
                  {
                    name: 'Mabhuyeni SP',
                    ward: ['7', '9']
                  }
                ]
              },
              {
                names: 'Mahlahuva',
                surburb: [
                  {
                    name: 'Mahlahuva SP',
                    ward: ['6', '10', '12', '13']
                  }
                ]
              },

              {
                names: 'Manembeni',
                surburb: [
                  {
                    name: 'Manembeni SP',
                    ward: ['9', '10', '12', '13']
                  }
                ]
              },
              {
                names: 'Mankwathini',
                surburb: [
                  {
                    name: 'Mankwathini SP',
                    ward: ['3', '4']
                  }
                ]
              },
              {
                names: 'Manzamnyama',
                surburb: [
                  {
                    name: 'Manzamnyama SP',
                    ward: ['1', '4']
                  }
                ]
              },
              {
                names: 'Mazawula',
                surburb: [
                  {
                    name: 'Mazawula SP',
                    ward: ['11', '15']
                  }
                ]
              },
              {
                names: 'Mbonambi',
                surburb: [
                  {
                    name: 'Mbonambi SP',
                    ward: ['2', '3', '4']
                  },
                  {
                    name: 'Mhlahlaneni',
                    ward: ['3', '4']
                  }
                ]
              },
              {
                names: 'Mbonambi NU',
                surburb: [
                  {
                    name: 'KwaMbonambi State Forest',
                    ward: ['2', '3', '4', '5', '14', '26']
                  },
                  {
                    name: 'Lake Eteza Nature Reserve',
                    ward: ['4']
                  },
                  {
                    name: 'Mbonambi NU',
                    ward: ['1','2', '3', '4', '5', '6', '7', '8', '10', '11', '12', '13', '15', '26']
                  }
                ]
              },
              {
                names: 'Mfolozane',
                surburb: [
                  {
                    name: 'Mfolozane SP',
                    ward: ['2', '7', '8', '9', '15']
                  }
                ]
              },
              {
                names: 'Mgazini',
                surburb: [
                  {
                    name: 'Mgazini SP',
                    ward: ['6', '8', '9', '12']
                  }
                ]
              },
              {
                names: 'Mhlana',
                surburb: [
                  {
                    name: 'Mhlana SP',
                    ward: ['5', '6', '7', '8', '9']
                  }
                ]
              },
              {
                names: 'Ndanyeni',
                surburb: [
                  {
                    name: 'Ndanyeni SP',
                    ward: ['2', '7', '8']
                  }
                ]
              },
              {
                names: 'Ngwebu',
                surburb: [
                  {
                    name: 'Ngwebu SP',
                    ward: ['7', '8', '9', '10', '15']
                  }
                ]
              },
              {
                names: 'Nhlabane',
                surburb: [
                  {
                    name: 'Nhlabane SP',
                    ward: ['1','3' ,'4']
                  }
                ]
              },
              {
                names: 'Nohaha',
                surburb: [
                  {
                    name: 'Nohaha SP',
                    ward: ['10', '13', '15']
                  }
                ]
              },
              {
                names: 'Nozambula',
                surburb: [
                  {
                    name: 'Nozambula SP',
                    ward: ['2', '8', '15']
                  }
                ]
              },
              {
                names: 'Ntoyini',
                surburb: [
                  {
                    name: 'Ntoyini SP',
                    ward: ['7', '9']
                  }
                ]
              },
              {
                names: 'Ntshingimpisi',
                surburb: [
                  {
                    name: 'Ntshingimpisi SP',
                    ward: ['1', '6', '14', '26']
                  }
                ]
              },
              {
                names: 'Ntuthunga',
                surburb: [
                  {
                    name: 'Ntuthunga SP',
                    ward: ['13']
                  }
                ]
              },

              {
                names: 'Ntweni',
                surburb: [
                  {
                    name: 'Ntweni SP',
                    ward: ['2', '6', '7']
                  }
                ]
              },
              {
                names: 'Ntwezi',
                surburb: [
                  {
                    name: 'Ntwezi SP',
                    ward: ['7', '8', '9']
                  }
                ]
              },
              {
                names: 'Nxebeni',
                surburb: [
                  {
                    name: 'Nxebeni SP',
                    ward: ['9', '12']
                  }
                ]
              },
              {
                names: 'Nzalabantu',
                surburb: [
                  {
                    name: 'Nzalabantu SP',
                    ward: ['1', '3', '5', '6', '14', '26']
                  }
                ]
              },
              {
                names: 'Obizo',
                surburb: [
                  {
                    name: 'Obizo SP',
                    ward: ['7', '8', '9']
                  }
                ]
              },
              {
                names: 'Patane',
                surburb: [
                  {
                    name: 'Patane SP',
                    ward: ['10', '13', '15']
                  }
                ]
              },

              {
                names: 'Sabhuza',
                surburb: [
                  {
                    name: 'Sabhuza SP',
                    ward: ['6', '9', '10', '12']
                  }
                ]
              },
              {
                names: 'Velabandhla',
                surburb: [
                  {
                    name: 'Velabandhla SP',
                    ward: ['3', '5']
                  }
                ]
              }
            ]
          },
          {
            name: 'Mthonjaneni',
            city: [
              {
                names: 'Bedlane',
                surburb: [
                  {
                    name: 'Bedlane SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'Edubeni',
                surburb: [
                  {
                    name: 'Edubeni SP',
                    ward: ['3', '4', '5', '6']
                  }
                ]
              },
              {
                names: 'Ekuthuleni',
                surburb: [
                  {
                    name: 'Ekuthuleni SP',
                    ward: ['3', '4', '6']
                  }
                ]
              },
              {
                names: 'Emahlabathini',
                surburb: [
                  {
                    name: 'Emahlabathini SP',
                    ward: ['3', '4', '5']
                  }
                ]
              },
              {
                names: 'Emukhindini',
                surburb: [
                  {
                    name: 'Emukhindini SP',
                    ward: [ '4', '5', '6']
                  }
                ]
              },

              {
                names: 'Enkwenkwe',
                surburb: [
                  {
                    name: 'Enkwenkwe SP',
                    ward: ['4', '5', '26']
                  }
                ]
              },
              {
                names: 'Eyingwenya',
                surburb: [
                  {
                    name: 'Eyingwenya SP',
                    ward: ['2', '3', '4', '7']
                  }
                ]
              },
              {
                names: 'Ezinkawini',
                surburb: [
                  {
                    name: 'Ezinkawini SP',
                    ward: ['1', '3', '4']
                  }
                ]
              },
              {
                names: 'Gandolo',
                surburb: [
                  {
                    name: 'Gandolo SP',
                    ward: ['4']
                  }
                ]
              },
              {
                names: 'Goedgeloof A',
                surburb: [
                  {
                    name: 'Goedgeloof SP',
                    ward: ['2', '3', '7']
                  }
                ]
              },
              {
                names: 'Hawule',
                surburb: [
                  {
                    name: 'Hawule SP',
                    ward: ['4', '5', '6', '26']
                  }
                ]
              },
              {
                names: 'Imfuli Mission',
                surburb: [
                  {
                    name: 'Imfuli Mission SP',
                    ward: ['2']
                  }
                ]
              },
              {
                names: 'Ingwenya',
                surburb: [
                  {
                    name: 'Ingwenya SP',
                    ward: ['3', '7']
                  }
                ]
              },
              {
                names: 'Isibaya Esikhulu',
                surburb: [
                  {
                    name: 'Isibaya Esikhulu SP',
                    ward: ['3']
                  }
                ]
              },
               {
                names: 'KwaDloziyana',
                surburb: [
                  {
                    name: 'KwaDloziyana SP',
                    ward: ['3', '6']
                  }
                ]
              },
              {
                names: 'KwaMgwaza',
                surburb: [
                  {
                    name: 'KwaMgwaza SP',
                    ward: ['1', '2']
                  }
                ]
              },
              {
                names: 'KwaMazulu',
                surburb: [
                  {
                    name: 'KwaMazulu SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'KwaZululiyaduma',
                surburb: [
                  {
                    name: 'KwaZululiyaduma SP',
                    ward: ['4']
                  }
                ]
              },
              {
                names: 'Lumbi',
                surburb: [
                  {
                    name: 'Lumbi SP',
                    ward: ['1', '3', '4']
                  }
                ]
              },
              {
                names: 'Mabungu',
                surburb: [
                  {
                    name: 'Mabungu SP',
                    ward: ['3', '5', '6', '26']
                  }
                ]
              },
              {
                names: 'Mahele',
                surburb: [
                  {
                    name: 'Mahele SP',
                    ward: ['3', '4']
                  }
                ]
              },
              {
                names: 'Makhosaneni',
                surburb: [
                  {
                    name: 'Makhosaneni SP1',
                    ward: ['3', '4', '5']
                  },
                  {
                    name: 'Makhosaneni SP2',
                    ward: ['3', '4', '5']
                  }
                ]
              },
              {
                names: 'Mbojane',
                surburb: [
                  {
                    name: 'Mbojane SP',
                    ward: ['4', '24']
                  }
                ]
              },
              {
                names: 'Mehlamasha',
                surburb: [
                  {
                    name: 'Mehlamasha SP',
                    ward: ['3', '6', '26']
                  }
                ]
              },

              {
                names: 'Melmoth',
                surburb: [
                  {
                    name: 'Melmoth SP',
                    ward: ['1', '2', '4']
                  },
                  {
                    name: 'Thubalethu',
                    ward: ['1', '2', '4']
                  }
                ]
              },
               {
                names: 'Memezi',
                surburb: [
                  {
                    name: 'Memezi SP',
                    ward: ['5', '6', '26']
                  }
                ]
              },
              {
                names: 'Mgabhi',
                surburb: [
                  {
                    name: 'Mgabhi SP',
                    ward: ['3', '7', '8']
                  }
                ]
              },
              {
                names: 'Mhoyiza',
                surburb: [
                  {
                    name: 'Mhoyiza SP',
                    ward: ['3', '4']
                  }
                ]
              },{
                names: 'Mthonjaneni NU',
                surburb: [
                  {
                    name: 'Mthonjaneni NU',
                    ward: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '14', '16', '21', '24', '26']
                  }
                ]
              },
              {
                names: 'Ncayini',
                surburb: [
                  {
                    name: 'Ncayini SP',
                    ward: ['3', '4']
                  }
                ]
              },
              {
                names: 'Ndundulu',
                surburb: [
                  {
                    name: 'Ndundulu SP',
                    ward: ['4', '5', '6', '26']
                  }
                ]
              },
              {
                names: 'Nduro',
                surburb: [
                  {
                    name: 'Nduro SP',
                    ward: ['5', '6']
                  }
                ]
              },
              {
                names: 'Nobugalaza',
                surburb: [
                  {
                    name: 'Nobugalaza SP',
                    ward: ['4']
                  }
                ]
              },
              {
                names: 'Nqekwane',
                surburb: [
                  {
                    name: 'Nqekwane SP',
                    ward: ['4', '24']
                  }
                ]
              },
              {
                names: 'Osborn',
                surburb: [
                  {
                    name: 'Osborn SP',
                    ward: ['2']
                  }
                ]
              },
              {
                names: 'Phezukwehlanze',
                surburb: [
                  {
                    name: 'Phezukwehlanze SP',
                    ward: ['4']
                  }
                ]
              },
              {
                names: 'Wambaza',
                surburb: [
                  {
                    name: 'Wambaza SP',
                    ward: ['4', '5', '26']
                  }
                ]
              },
              {
                names: 'Zigagayi',
                surburb: [
                  {
                    name: 'Zigagayi SP',
                    ward: ['3', '6', '26']
                  }
                ]
              },
              {
                names: 'Zimbube',
                surburb: [
                  {
                    name: 'Zimbube SP',
                    ward: ['2', '3']
                  }
                ]
              }

            ]
          },
          {
            name: 'Nkandla',
            city: [
              {
                names: 'Amatholamgele',
                surburb: [
                  {
                    name: 'Amatholamgele SP',
                    ward: ['3', '10']
                  }
                ]
              },
              {
                names: 'Bangamanzi',
                surburb: [
                  {
                    name: 'Bangamanzi SP',
                    ward: ['8', '9']
                  }
                ]
              },
              {
                names: 'Benedict Mission',
                surburb: [
                  {
                    name: 'Benedict Mission SP',
                    ward: ['4', '5', '11']
                  }
                ]
              },
              {
                names: 'BHacane',
                surburb: [
                  {
                    name: 'BHacane SP',
                    ward: ['2', '3']
                  }
                ]
              },
              {
                names: 'Cholwane',
                surburb: [
                  {
                    name: 'Cholwane SP',
                    ward: ['5', '11']
                  }
                ]
              },
              {
                names: 'Cungewane',
                surburb: [
                  {
                    name: 'Cungewane SP',
                    ward: ['2', '3']
                  }
                ]
              },
              {
                names: 'Cwezi',
                surburb: [
                  {
                    name: 'Cwezi SP',
                    ward: ['1', '3', '16']
                  }
                ]
              },
              {
                names: 'Devondale',
                surburb: [
                  {
                    name: 'Devondale SP',
                    ward: ['1','2', '3', '8', '10']
                  }
                ]
              },
              {
                names: 'Dinuntuli',
                surburb: [
                  {
                    name: 'Dinuntuli SP',
                    ward: ['9', '13']
                  }
                ]
              },
              {
                names: 'Dlabe',
                surburb: [
                  {
                    name: 'Dlabe SP',
                    ward: ['11']
                  }
                ]
              },
              {
                names: 'Dlaylyane',
                surburb: [
                  {
                    name: 'Dlaylyane SP',
                    ward: ['2', '3', '8', '10']
                  }
                ]
              },
              {
                names: 'Dlolwane',
                surburb: [
                  {
                    name: 'Dlolwane SP',
                    ward: ['8', '12']
                  }
                ]
              },
              {
                names: 'Ejokweni',
                surburb: [
                  {
                    name: 'Ejokweni SP',
                    ward: ['12']
                  }
                ]
              },
              {
                names: 'Ekukhanyeni',
                surburb: [
                  {
                    name: 'Ekukhanyeni SP',
                    ward: ['3', '4', '10']
                  }
                ]
              }, {
                names: 'Ekombe',
                surburb: [
                  {
                    name: 'Ekombe SP',
                    ward: ['8', '10', '12']
                  }
                ]
              },

              {
                names: 'Ekuphiweni',
                surburb: [
                  {
                    name: 'Ekuphiweni SP',
                    ward: ['2', '8']
                  }
                ]
              },
               {
                names: 'Ekuthokozeni',
                surburb: [
                  {
                    name: 'Ekuthokozeni SP',
                    ward: ['9', '13']
                  }
                ]
              },
               {
                names: 'Emangidini',
                surburb: [
                  {
                    name: 'Emangidini SP',
                    ward: ['2', '3']
                  }
                ]
              },
              {
                names: 'Empotholo',
                surburb: [
                  {
                    name: 'Empotholo SP',
                    ward: ['2', '3']
                  }
                ]
              },
              {
                names: 'Enyawoshana',
                surburb: [
                  {
                    name: 'Enyawoshana SP',
                    ward: ['1', '7']
                  }
                ]
              },
               {
                names: 'Esibomvu',
                surburb: [
                  {
                    name: 'Esibomvu SP',
                    ward: ['3', '4']
                  }
                ]
              },
              {
                names: 'Ezibhembeni',
                surburb: [
                  {
                    name: 'Ezibhembeni SP',
                    ward: ['1', '16']
                  }
                ]
              },
               {
                names: 'Ezilozini',
                surburb: [
                  {
                    name: 'Ezilozini SP',
                    ward: ['6', '13']
                  }
                ]
              },
               {
                names: 'Ezimambeni',
                surburb: [
                  {
                    name: 'Ezimambeni SP',
                    ward: ['4', '10']
                  }
                ]
              },
               {
                names: 'Ezimbidla',
                surburb: [
                  {
                    name: 'Ezimbidla SP',
                    ward: ['11', '13', '14']
                  }
                ]
              },
              {
                names: 'Ezindundumeni',
                surburb: [
                  {
                    name: 'Ezindundumeni SP',
                    ward: ['1', '2', '8']
                  }
                ]
              },
              {
                names: 'Gada',
                surburb: [
                  {
                    name: 'Gada SP',
                    ward: ['1', '3']
                  }
                ]
              },
              {
                names: 'Gosweni',
                surburb: [
                  {
                    name: 'Gosweni SP',
                    ward: ['1']
                  }
                ]
              },
              {
                names: 'Hlwehlwe',
                surburb: [
                  {
                    name: 'Hlwehlwe SP',
                    ward: ['13', '14']
                  }
                ]
              },
              {
                names: 'iNdanyana',
                surburb: [
                  {
                    name: 'iNdanyana SP',
                    ward: ['6', '7']
                  }
                ]
              },
              {
                names: 'iNdanyana A',
                surburb: [
                  {
                    name: 'iNdanyana A SP',
                    ward: ['2', '5', '6', '7']
                  }
                ]
              },
              {
                names: 'Isigcalaba',
                surburb: [
                  {
                    name: 'Isigcalaba SP',
                    ward: ['1', '2', '5', '16']
                  }
                ]
              },
              {
                names: 'Izindlozi',
                surburb: [
                  {
                    name: 'Izindlozi SP',
                    ward: ['7', '14']
                  }
                ]
              },
               {
                names: 'Khabela',
                surburb: [
                  {
                    name: 'Khabela SP',
                    ward: ['3', '10']
                  }
                ]
              },
              {
                names: 'Khothongwe',
                surburb: [
                  {
                    name: 'Khothongwe SP',
                    ward: ['6', '9', '12']
                  }
                ]
              },
              {
                names: 'Kwa Gugu',
                surburb: [
                  {
                    name: 'Kwa Gugu SP',
                    ward: ['8', '12']
                  }
                ]
              },
              {
                names: 'KwaBedala',
                surburb: [
                  {
                    name: 'KwaBedala SP',
                    ward: ['4', '5', '10', '11']
                  }
                ]
              }, {
                names: 'KwaChwezi',
                surburb: [
                  {
                    name: 'KwaChwezi A SP',
                    ward: ['1','3', '16']
                  },
                  {
                    name: 'KwaChwezi B SP',
                    ward: ['1','3']
                  }
                ]
              },
              {
                names: 'KwaZondi',
                surburb: [
                  {
                    name: 'KwaZondi SP',
                    ward: ['2', '3']
                  }
                ]
              },

              {
                names: 'Mabengela',
                surburb: [
                  {
                    name: 'Mabengela SP',
                    ward: ['5', '6']
                  }
                ]
              },
               {
                names: 'Macela',
                surburb: [
                  {
                    name: 'Macela SP',
                    ward: ['9', '12']
                  }
                ]
              },
              {
                names: 'Madaka',
                surburb: [
                  {
                    name: 'Madaka SP',
                    ward: ['3', '10']
                  }
                ]
              },
               {
                names: 'Madiyane',
                surburb: [
                  {
                    name: 'Madiyane SP',
                    ward: ['5', '6', '11']
                  }
                ]
              },
              {
                names: 'Magologolo',
                surburb: [
                  {
                    name: 'Magologolo SP',
                    ward: ['12', '13']
                  }
                ]
              },
              {
                names: 'Maheze',
                surburb: [
                  {
                    name: 'Maheze SP',
                    ward: ['8', '9']
                  }
                ]
              },
              {
                names: 'Mahlathi',
                surburb: [
                  {
                    name: 'Mahlathi SP',
                    ward: ['6', '7']
                  }
                ]
              },
              {
                names: 'Makhanyezi',
                surburb: [
                  {
                    name: 'Makhanyezi SP',
                    ward: ['6', '7', '14']
                  }
                ]
              },
              {
                names: 'Malunga',
                surburb: [
                  {
                    name: 'Malunga SP',
                    ward: ['2','3', '10']
                  }
                ]
              },
              {
                names: 'Mandaba',
                surburb: [
                  {
                    name: 'Mandaba SP',
                    ward: ['2', '6', '7']
                  }
                ]
              },
              {
                names: 'Mandabe',
                surburb: [
                  {
                    name: 'Mandabe SP',
                    ward: ['6', '7']
                  }
                ]
              },
              {
                names: 'Mandlozi',
                surburb: [
                  {
                    name: 'Mandlozi SP',
                    ward: ['1', '8']
                  }
                ]
              },
              {
                names: 'Manyane',
                surburb: [
                  {
                    name: 'Manyane SP',
                    ward: ['8', '12']
                  }
                ]
              },

              {
                names: 'Manzimnyama',
                surburb: [
                  {
                    name: 'Manzimnyama SP',
                    ward: ['1', '4', '5']
                  }
                ]
              },

               {
                names: 'Maphophoma',
                surburb: [
                  {
                    name: 'Maphophoma SP',
                    ward: ['8', '10']
                  }
                ]
              },

              {
                names: 'Mapoloba',
                surburb: [
                  {
                    name: 'Mapoloba SP',
                    ward: ['12']
                  }
                ]
              }, {
                names: 'Masoka',
                surburb: [
                  {
                    name: 'Masoka SP',
                    ward: ['2']
                  }
                ]
              },

               {
                names: 'Masolosolo',
                surburb: [
                  {
                    name: 'Masolosolo SP',
                    ward: ['11', '12', '13']
                  }
                ]
              },
               {
                names: 'Mathiya',
                surburb: [
                  {
                    name: 'Mathiya SP',
                    ward: ['6', '11', '12']
                  }
                ]
              },
               {
                names: 'Matshemade',
                surburb: [
                  {
                    name: 'Matshemade SP',
                    ward: ['8', '9', '12']
                  }
                ]
              },
               {
                names: 'Matshenezimpisi',
                surburb: [
                  {
                    name: 'Matshenezimpisi SP',
                    ward: ['2', '5', '6']
                  }
                ]
              },
              {
                names: 'Matshensikazi',
                surburb: [
                  {
                    name: 'Matshensikazi SP',
                    ward: ['1', '16']
                  }
                ]
              },
              {
                names: 'Mbiswe',
                surburb: [
                  {
                    name: 'Mbiswe SP',
                    ward: ['1', '4']
                  }
                ]
              },
              {
                names: 'Ndimela',
                surburb: [
                  {
                    name: 'Ndimela SP',
                    ward: ['13', '14']
                  }
                ]
              },
              {
                names: 'Mfongosi',
                surburb: [
                  {
                    name: 'Mfongosi SP',
                    ward: ['8', '9', '12']
                  }
                ]
              },
              {
                names: 'Mhloshane',
                surburb: [
                  {
                    name: 'Mhloshane SP',
                    ward: ['9', '13']
                  }
                ]
              }, {
                names: 'Mkhalazi',
                surburb: [
                  {
                    name: 'Mkhalazi SP',
                    ward: ['1', '14']
                  }
                ]
              },
              {
                names: 'Mkupe',
                surburb: [
                  {
                    name: 'Mkupe SP',
                    ward: ['2', '6', '7']
                  }
                ]
              },
              {
                names: 'Mkwana',
                surburb: [
                  {
                    name: 'Mkwana SP',
                    ward: ['6', '7']
                  }
                ]
              },
              {
                names: 'Mophihli',
                surburb: [
                  {
                    name: 'Mophihli SP',
                    ward: ['1', '3', '7', '8']
                  }
                ]
              },
              {
                names: 'Mpandla',
                surburb: [
                  {
                    name: 'Mpandla SP',
                    ward: ['5', '6', '11']
                  }
                ]
              },
              {
                names: 'Mpingana',
                surburb: [
                  {
                    name: 'Mpingana SP',
                    ward: ['3', '4', '10']
                  }
                ]
              },

              {
                names: 'Mpolweni',
                surburb: [
                  {
                    name: 'Mpolweni SP',
                    ward: ['11', '12']
                  }
                ]
              },
              {
                names: 'Mshayazafe',
                surburb: [
                  {
                    name: 'Mshayazafe SP',
                    ward: ['4']
                  }
                ]
              },
              {
                names: 'Msobotsheni',
                surburb: [
                  {
                    name: 'Msobotsheni SP',
                    ward: ['10', '12']
                  }
                ]
              },
              {
                names: 'Msukane',
                surburb: [
                  {
                    name: 'Msukane SP',
                    ward: ['10', '12']
                  }
                ]
              },

              {
                names: 'Mthungeni',
                surburb: [
                  {
                    name: 'Mthungeni SP',
                    ward: ['6', '11', '13', '14']
                  }
                ]
              },
              {
                names: 'Mtshwili',
                surburb: [
                  {
                    name: 'Mtshwili SP',
                    ward: ['11', '12']
                  }
                ]
              },
              {
                names: 'Mwane',
                surburb: [
                  {
                    name: 'Mwane SP',
                    ward: ['6', '12', '13']
                  }
                ]
              },
              {
                names: 'Mzimhlophe',
                surburb: [
                  {
                    name: 'Mzimhlophe SP',
                    ward: ['1', '8']
                  }
                ]
              },

              {
                names: 'Mzwaneni',
                surburb: [
                  {
                    name: 'Mzwaneni SP',
                    ward: ['2', '13', '14']
                  }
                ]
              },
              {
                names: 'Ndikwe',
                surburb: [
                  {
                    name: 'Ndikwe SP',
                    ward: ['3', '8','10']
                  }
                ]
              },
              {
                names: 'Ndindini',
                surburb: [
                  {
                    name: 'Ndindini SP',
                    ward: ['6', '11']
                  }
                ]
              },

              {
                names: 'Ndweni',
                surburb: [
                  {
                    name: 'Ndweni SP',
                    ward: ['5', '6', '7', '11']
                  }
                ]
              },
              {
                names: 'Ngabe',
                surburb: [
                  {
                    name: 'Ngabe SP',
                    ward: ['2']
                  }
                ]
              },
              {
                names: 'Ngomankulu',
                surburb: [
                  {
                    name: 'Ngomankulu SP',
                    ward: ['11', '12']
                  }
                ]
              },
              {
                names: 'Ngudle',
                surburb: [
                  {
                    name: 'Ngudle SP',
                    ward: ['2', '3']
                  }
                ]
              },
              {
                names: 'Ngwavu',
                surburb: [
                  {
                    name: 'Ngwavu SP',
                    ward: ['8', '10']
                  }
                ]
              }, {
                names: 'Ngwegweni',
                surburb: [
                  {
                    name: 'Ngwegweni SP',
                    ward: ['1', '4', '5', '11']
                  }
                ]
              },

              {
                names: 'Ngwundo',
                surburb: [
                  {
                    name: 'Ngwundo SP',
                    ward: ['6', '11', '13']
                  }
                ]
              },
              {
                names: 'Nhlababo',
                surburb: [
                  {
                    name: 'Nhlababo SP',
                    ward: ['1', '2', '3', '6', '7', '14']
                  }
                ]
              }, {
                names: 'Nkandla',
                surburb: [
                  {
                    name: 'Nkandla SP',
                    ward: ['5', '6', '11']
                  }
                ]
              },
              {
                names: 'Nkandla NU',
                surburb: [
                  {
                    name: 'Nkandla NU',
                    ward: ['1', '3', '4', '6', '7', '8', '9','10', '11', '12', '13','14' ,'15', '16']
                  }
                ]
              },
              {
                names: 'Nkomeziphansi',
                surburb: [
                  {
                    name: 'Nkomeziphansi SP',
                    ward: ['8', '9']
                  }
                ]
              },
              {
                names: 'Nkondweni',
                surburb: [
                  {
                    name: 'Nkondweni SP',
                    ward: ['1', '7']
                  }
                ]
              },
              {
                names: 'Nkonisa',
                surburb: [
                  {
                    name: 'Nkonisa SP',
                    ward: ['10', '11']
                  }
                ]
              },
              {
                names: 'Nkungumathe',
                surburb: [
                  {
                    name: 'Nkungumathe SP',
                    ward: ['1', '16']
                  }
                ]
              },
              {
                names: 'Nomangci',
                surburb: [
                  {
                    name: 'Nomangci SP',
                    ward: ['6', '7', '11']
                  }
                ]
              },
              {
                names: 'Nothekwane',
                surburb: [
                  {
                    name: 'Nothekwane SP',
                    ward: ['2', '6', '13']
                  }
                ]
              },

               {
                names: 'Nsamlome',
                surburb: [
                  {
                    name: 'Nsamlome SP',
                    ward: ['6', '9', '12']
                  }
                ]
              },
              {
                names: 'Nsingabani',
                surburb: [
                  {
                    name: 'Nsingabani SP',
                    ward: ['8', '12']
                  }
                ]
              },
              {
                names: 'Nsingabantu',
                surburb: [
                  {
                    name: 'Nsingabantu SP',
                    ward: ['8', '10']
                  }
                ]
              },
              {
                names: 'Nsuze',
                surburb: [
                  {
                    name: 'Nsuze SP',
                    ward: ['2', '3', '4']
                  }
                ]
              },
              {
                names: 'Ntabandlovu',
                surburb: [
                  {
                    name: 'Ntabandlovu SP',
                    ward: ['2', '6', '7']
                  }
                ]
              },
              {
                names: 'Ntanyeni',
                surburb: [
                  {
                    name: 'Ntanyeni SP',
                    ward: ['1', '2']
                  }
                ]
              },
              {
                names: 'Ntembeni',
                surburb: [
                  {
                    name: 'Ntembeni SP',
                    ward: ['2', '13', '14']
                  }
                ]
              },
              {
                names: 'Ntolwane',
                surburb: [
                  {
                    name: 'Ntolwane SP',
                    ward: ['1', '2', '13', '14']
                  }
                ]
              },
              {
                names: 'Ntshiza',
                surburb: [
                  {
                    name: 'Ntshiza SP',
                    ward: ['1', '8']
                  }
                ]
              },
              {
                names: 'Ntulwana',
                surburb: [
                  {
                    name: 'Ntulwana SP',
                    ward: ['6', '11', '12', '13']
                  }
                ]
              },{
                names: 'Ntumbeni',
                surburb: [
                  {
                    name: 'Ntumbeni SP',
                    ward: ['5', '6']
                  }
                ]
              },

              {
                names: 'Nyawoshane',
                surburb: [
                  {
                    name: 'Nyawoshane SP',
                    ward: ['11', '12', '13']
                  }
                ]
              },

              {
                names: 'Ohlahla',
                surburb: [
                  {
                    name: 'Ohlahla SP',
                    ward: ['1', '2', '3']
                  }
                ]
              },
              {
                names: 'Ohlelo',
                surburb: [
                  {
                    name: 'Ohlelo SP',
                    ward: ['1', '16']
                  }
                ]
              },
              {
                names: 'Ohutshini',
                surburb: [
                  {
                    name: 'Ohutshini SP',
                    ward: ['14']
                  }
                ]
              },
              {
                names: 'Phambana',
                surburb: [
                  {
                    name: 'Phambana SP',
                    ward: ['1', '16']
                  }
                ]
              },
              {
                names: 'Pholela',
                surburb: [
                  {
                    name: 'Pholela SP',
                    ward: ['6', '12', '13']
                  }
                ]
              },
              {
                names: 'Phumuzamaphika',
                surburb: [
                  {
                    name: 'Phumuzamaphika SP',
                    ward: ['8', '9', '12']
                  }
                ]
              },
              {
                names: 'Phumuzamaphilo',
                surburb: [
                  {
                    name: 'Phumuzamaphilo SP',
                    ward: ['3', '10']
                  }
                ]
              },
              {
                names: 'Salofu',
                surburb: [
                  {
                    name: 'Salofu SP',
                    ward: ['8','10' ,'12']
                  }
                ]
              },
              {
                names: 'Samungu',
                surburb: [
                  {
                    name: 'Samungu SP',
                    ward: ['5', '6', '9', '12', '13']
                  }
                ]
              },
              {
                names: 'Sdashi',
                surburb: [
                  {
                    name: 'Sdashi SP',
                    ward: ['3', '4', '10']
                  }
                ]
              },
              {
                names: 'Shobalenyathi',
                surburb: [
                  {
                    name: 'Shobalenyathi SP',
                    ward: ['8', '12']
                  }
                ]
              },
              
              {
                names: 'Sibhudeni',
                surburb: [
                  {
                    name: 'Sibhudeni SP',
                    ward: ['1', '7', '14']
                  }
                ]
              },
              {
                names: 'Sihosheni',
                surburb: [
                  {
                    name: 'Sihosheni SP',
                    ward: ['6', '9']
                  }
                ]
              },

              {
                names: 'Silokomane',
                surburb: [
                  {
                    name: 'Silokomane SP',
                    ward: ['6', '12', '13']
                  }
                ]
              },
              {
                names: 'Siphande',
                surburb: [
                  {
                    name: 'Siphande SP',
                    ward: ['6', '9']
                  }
                ]
              },
              {
                names: 'Smukumuku',
                surburb: [
                  {
                    name: 'Smukumuku SP',
                    ward: ['2']
                  }
                ]
              },
              {
                names: 'Spinnes',
                surburb: [
                  {
                    name: 'Spinnes SP',
                    ward: ['8', '10']
                  }
                ]
              },
              {
                names: 'Swane',
                surburb: [
                  {
                    name: 'Swane SP',
                    ward: ['2', '13', '14']
                  }
                ]
              },
              {
                names: 'Talane',
                surburb: [
                  {
                    name: 'Talane SP',
                    ward: ['1', '4']
                  }
                ]
              },
              {
                names: 'Thalaneni',
                surburb: [
                  {
                    name: 'Thalaneni SP',
                    ward: ['4', '10', '11']
                  }
                ]
              },
              {
                names: 'Thaleni',
                surburb: [
                  {
                    name: 'Thaleni SP',
                    ward: ['2', '3']
                  }
                ]
              },
              {
                names: 'Thulani',
                surburb: [
                  {
                    name: 'Thulani SP',
                    ward: ['10', '11']
                  }
                ]
              },
              {
                names: 'Thuma',
                surburb: [
                  {
                    name: 'Thuma SP',
                    ward: ['13', '14']
                  }
                ]
              },
              {
                names: 'Tulwana',
                surburb: [
                  {
                    name: 'Tulwana SP',
                    ward: ['6', '12', '13']
                  }
                ]
              },
              {
                names: 'Vuka',
                surburb: [
                  {
                    name: 'Vuka SP',
                    ward: ['1','4']
                  }
                ]
              },
              {
                names: 'Vumanhlamvo',
                surburb: [
                  {
                    name: 'Vumanhlamvo SP',
                    ward: ['6', '7', '11', '14']
                  }
                ]
              },

              {
                names: 'Vutshini',
                surburb: [
                  {
                    name: 'Vutshini SP',
                    ward: ['8', '10','12']
                  }
                ]
              },
              {
                names: 'Xalasho',
                surburb: [
                  {
                    name: 'Xalasho SP',
                    ward: ['4', '10', '11']
                  }
                ]
              },
              {
                names: 'Xamukavinjelwa',
                surburb: [
                  {
                    name: 'Xamukavinjelwa SP',
                    ward: ['1', '5', '16']
                  }
                ]
              },
              {
                names: 'Xulu',
                surburb: [
                  {
                    name: 'Xulu SP',
                    ward: ['8', '10']
                  }
                ]
              },
              {
                names: 'Zinkunzini',
                surburb: [
                  {
                    name: 'Zinkunzini SP',
                    ward: ['2', '8']
                  }
                ]
              },
              {
                names: 'Zungweni',
                surburb: [
                  {
                    name: 'Zungweni SP',
                    ward: ['2', '5']
                  }
                ]
              }

            ]
          },
          {
            name: 'Ntambanana',
            city: [
              {
                names: 'Bhiliya',
                surburb: [
                  {
                    name: 'Bhiliya SP',
                    ward: ['5', '6']
                  }
                ]
              },
              {
                names: 'Bhukhanana',
                surburb: [
                  {
                    name: 'Bhukhanana SP',
                    ward: ['5']
                  }
                ]
              },
              {
                names: 'Dlebe',
                surburb: [
                  {
                    name: 'Dlebe SP',
                    ward: ['1', '2']
                  }
                ]
              },
              {
                names: 'Dlomodlomo',
                surburb: [
                  {
                    name: 'Dlomodlomo SP',
                    ward: ['2', '3', '4', '5']
                  }
                ]
              },
              {
                names: 'Emaphikaqala',
                surburb: [
                  {
                    name: 'Emaphikaqala SP',
                    ward: ['1', '2', '3']
                  }
                ]
              },
              {
                names: 'Emasangweni',
                surburb: [
                  {
                    name: 'Emasangweni SP',
                    ward: ['4', '26']
                  }
                ]
              },
              {
                names: 'Emfeceni',
                surburb: [
                  {
                    name: 'Emfeceni SP',
                    ward: ['2', '3']
                  }
                ]
              },

              {
                names: 'Empangeni',
                surburb: [
                  {
                    name: 'Empangeni SP',
                    ward: ['6', '12']
                  }
                ]
              },
              {
                names: 'Enkwenkwe A',
                surburb: [
                  {
                    name: 'Enkwenkwe A SP',
                    ward: ['4', '5', '26']
                  }
                ]
              },

              {
                names: 'Enkwenkwe B',
                surburb: [
                  {
                    name: 'Enkwenkwe B SP',
                    ward: ['1', '2']
                  }
                ]
              },
              {
                names: 'Esichothweni',
                surburb: [
                  {
                    name: 'Esichothweni SP',
                    ward: ['4', '5']
                  }
                ]
              },

              {
                names: 'Esidakeni',
                surburb: [
                  {
                    name: 'Esidakeni SP',
                    ward: ['2', '3', '5']
                  }
                ]
              },
              {
                names: 'Esithombeni',
                surburb: [
                  {
                    name: 'Esithombeni SP',
                    ward: ['7', '24']
                  }
                ]
              },
              {
                names: 'Fuyeni A',
                surburb: [
                  {
                    name: 'Fuyeni A SP',
                    ward: ['6', '12']
                  }
                ]
              },
              {
                names: 'Fuyeni B',
                surburb: [
                  {
                    name: 'Fuyeni B SP',
                    ward: ['6']
                  }
                ]
              },

              {
                names: 'Gobihlahla',
                surburb: [
                  {
                    name: 'Gobihlahla SP',
                    ward: ['1', '2', '3']
                  }
                ]
              },
              {
                names: 'Indodwane',
                surburb: [
                  {
                    name: 'Indodwane SP',
                    ward: ['7', '8']
                  }
                ]
              },
              {
                names: 'Kumhlosheni',
                surburb: [
                  {
                    name: 'Kumhlosheni SP',
                    ward: ['1']
                  }
                ]
              },
              {
                names: 'Kwabhadaza',
                surburb: [
                  {
                    name: 'Kwabhadaza SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'KwaGama',
                surburb: [
                  {
                    name: 'KwaGama SP',
                    ward: ['3', '5']
                  }
                ]
              },
              {
                names: 'Kwahlaza',
                surburb: [
                  {
                    name: 'Kwahlaza SP',
                    ward: ['8', '9']
                  }
                ]
              },
              {
                names: 'KwaMawanda',
                surburb: [
                  {
                    name: 'KwaMawanda SP',
                    ward: ['1', '3', '4']
                  }
                ]
              },

              {
                names: 'Lumbi',
                surburb: [
                  {
                    name: 'Lumbi SP',
                    ward: ['1', '', '14']
                  }
                ]
              },
              {
                names: 'Luwamba',
                surburb: [
                  {
                    name: 'Luwamba SP',
                    ward: ['5']
                  }
                ]
              },
              {
                names: 'Mabhensa',
                surburb: [
                  {
                    name: 'Mabhensa SP',
                    ward: ['2', '3', '5']
                  }
                ]
              },
              {
                names: 'Mabukata',
                surburb: [
                  {
                    name: 'Mabukata SP',
                    ward: ['5', '6', '8']
                  }
                ]
              },
              {
                names: 'Magwetshana',
                surburb: [
                  {
                    name: 'Magwetshana SP',
                    ward: ['6', '8', '12']
                  }
                ]
              },
              {
                names: 'Makholwase',
                surburb: [
                  {
                    name: 'Makholwase SP',
                    ward: ['5', '6', '7', '8']
                  }
                ]
              },
              {
                names: 'Makhwela',
                surburb: [
                  {
                    name: 'Makhwela SP',
                    ward: ['7', '8', '24']
                  }
                ]
              },
              {
                names: 'Malungwini',
                surburb: [
                  {
                    name: 'Malungwini SP',
                    ward: ['8', '9']
                  }
                ]
              },

              {
                names: 'Mandlanzini',
                surburb: [
                  {
                    name: 'Mandlanzini SP',
                    ward: ['6']
                  }
                ]
              },
              {
                names: 'MaQedipuleti',
                surburb: [
                  {
                    name: 'MaQedipuleti SP',
                    ward: ['6', '8', '9', '12']
                  }
                ]
              },

              {
                names: 'Mashwila',
                surburb: [
                  {
                    name: 'Mashwila SP',
                    ward: ['1', '3']
                  }
                ]
              },
              {
                names: 'Mhlana',
                surburb: [
                  {
                    name: 'Mhlana SP',
                    ward: ['5', '8', '9']
                  }
                ]
              },
              {
                names: 'Mkhandwini',
                surburb: [
                  {
                    name: 'Mkhandwini SP',
                    ward: ['5', '6']
                  }
                ]
              },
              {
                names: 'Mopukanqola',
                surburb: [
                  {
                    name: 'Mopukanqola SP',
                    ward: ['1', '2', '3']
                  }
                ]
              },

              {
                names: 'Mquzankunzi',
                surburb: [
                  {
                    name: 'Mquzankunzi SP',
                    ward: ['7', '8']
                  }
                ]
              },
              {
                names: 'Ndondondwana',
                surburb: [
                  {
                    name: 'Ndondondwana SP',
                    ward: ['1', '2', '3']
                  }
                ]
              },
              {
                names: 'Ningizimu',
                surburb: [
                  {
                    name: 'Ningizimu SP',
                    ward: ['5', '7', '8']
                  }
                ]
              },
              {
                names: 'Njomelwano',
                surburb: [
                  {
                    name: 'Njomelwano SP',
                    ward: ['3', '4', '5']
                  }
                ]
              },
              {
                names: 'Nomponjwana',
                surburb: [
                  {
                    name: 'Nomponjwana SP',
                    ward: ['3', '4', '5']
                  }
                ]
              },

              {
                names: 'Nqutshini',
                surburb: [
                  {
                    name: 'Nqutshini SP',
                    ward: ['7', '8']
                  }
                ]
              },
              {
                names: 'Ntabane',
                surburb: [
                  {
                    name: 'Ntabane SP',
                    ward: ['6', '8']
                  }
                ]
              },
              {
                names: 'Ntabayenkosi',
                surburb: [
                  {
                    name: 'Ntabayenkosi SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'Ntabayenkosi NU',
                surburb: [
                  {
                    name: 'Ntabayenkosi NU',
                    ward: ['1','2' ,'4', '5', '6', '7', '8', '12', '14', '15', '23', '24', '25', '26']
                  }
                ]
              },
              {
                names: 'Obizo',
                surburb: [
                  {
                    name: 'Obizo SP',
                    ward: ['5', '7', '8']
                  }
                ]
              },
              {
                names: 'Obuka A',
                surburb: [
                  {
                    name: 'Obuka A SP',
                    ward: ['3', '4', '5']
                  }
                ]
              },
              {
                names: 'Obuka B',
                surburb: [
                  {
                    name: 'Obuka B SP',
                    ward: ['1', '3', '4']
                  }
                ]
              },
              {
                names: 'Obuka C',
                surburb: [
                  {
                    name: 'Obuka C SP',
                    ward: ['2', '5']
                  }
                ]
              },
              {
                names: 'Ongelweni',
                surburb: [
                  {
                    name: 'Ongelweni SP',
                    ward: ['2', '3']
                  }
                ]
              },

              {
                names: 'Oqhabiyeni',
                surburb: [
                  {
                    name: 'Oqhabiyeni SP',
                    ward: ['3', '4']
                  }
                ]
              },
               {
                names: 'Qomintaba',
                surburb: [
                  {
                    name: 'Qomintaba SP',
                    ward: ['3', '4', '5']
                  }
                ]
              },
               {
                names: 'Sangoyana',
                surburb: [
                  {
                    name: 'Sangoyana SP',
                    ward: ['1', '6']
                  }
                ]
              },
               {
                names: 'Sangweyana',
                surburb: [
                  {
                    name: 'Sangweyana SP',
                    ward: ['2', '5']
                  }
                ]
              },
               {
                names: 'Sihuzu',
                surburb: [
                  {
                    name: 'Sihuzu SP',
                    ward: ['5', '7', '8']
                  }
                ]
              },
               {
                names: 'Stezi',
                surburb: [
                  {
                    name: 'Stezi SP',
                    ward: ['5', '7', '8', '24']
                  }
                ]
              },
               {
                names: 'Wambaza',
                surburb: [
                  {
                    name: 'Wambaza SP',
                    ward: ['4', '5']
                  }
                ]
               }            
            ]
          },
          {
            name: 'uMhlathuze',
            city: [
              {
                names: 'Amadaka',
                surburb: [
                  {
                    name: 'Amadaka SP',
                    ward: ['13', '14', '15', '16']
                  }
                ]
              },
              {
                names: 'Bhejane',
                surburb: [
                  {
                    name: 'Bhejane SP',
                    ward: ['5', '6']
                  }
                ]
              },
              {
                names: 'Bhiliya',
                surburb: [
                  {
                    name: 'Bhiliya SP',
                    ward: ['2', '12', '13']
                  }
                ]
              },
              {
                names: 'Empangeni',
                surburb: [
                  {
                    name: 'Carsdale',
                    ward: ['9', '23']
                  },
                   {
                    name: 'Dondolo',
                    ward: ['24', '25', '27', '28', '29']
                  },
                   {
                    name: 'Empangeni Central',
                    ward: ['23', '24']
                  },
                   {
                    name: 'Eniwe',
                    ward: ['10', '23', '29', '30']
                  },
                   {
                    name: 'Fairview',
                    ward: ['9', '23', '24']
                  },
                   {
                    name: 'Felixton',
                    ward: ['12', '23']
                  },
                   {
                    name: 'Grantham Park',
                    ward: ['9', '23']
                  },
                   {
                    name: 'Hillview',
                    ward: ['24']
                  },
                   {
                    name: 'Kildare',
                    ward: ['9', '23']
                  },
                   {
                    name: 'Kuleka',
                    ward: ['9', '23']
                  },

                   {
                    name: 'Kwashodlisa',
                    ward: ['10', '11', '19', '22', '23', '30']
                  },
                  {
                    name: 'Mangeze',
                    ward: ['10', '23', '29', '30']
                  },
                  {
                    name: 'Matshana',
                    ward: ['24', '25']
                  },
                  {
                    name: 'Movamhlone',
                    ward: ['7', '23', '24', '25']
                  },
                  {
                    name: 'Mpangele',
                    ward: ['5','9', '23']
                  },
                  {
                    name: 'Msasandla',
                    ward: ['10', '11', '19', '20', '21', '22']
                  },

                  {
                    name: 'Mtengu',
                    ward: [ '23', '24', '25']
                  },
                  {
                    name: 'Ndabanyeni',
                    ward: ['10', '23', '28', '29']
                  },
                  {
                    name: 'Ngwelezane',
                    ward: [ '23', '24', '25', '27', '28', '29']
                  },
                  {
                    name: 'Noordsig',
                    ward: ['5', '23', '24']
                  },
                  {
                    name: 'Nqutshini',
                    ward: [ '23', '25', '27', '28', '29']
                  },
                  {
                    name: 'Nyala Park',
                    ward: ['9', '23']
                  },
                  {
                    name: 'Ongoye',
                    ward: ['10', '19', '30']
                  },
                  {
                    name: 'Panorama',
                    ward: ['9', '23', '24']
                  },
                  {
                    name: 'Richem',
                    ward: ['9', '23']
                  },
                  {
                    name: 'Sgisi',
                    ward: ['23', '25', '29']
                  },
                  {
                    name: 'Umhlathuze',
                    ward: ['9', '23', '28']
                  },
                  {
                    name: 'Vulindlela',
                    ward: ['10', '30']
                  },
                  {
                    name: 'Zidedele',
                    ward: ['5', '23']
                  }

                ]
              },
              {
                names: 'Empembeni',
                surburb: [
                  {
                    name: 'Empembeni SP',
                    ward: ['13']
                  }
                ]
              },
              {
                names: 'Esikhawini H',
                surburb: [
                  {
                    name: 'Esikhawini H',
                    ward: ['21']
                  },
                  {
                    name: 'Esikhawini H SP',
                    ward: ['14', '15', '16', '17', '18', '20', '21', '22']
                  }
                ]
              },

              {
                names: 'Esikhawini J',
                surburb: [
                  {
                    name: 'Esikhawini J SP',
                    ward: ['18', '19', '20', '21']
                  }
                ]
              },
              {
                names: 'Ezikhaleni',
                surburb: [
                  {
                    name: 'Ezikhaleni SP',
                    ward: ['5', '6', '8']
                  }
                ]
              },
              {
                names: 'Gobandlovu',
                surburb: [
                  {
                    name: 'Gobandlovu SP',
                    ward: ['12', '14', '17', '19']
                  }
                ]
              },

              {
                names: 'Gubhethuka',
                surburb: [
                  {
                    name: 'Gubhethuka SP',
                    ward: ['2', '12', '13']
                  }
                ]
              },
              {
                names: 'Mabuyeni',
                surburb: [
                  {
                    name: 'Mabuyeni SP',
                    ward: ['12','13', '14', '15']
                  }
                ]
              },
              {
                names: 'Madlanghala',
                surburb: [
                  {
                    name: 'Madlanghala SP',
                    ward: ['12','13', '14']
                  }
                ]
              },

              {
                names: 'Mahunu',
                surburb: [
                  {
                    name: 'Mahunu SP',
                    ward: ['13', '18', '19']
                  }
                ]
              },
              {
                names: 'Mazimazana',
                surburb: [
                  {
                    name: 'Mazimazana',
                    ward: ['2', '6']
                  },
                  {
                    name: 'Mazimazana SP',
                    ward: ['2','5' ,'6', '7', '8']
                  }
                ]
              },
              {
                names: 'Mhlatuze Flats',
                surburb: [
                  {
                    name: 'Mhlatuze Flats SP',
                    ward: ['2', '12']
                  }
                ]
              },
              {
                names: 'Mkhoma',
                surburb: [
                  {
                    name: 'Mkhoma SP',
                    ward: ['2', '5', '7', '8', '26']
                  }
                ]
              },
              {
                names: 'Mkobasa',
                surburb: [
                  {
                    name: 'Mkobasa SP',
                    ward: ['13', '14', '15', '16', '17', '22']
                  }
                ]
              },
              {
                names: 'Mtunzini',
                surburb: [
                  {
                    name: 'Mtunzini Forest',
                    ward: ['13', '15', '18', '19', '22']
                  }
                ]
              },
              {
                names: 'Mzipofu',
                surburb: [
                  {
                    name: 'Mzipofu SP',
                    ward: ['2', '5', '6', '7']
                  }
                ]
              },
              {
                names: 'Mcombo',
                surburb: [
                  {
                    name: 'Mcombo SP',
                    ward: ['13', '15']
                  }
                ]
              },
              {
                names: 'Ndindima',
                surburb: [
                  {
                    name: 'Ndindima SP',
                    ward: ['13', '15']
                  }
                ]
              },
              {
                names: 'Ndleleni',
                surburb: [
                  {
                    name: 'Ndleleni SP',
                    ward: ['12', '13', '14']
                  }
                ]
              },
              {
                names: 'Nkhanangu',
                surburb: [
                  {
                    name: 'Nkhanangu SP',
                    ward: ['5', '6', '7']
                  }
                ]
              },

              {
                names: 'Nkonjane',
                surburb: [
                  {
                    name: 'Nkonjane SP',
                    ward: ['10', '19', '30']
                  }
                ]
              },
              {
                names: 'Nseleni',
                surburb: [
                  {
                    name: 'Nseleni SP',
                    ward: ['5', '6', '7', '8']
                  }
                ]
              },{
                names: 'Nthunzi',
                surburb: [
                  {
                    name: 'Nthunzi SP',
                    ward: ['5', '6', '7']
                  }
                ]
              },
              {
                names: 'Nyembe',
                surburb: [
                  {
                    name: 'Nyembe SP',
                    ward: ['18', '19']
                  }
                ]
              },
              {
                names: 'Ovondlo',
                surburb: [
                  {
                    name: 'Ovondlo SP',
                    ward: ['2', '6', '7', '8']
                  }
                ]
              },

              {
                names: 'Port Dunford',
                surburb: [
                  {
                    name: 'Port Dunford SP',
                    ward: ['18', '19']
                  }
                ]
              },

              {
                names: 'Richards Bay',
                surburb: [
                  {
                    name: 'Alton',
                    ward: ['2', '26']
                  },
                  {
                    name: 'Alton North',
                    ward: ['2', '26']
                  },
                  {
                    name: 'Aquadene',
                    ward: ['26']
                  },
                  {
                    name: 'Arboretum',
                    ward: ['1', '2', '3']
                  },
                  {
                    name: 'Birdwood',
                    ward: ['1', '3', '4', '26']
                  },
                  {
                    name: 'Brackenham',
                    ward: ['2', '26']
                  },
                  {
                    name: 'Mandlazini',
                    ward: ['1', '3', '4', '26']
                  },
                  {
                    name: 'Meer En See',
                    ward: ['1', '2']
                  },
                  {
                    name: 'Mzingazi',
                    ward: ['1', '6']
                  },
                  {
                    name: 'Richards Bay Central',
                    ward: ['2', '3']
                  },
                  {
                    name: 'Richards Bay Coal Terminal',
                    ward: ['2']
                  },
                  {
                    name: 'Richards Bay Game Reserve',
                    ward: ['2']
                  },
                  {
                    name: 'Tuzi-Gazi',
                    ward: ['2']
                  },
                   {
                    name: 'Veld En Vlei',
                    ward: ['2', '3', '4', '26']
                  },
                  {
                    name: 'Wils En Weide',
                    ward: ['2', '26']
                  },
                ]
              },
              {
                names: 'Sikhalasenkosi',
                surburb: [
                  {
                    name: 'Sikhalasenkosi SP',
                    ward: ['13', '15', '16', '18', '19', '20', '21', '22']
                  }
                ]
              },
              {
                names: 'uMhlathuze NU',
                surburb: [
                  {
                    name: 'Enseleni Nature Reserve',
                    ward: ['5','26']
                  },
                  {
                    name: 'Kwambonambi State Forest',
                    ward: ['1','2', '3', '4', '5', '6', '14', '26']
                  },
                  {
                    name: 'uMhlathuze NU',
                    ward: ['2','5', '7', '8', '9', '10', '11', '12', '14', '17', '18', '19', '20', '23', '24', '25', '26', '28', '29', '30']
                  }
                ]
              },
              {
                names: 'Uzimgwenya',
                surburb: [
                  {
                    name: 'Uzimgwenya SP',
                    ward: ['14', '17', '19', '20', '21']
                  }
                ]
              },
              {
                names: 'Zenzele',
                surburb: [
                  {
                    name: 'Zenzele SP',
                    ward: ['10', '12', '19', '23', '29', '30']
                  }
                ]
              },
            ]
          },
          {
            name: 'uMlalazi',
            city: [
              {
                names: 'Abashumi',
                surburb: [
                  {
                    name: 'Abashumi SP',
                    ward: ['6', '11']
                  }
                ]
              },
              {
                names: 'Amahubhu',
                surburb: [
                  {
                    name: 'Amahubhu SP',
                    ward: ['16', '17']
                  }
                ]
              },
              {
                names: 'Amakhilimba',
                surburb: [
                  {
                    name: 'Amakhilimba SP',
                    ward: ['14', '16', '17']
                  }
                ]
              },
              {
                names: 'Amatikulu',
                surburb: [
                  {
                    name: 'Amatikulu SP',
                    ward: ['8', '18']
                  }
                ]
              },
              {
                names: 'Bashikizi',
                surburb: [
                  {
                    name: 'Bashikizi SP',
                    ward: ['6', '11']
                  }
                ]
              },
              {
                names: 'Berea',
                surburb: [
                  {
                    name: 'Berea SP',
                    ward: ['12', '13', '16']
                  }
                ]
              },
              {
                names: 'Bongela',
                surburb: [
                  {
                    name: 'Bongela SP',
                    ward: ['1', '7', '14']
                  }
                ]
              },
              {
                names: 'Dibhase',
                surburb: [
                  {
                    name: 'Dibhase SP',
                    ward: ['1', '2', '14']
                  }
                ]
              },
              {
                names: 'Elemoya',
                surburb: [
                  {
                    name: 'Elemoya SP',
                    ward: ['14', '22', '25']
                  }
                ]
              },
              {
                names: 'Emaqeleni',
                surburb: [
                  {
                    name: 'Emaqeleni SP',
                    ward: ['20']
                  },
                  {
                    name: 'Nkume',
                    ward: ['9', '10', '14', '26']
                  }
                ]
              },

              {
                names: 'Emgoswaneni',
                surburb: [
                  {
                    name: 'Emgoswaneni SP',
                    ward: ['25', '26']
                  }
                ]
              },
              {
                names: 'Emncongweni',
                surburb: [
                  {
                    name: 'Emncongweni SP',
                    ward: ['13', '14', '16']
                  }
                ]
              },
              {
                names: 'Emnyameni',
                surburb: [
                  {
                    name: 'Emnyameni SP',
                    ward: ['11', '14', '21', '22']
                  }
                ]
              },
              {
                names: 'Eshowe',
                surburb: [
                  {
                    name: 'Eshowe SP',
                    ward: ['7', '11', '12', '13', '16']
                  },
                  {
                    name: 'Gezinsila',
                    ward: [ '11', '12', '13']
                  }
                ]
              },
              {
                names: 'Esiwane',
                surburb: [
                  {
                    name: 'Esiwane SP',
                    ward: ['20', '21']
                  }
                ]
              },
              {
                names: 'Esiwolweni',
                surburb: [
                  {
                    name: 'Esiwolweni SP',
                    ward: ['20', '21']
                  }
                ]
              },
              {
                names: 'Ezimpongo',
                surburb: [
                  {
                    name: 'Ezimpongo SP',
                    ward: ['1', '7', '8']
                  }
                ]
              },
              {
                names: 'Eziqaqweni',
                surburb: [
                  {
                    name: 'Eziqaqweni SP',
                    ward: ['7', '9', '10', '13', '14']
                  }
                ]
              },

              {
                names: 'Gawula',
                surburb: [
                  {
                    name: 'Gawula SP',
                    ward: ['16']
                  }
                ]
              },
              {
                names: 'Gazu-Mngwenya',
                surburb: [
                  {
                    name: 'Gazu-Mngwenya SP',
                    ward: ['3', '4', '5']
                  }
                ]
              },
              {
                names: 'Gingindlovu',
                surburb: [
                  {
                    name: 'Gingindlovu SP',
                    ward: ['18', '19']
                  }
                ]
              },{
                names: 'Gugushe',
                surburb: [
                  {
                    name: 'Gugushe SP',
                    ward: ['22']
                  }
                ]
              },
              {
                names: 'Habeni',
                surburb: [
                  {
                    name: 'Habeni SP',
                    ward: ['10', '25', '26']
                  }
                ]
              },

              {
                names: 'Hayinyama',
                surburb: [
                  {
                    name: 'Hayinyama SP',
                    ward: ['4', '5', '6', '25']
                  }
                ]
              },
              {
                names: 'Hemfane',
                surburb: [
                  {
                    name: 'Hemfane SP',
                    ward: ['16', '17']
                  }
                ]
              },
              {
                names: 'Hlangana',
                surburb: [
                  {
                    name: 'Hlangana SP',
                    ward: ['5', '6', '7']
                  }
                ]
              },
              {
                names: 'Hlobane ',
                surburb: [
                  {
                    name: 'Hlobane SP2',
                    ward: ['23', '25']
                  }
                ]
              },
              {
                names: 'Hlungwini',
                surburb: [
                  {
                    name: 'Hlungwini SP',
                    ward: ['3', '5']
                  }
                ]
              },
              {
                names: 'Hologo',
                surburb: [
                  {
                    name: 'Hologo SP',
                    ward: ['14', '15', '20']
                  }
                ]
              },
              {
                names: 'Isidibha',
                surburb: [
                  {
                    name: 'Isidibha SP',
                    ward: ['5', '6', '7']
                  }
                ]
              },
              {
                names: 'Itshempemvu',
                surburb: [
                  {
                    name: 'Itshempemvu SP',
                    ward: ['3', '8', '9']
                  }
                ]
              },
              {
                names: 'Izikoshi',
                surburb: [
                  {
                    name: 'Izikoshi SP',
                    ward: ['14', '16', '17', '20', '21']
                  }
                ]
              },

              {
                names: 'Izimpongo',
                surburb: [
                  {
                    name: 'Izimpongo SP',
                    ward: ['16']
                  }
                ]
              },
              {
                names: 'Izingeni',
                surburb: [
                  {
                    name: 'Izingeni SP2',
                    ward: ['20']
                  }
                ]
              },
              {
                names: 'Izingwenya A',
                surburb: [
                  {
                    name: 'Izingwenya A SP',
                    ward: ['6', '15', '18']
                  }
                ]
              },
              {
                names: 'Izingwenya B',
                surburb: [
                  {
                    name: 'Izingwenya B SP',
                    ward: [ '11', '20', '21']
                  }
                ]
              },
              {
                names: 'Izinkiliji',
                surburb: [
                  {
                    name: 'Izinkiliji SP',
                    ward: ['14', '22', '25']
                  }
                ]
              },
              {
                names: 'Izinsundu',
                surburb: [
                  {
                    name: 'Izinsundu SP',
                    ward: ['1', '2', '7']
                  }
                ]
              },
              {
                names: 'Izinyathi',
                surburb: [
                  {
                    name: 'Izinyathi SP',
                    ward: ['1', '2', '3']
                  }
                ]
              },
              {
                names: 'Khabingwe',
                surburb: [
                  {
                    name: 'Khabingwe SP',
                    ward: ['24', '26']
                  }
                ]
              },
              {
                names: 'Kwa-Jazi',
                surburb: [
                  {
                    name: 'Kwa-Jazi SP',
                    ward: ['6', '7', '15']
                  }
                ]
              },
              {
                names: 'Kwa-Mfana',
                surburb: [
                  {
                    name: 'Kwa-Mfana SP',
                    ward: ['7','10', '11', '12', '13', '14']
                  }
                ]
              },
              {
                names: 'Kwa-Mpofu',
                surburb: [
                  {
                    name: 'Kwa-Mpofu SP',
                    ward: ['7', '9', '26']
                  }
                ]
              },
              {
                names: 'Mabhokweni',
                surburb: [
                  {
                    name: 'Mabhokweni SP',
                    ward: ['16', '17', '18', '19']
                  }
                ]
              },
              {
                names: 'Mabhudle',
                surburb: [
                  {
                    name: 'Mabhudle SP',
                    ward: ['6', '7', '15']
                  }
                ]
              },
              {
                names: 'Macekane',
                surburb: [
                  {
                    name: 'Macekane SP',
                    ward: ['23']
                  }
                ]
              },

              {
                names: 'Machanca',
                surburb: [
                  {
                    name: 'Machanca SP',
                    ward: ['1', '7', '8']
                  }
                ]
              },
              {
                names: 'Madala',
                surburb: [
                  {
                    name: 'Madala SP',
                    ward: ['6', '15', '18']
                  }
                ]
              },
              {
                names: 'Mahuzu',
                surburb: [
                  {
                    name: 'Mahuzu SP',
                    ward: ['3', '7', '8']
                  }
                ]
              },
              {
                names: 'Makhehle',
                surburb: [
                  {
                    name: 'Makhehle SP1',
                    ward: ['23', '24', '26']
                  },
                  {
                    name: 'Makhehle SP2',
                    ward: ['22', '23']
                  },
                  {
                    name: 'Makhehle SP3',
                    ward: ['24']
                  }
                ]
              },
              {
                names: 'Makholokholo',
                surburb: [
                  {
                    name: 'Makholokholo SP',
                    ward: ['7','22','23', '24', '25']
                  }
                ]
              },
              {
                names: 'Makhoni',
                surburb: [
                  {
                    name: 'Makhoni SP',
                    ward: ['5', '6']
                  }
                ]
              },
              {
                names: 'Mandawe',
                surburb: [
                  {
                    name: 'Mandawe SP',
                    ward: ['10', '14', '25']
                  }
                ]
              },
              {
                names: 'Mankayiyana',
                surburb: [
                  {
                    name: 'Mankayiyana SP',
                    ward: ['3', '4', '5']
                  }
                ]
              },
              {
                names: 'Mankentshaneni',
                surburb: [
                  {
                    name: 'Mankentshaneni SP',
                    ward: ['5', '6', '7']
                  }
                ]
              },
              {
                names: 'Mankumbu',
                surburb: [
                  {
                    name: 'Mankumbu SP',
                    ward: ['1', '2', '14']
                  }
                ]
              },
              {
                names: 'Mankunzana',
                surburb: [
                  {
                    name: 'Mankunzana SP',
                    ward: ['11', '22']
                  }
                ]
              },
              {
                names: 'Manzamnyama',
                surburb: [
                  {
                    name: 'Manzamnyama SP',
                    ward: ['11', '21', '22']
                  }
                ]
              },
              {
                names: 'Maqhogo',
                surburb: [
                  {
                    name: 'Maqhogo SP',
                    ward: ['2', '3']
                  }
                ]
              },
              {
                names: 'Maqhulu',
                surburb: [
                  {
                    name: 'Maqhulu SP',
                    ward: ['16', '17', '19']
                  }
                ]
              },
              {
                names: 'Mashishi',
                surburb: [
                  {
                    name: 'Mashishi SP1',
                    ward: ['22', '24', '25', '26']
                  },
                  {
                    name: 'Mashishi SP2',
                    ward: ['25', '26']
                  }
                ]
              },
              {
                names: 'Masundwini',
                surburb: [
                  {
                    name: 'Masundwini SP',
                    ward: ['4', '5', '7']
                  }
                ]
              },
              {
                names: 'Mathibelana',
                surburb: [
                  {
                    name: 'Mathibelana SP',
                    ward: ['6', '7', '15']
                  }
                ]
              },
              {
                names: 'Mathonsi',
                surburb: [
                  {
                    name: 'Mathonsi SP',
                    ward: ['2']
                  }
                ]
              },
              {
                names: 'Matsheni',
                surburb: [
                  {
                    name: 'Matsheni SP',
                    ward: ['24', '25', '26']
                  }
                ]
              },
              {
                names: 'Mawudlu',
                surburb: [
                  {
                    name: 'Mawudlu SP',
                    ward: ['16']
                  }
                ]
              },
              {
                names: 'Mbangayiya',
                surburb: [
                  {
                    name: 'Mbangayiya SP',
                    ward: ['14']
                  }
                ]
              },
              {
                names: 'Mbiza',
                surburb: [
                  {
                    name: 'Mbiza SP1',
                    ward: ['7', '9','10']
                  },
                  {
                    name: 'Mbiza SP2',
                    ward: ['9','26']
                  }
                ]
              },
              {
                names: 'Mbizane',
                surburb: [
                  {
                    name: 'Mbizane SP',
                    ward: ['3', '4']
                  }
                ]
              },
              {
                names: 'Mbongolwane',
                surburb: [
                  {
                    name: 'Mbongolwane SP',
                    ward: ['1', '2', '3', '4']
                  }
                ]
              },
              {
                names: 'Mehlamasha',
                surburb: [
                  {
                    name: 'Mehlamasha SP',
                    ward: ['3', '26']
                  }
                ]
              },
              {
                names: 'Mhambuma',
                surburb: [
                  {
                    name: 'Mhambuma SP',
                    ward: ['5','6', '11']
                  }
                ]
              },
              {
                names: 'Mhlathuzana',
                surburb: [
                  {
                    name: 'Mhlathuzana SP',
                    ward: ['14', '22', '25']
                  }
                ]
              },
              {
                names: 'Mkhunyana',
                surburb: [
                  {
                    name: 'Mkhunyana SP',
                    ward: ['22', '24', '25']
                  }
                ]
              },
              {
                names: 'Mkhuphulangwenya',
                surburb: [
                  {
                    name: 'Mkhuphulangwenya SP1',
                    ward: ['7', '23', '24', '26']
                  },
                  {
                    name: 'Mkhuphulangwenya SP2',
                    ward: ['7', '23', '24']
                  }
                ]
              },
              {
                names: 'Mngampondo',
                surburb: [
                  {
                    name: 'Mngampondo SP',
                    ward: ['5', '24']
                  }
                ]
              },
              {
                names: 'Mophihli',
                surburb: [
                  {
                    name: 'Mophihli SP',
                    ward: ['1', '7', '14']
                  }
                ]
              },
              {
                names: 'Mpehlela',
                surburb: [
                  {
                    name: 'Mpehlela SP',
                    ward: ['10', '14', '25']
                  }
                ]
              },
              {
                names: 'Mphendle',
                surburb: [
                  {
                    name: 'Mphendle SP',
                    ward: ['5', '6']
                  }
                ]
              },
              {
                names: 'Mphundumane',
                surburb: [
                  {
                    name: 'Mphundumane SP',
                    ward: ['3', '4']
                  }
                ]
              },
              {
                names: 'Mpofana',
                surburb: [
                  {
                    name: 'Mpofana SP',
                    ward: ['4', '5', '6']
                  }
                ]
              },
              {
                names: 'Mpungose',
                surburb: [
                  {
                    name: 'Mpungose SP',
                    ward: ['14', '16', '17', '20']
                  }
                ]
              },
              {
                names: 'Mqezemane',
                surburb: [
                  {
                    name: 'Mqezemane SP',
                    ward: ['5', '6', '7']
                  }
                ]
              },
              {
                names: 'Mtilombo',
                surburb: [
                  {
                    name: 'Mtilombo SP',
                    ward: ['10', '14']
                  }
                ]
              },
              {
                names: 'Mtitombi',
                surburb: [
                  {
                    name: 'Mtitombi SP',
                    ward: ['10', '11', '22', '23']
                  }
                ]
              },
              {
                names: 'Mtunzini',
                surburb: [
                  {
                    name: 'Jantoni',
                    ward: ['18', '19']
                  },
                  {
                    name: 'Mtunzini SP',
                    ward: ['18', '19']
                  }
                ]
              },
              {
                names: 'Mvuthine',
                surburb: [
                  {
                    name: 'Mvuthine Reserve',
                    ward: ['16']
                  }
                ]
              },
              {
                names: 'Ngedlesi',
                surburb: [
                  {
                    name: 'Ngedlesi SP',
                    ward: ['4', '7']
                  }
                ]
              },
              {
                names: 'Ngeza',
                surburb: [
                  {
                    name: 'Ngeza SP',
                    ward: ['14', '16']
                  }
                ]
              },
              {
                names: 'Ngodini',
                surburb: [
                  {
                    name: 'Ngodini SP1',
                    ward: ['25', '26']
                  },
                  {
                    name: 'Ngodini SP2',
                    ward: ['25', '26']
                  }
                ]
              },
              {
                names: 'Ngoye',
                surburb: [
                  {
                    name: 'Ngoye SP',
                    ward: ['8']
                  }
                ]
              },
              {
                names: 'Ngundwini',
                surburb: [
                  {
                    name: 'Ngundwini SP',
                    ward: ['3', '5']
                  }
                ]
              },
              {
                names: 'Ngunundu',
                surburb: [
                  {
                    name: 'Ngunundu SP',
                    ward: ['7', '8', '9']
                  }
                ]
              },
              {
                names: 'Nguqu',
                surburb: [
                  {
                    name: 'Nguqu SP',
                    ward: ['17', '19', '20']
                  }
                ]
              },
              {
                names: 'Nhlabo',
                surburb: [
                  {
                    name: 'Nhlabo SP',
                    ward: ['16', '17', '19', '20']
                  }
                ]
              },
              {
                names: 'Nhlalidakiwe',
                surburb: [
                  {
                    name: 'Nhlalidakiwe SP',
                    ward: ['2', '14']
                  }
                ]
              },
              {
                names: 'Nhlohlela',
                surburb: [
                  {
                    name: 'Nhlohlela SP',
                    ward: ['1', '4', '7']
                  }
                ]
              },
              {
                names: 'Nkangala',
                surburb: [
                  {
                    name: 'Nkangala SP',
                    ward: ['7', '8']
                  }
                ]
              },
              {
                names: 'Nkunzempunga',
                surburb: [
                  {
                    name: 'Nkunzempunga SP',
                    ward: ['3', '4', '5', '7']
                  }
                ]
              },
              {
                names: 'Nolila-Sonane',
                surburb: [
                  {
                    name: 'Nolila-Sonane SP',
                    ward: ['1', '2', '3', '4']
                  }
                ]
              },
              {
                names: 'Nomyaca',
                surburb: [
                  {
                    name: 'Nomyaca SP',
                    ward: ['26']
                  }
                ]
              },
              {
                names: 'Noshungu',
                surburb: [
                  {
                    name: 'Noshungu SP',
                    ward: ['14', '20', '21', '22']
                  }
                ]
              },
              {
                names: 'Nozandla',
                surburb: [
                  {
                    name: 'Nozandla SP',
                    ward: ['17', '20']
                  }
                ]
              },
              {
                names: 'Nqamane',
                surburb: [
                  {
                    name: 'Nqamane SP',
                    ward: ['24', '26']
                  }
                ]
              },
              {
                names: 'Nqoleni',
                surburb: [
                  {
                    name: 'Nqoleni SP',
                    ward: ['6', '11']
                  }
                ]
              },
              {
                names: 'Ntamoyenkunzi',
                surburb: [
                  {
                    name: 'Ntamoyenkunzi SP',
                    ward: ['1', '3', '4']
                  }
                ]
              },
              {
                names: 'Nteneshane',
                surburb: [
                  {
                    name: 'Nteneshane SP',
                    ward: ['23']
                  }
                ]
              },
              {
                names: 'Ntenjane',
                surburb: [
                  {
                    name: 'Ntenjane SP',
                    ward: ['10', '13', '14', '16']
                  }
                ]
              },
              {
                names: 'Ntshentshelu',
                surburb: [
                  {
                    name: 'Ntshentshelu SP1',
                    ward: ['26']
                  },
                  {
                    name: 'Ntshentshelu SP2',
                    ward: ['4', '5', '26']
                  }
                ]
              },

              {
                names: 'Ntuze',
                surburb: [
                  {
                    name: 'Ntuze SP',
                    ward: ['11', '21', '22']
                  }
                ]
              },
              {
                names: 'Nyanini',
                surburb: [
                  {
                    name: 'Nyanini SP',
                    ward: ['11', '12', '13', '16']
                  }
                ]
              },
              {
                names: 'Nyathini',
                surburb: [
                  {
                    name: 'Nyathini SP',
                    ward: ['14']
                  }
                ]
              },
              {
                names: 'Nyimbithwa',
                surburb: [
                  {
                    name: 'Nyimbithwa SP',
                    ward: ['1', '7']
                  }
                ]
              },
              {
                names: 'Obanjeni',
                surburb: [
                  {
                    name: 'Obanjeni SP1',
                    ward: ['20']
                  },
                  {
                    name: 'Obanjeni SP2',
                    ward: ['20']
                  },
                  {
                    name: 'Obanjeni SP3',
                    ward: ['20']
                  }
                ]
              },
              {
                names: 'Ohaheni',
                surburb: [
                  {
                    name: 'Ohaheni SP1',
                    ward: ['22', '23']
                  },
                  {
                    name: 'Ohaheni SP2',
                    ward: ['22', '23', '23']
                  }
                ]
              },
              {
                names: 'Phaphu',
                surburb: [
                  {
                    name: 'Phaphu SP',
                    ward: ['7', '15']
                  }
                ]
              },
              {
                names: 'Phindavele',
                surburb: [
                  {
                    name: 'Phindavele SP',
                    ward: ['1', '4']
                  }
                ]
              },
              {
                names: 'Phongola',
                surburb: [
                  {
                    name: 'Phongola SP',
                    ward: ['11', '22', '23']
                  }
                ]
              },
              {
                names: 'Qwayinduku',
                surburb: [
                  {
                    name: 'Qwayinduku SP',
                    ward: ['11', '21', '22']
                  }
                ]
              },
              {
                names: 'Sabeka',
                surburb: [
                  {
                    name: 'Sabeka SP',
                    ward: ['17', '19', '20']
                  }
                ]
              },
              {
                names: 'Samungu',
                surburb: [
                  {
                    name: 'Samungu SP',
                    ward: ['3', '4', '5']
                  }
                ]
              },
              {
                names: 'Shushu',
                surburb: [
                  {
                    name: 'Shushu SP',
                    ward: ['3', '4']
                  }
                ]
              },
              {
                names: 'Sibhamu',
                surburb: [
                  {
                    name: 'Sibhamu SP',
                    ward: ['11', '20']
                  }
                ]
              },
              {
                names: 'Silambo',
                surburb: [
                  {
                    name: 'Silambo SP',
                    ward: ['2', '3', '5']
                  }
                ]
              },
              {
                names: 'Siphezi',
                surburb: [
                  {
                    name: 'Siphezi SP',
                    ward: ['7', '8', '9', '26']
                  }
                ]
              },
                {
                names: 'Siqandaqanda',
                surburb: [
                  {
                    name: 'Siqandaqanda SP',
                    ward: ['1', '7', '8']
                  }
                ]
              },
              {
                names: 'Siqwanjana',
                surburb: [
                  {
                    name: 'Siqwanjana SP',
                    ward: ['14']
                  }
                ]
              },
              {
                names: 'Sogedle',
                surburb: [
                  {
                    name: 'Sogedle SP',
                    ward: ['6', '15']
                  }
                ]
              },
                {
                names: 'Sugar Mill',
                surburb: [
                  {
                    name: 'Abashumi SP',
                    ward: ['7']
                  }
                ]
              },
              {
                names: 'Thawini',
                surburb: [
                  {
                    name: 'Thawini SP',
                    ward: ['13', '14', '16']
                  }
                ]
              },
              {
                names: 'Thintumkhaba',
                surburb: [
                  {
                    name: 'Thintumkhaba SP',
                    ward: ['9', '26']
                  }
                ]
              },
                {
                names: 'Ufasimba',
                surburb: [
                  {
                    name: 'Ufasimba SP1',
                    ward: ['24']
                  },
                  {
                    name: 'Ufasimba SP2',
                    ward: ['7','24']
                  }
                ]
              },
              {
                names: 'uMlalazi NU',
                surburb: [
                  {
                    name: 'uMlalazi Nature Reserve',
                    ward: ['1', '18', '19']
                  },
                  {
                    name: 'uMlalazi NU',
                    ward: ['1', '3', '4', '5', '6', '7', '8', '9', '10', '11', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '29']
                  }
                ]
              },
              {
                names: 'Vekeza',
                surburb: [
                  {
                    name: 'Vekeza SP',
                    ward: ['16', '17']
                  }
                ]
              },
              {
                names: 'Vongotho',
                surburb: [
                  {
                    name: 'Vongotho SP',
                    ward: ['17', '220', '21']
                  }
                ]
              },
              {
                names: 'Vuma',
                surburb: [
                  {
                    name: 'Vuma SP',
                    ward: ['8']
                  }
                ]
              },
              {
                names: 'Yameni',
                surburb: [
                  {
                    name: 'Yameni SP1',
                    ward: ['22']
                  }
                ]
              },
              {
                names: 'Yetheni',
                surburb: [
                  {
                    name: 'Yetheni SP2',
                    ward: ['20', '21']
                  }
                ]
              },
              {
                names: 'Zamokuhle',
                surburb: [
                  {
                    name: 'Zamokuhle SP',
                    ward: ['20']
                  }
                ]
              },
              {
                names: 'Zimbidli',
                surburb: [
                  {
                    name: 'Zimbidli SP',
                    ward: ['6', '7', '15']
                  }
                ]
              },
              {
                names: 'Zimpisi B',
                surburb: [
                  {
                    name: 'Zimpisi B SP',
                    ward: ['1', '4', '7']
                  }
                ]
              },
              {
                names: 'Zimpohlo',
                surburb: [
                  {
                    name: 'Zimpohlo SP',
                    ward: ['14', '22']
                  }
                ]
              },
              {
                names: 'Zinhlezuka',
                surburb: [
                  {
                    name: 'Zinhlezuka SP',
                    ward: ['6', '7']
                  }
                ]
              },
               {
                names: 'Ziyendane',
                surburb: [
                  {
                    name: 'Ziyendane SP',
                    ward: ['5','6', '11']
                  }
                ]
              }
            ]
          }
          ]
        },
        
        {
          name: 'Zululand',
          municipality: [
            {
            name: 'Abaqulusi',
            city: [
              {
                names: 'Abaqulusi NU',
                surburb: [
                  {
                    name: 'Abaqulusi NU',
                    ward: ['1', '2', '3', '4', '5', '6', '7', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22']
                  }
                ] 
              },
              {
                names: 'Bhobozana',
                surburb: [
                  {
                    name: 'Bhobozana SP',
                    ward:['15']
                  }
                ]
              },
              {
                names: 'Coronation',
                surburb: [
                  {
                    name: 'Coronation SP',
                    ward:['6']
                  },
                  {
                    name: 'Thukuzele',
                    ward:['6']
                  }
                ]
              },
              {
                names: 'Draaiom Trust ',
                surburb: [
                  {
                    name: 'Draaiom Trust SP',
                    ward:['1']
                  }
                ]
              },
              {
                names: 'Emadresini',
                surburb: [
                  {
                    name: 'Emadresini SP',
                    ward:['12', '16', '17', '18', '20', '21']
                  }
                ]
              },
              {
                names: 'Emdundubezini',
                surburb: [
                  {
                    name: 'Emdundubezini SP',
                    ward:['21']
                  }
                ]
              },
              {
                names: 'Emhlangeni',
                surburb: [
                  {
                    name: 'Emhlangeni SP',
                    ward:['15', '16', '17']
                  }
                ]
              },
              {
                names: 'Emvunyane',
                surburb: [
                  {
                    name: 'Emvunyane SP',
                    ward:['14']
                  }
                ]
              },
              {
                names: 'Esidakeni',
                surburb: [
                  {
                    name: 'Esidakeni SP',
                    ward:['4']
                  }
                ]
              },
              {
                names: 'Esigodini',
                surburb: [
                  {
                    name: 'Esigodini SP',
                    ward:['14','15']
                  }
                ]
              },
              {
                names: 'Ezibomvu',
                surburb: [
                  {
                    name: 'Ezibomvu SP',
                    ward:['14']
                  }
                ]
              },
              {
                names: 'Ezidulini',
                surburb: [
                  {
                    name: 'Ezidulini SP',
                    ward:['15', '16', '21']
                  }
                ]
              },
              {
                names: 'Hlobane',
                surburb: [
                  {
                    name: 'Hlobane SP1',
                    ward:['5', '6', '7']
                  },
                  {
                    name: 'Hlobane SP2',
                    ward:['6', '7']
                  }
                ]
              },
              {
                names: 'Itala',
                surburb: [
                  {
                    name: 'Itala Nature Reserve',
                    ward:['1']
                  }
                ]
              },
              {
                names: 'Kandaspunt',
                surburb: [
                  {
                    name: 'Kandas Prison',
                    ward:['15']
                  }
                ]
              },
              {
                names: 'Kengolana',
                surburb: [
                  {
                    name: 'Kengolana SP',
                    ward:['6']
                  }
                ]
              },
              {
                names: 'Kromellenboog',
                surburb: [
                  {
                    name: 'Kromellenboog SP',
                    ward:['5', '7', '12']
                  }
                ]
              },
              {
                names: 'KwaMabona',
                surburb: [
                  {
                    name: 'KwaMabona SP',
                    ward:['12', '20']
                  }
                ]
              },
              {
                names: 'KwaManyinyi',
                surburb: [
                  {
                    name: 'KwaManyinyi SP',
                    ward:['1']
                  }
                ]
              },
              {
                names: 'KwaMnyathi',
                surburb: [
                  {
                    name: 'KwaMnyathi SP',
                    ward:['5']
                  }
                ]
              },
              {
                names: 'KwaNgenetsheni',
                surburb: [
                  {
                    name: 'KwaNgenetsheni SP1',
                    ward:['3']
                  },
                  {
                    name: 'KwaNgenetsheni SP2',
                    ward:['2']
                  }
                ]
              },
              {
                names: 'Loss',
                surburb: [
                  {
                    name: 'Loss SP1',
                    ward:['14']
                  },
                  {
                    name: 'Loss SP2',
                    ward:['14']
                  }
                ]
              },
              {
                names: 'Louwsburg',
                surburb: [
                  {
                    name: 'Louwsburg SP',
                    ward:['1']
                  }
                ]
              },
              {
                names: 'Machanca',
                surburb: [
                  {
                    name: 'Machanca SP1',
                    ward:['17']
                  },
                  {
                    name: 'Machanca SP2',
                    ward:['17']
                  }
                ]
              },
              {
                names: 'Mayime',
                surburb: [
                  {
                    name: 'Mayime SP',
                    ward:['1', '2']
                  }
                ]
              },
              {
                names: 'Mkhonjane',
                surburb: [
                  {
                    name: 'Mkhonjane SP',
                    ward:['13', '15', '16']
                  }
                ]
              },
              {
                names: 'Mondlo',
                surburb: [
                  {
                    name: 'Mondlo SP',
                    ward:['12', '18', '19', '20', '21']
                  },
                  {
                    name: 'Mondlo Unit A',
                    ward:['16', '17', '18', '21']
                  },
                  {
                    name: 'Mondlo Unit B',
                    ward:['12', '17','18', '19', '20']
                  }
                ]
              },
              {
                names: 'Nceceni',
                surburb: [
                  {
                    name: 'Nceceni SP',
                    ward:['17']
                  }
                ]
              },
              {
                names: 'Ngome',
                surburb: [
                  {
                    name: 'Ngome State Forest',
                    ward:['1', '2', '17', '21']
                  }
                ]
              },
              {
                names: 'Ngotshe',
                surburb: [
                  {
                    name: 'Ngotshe SP',
                    ward:['3', '6']
                  }
                ]
              },
              {
                names: 'Nkongolwane',
                surburb: [
                  {
                    name: 'Nkongolwane SP',
                    ward:['6', '7']
                  }
                ]
              },
              {
                names: 'Ntabebomvu',
                surburb: [
                  {
                    name: 'Ntabebomvu SP',
                    ward:['15']
                  }
                ]
              },
              {
                names: 'Purim Farm',
                surburb: [
                  {
                    name: 'Purim Farm SP',
                    ward:['12', '15', '16', '21']
                  }
                ]
              },
              {
                names: 'Saint Paul',
                surburb: [
                  {
                    name: 'Saint Paul SP',
                    ward:['15']
                  }
                ]
              },
              {
                names: 'Shayandawo',
                surburb: [
                  {
                    name: 'Shayandawo SP',
                    ward:['14']
                  }
                ]
              },
              {
                names: 'Shilengeni',
                surburb: [
                  {
                    name: 'Shilengeni SP',
                    ward:['2', '3']
                  }
                ]
              },
              {
                names: 'Sofaya',
                surburb: [
                  {
                    name: 'Sofaya SP',
                    ward:['14']
                  }
                ]
              },
              {
                names: 'Squebezi',
                surburb: [
                  {
                    name: 'Squebezi SP',
                    ward:['2', '3']
                  }
                ]
              },

              {
                names: 'Telezeni',
                surburb: [
                  {
                    name: 'Telezeni SP',
                    ward:['15', '16', '21']
                  }
                ]
              },
              {
                names: 'Umkhamba',
                surburb: [
                  {
                    name: 'Umkhamba SP',
                    ward:['3', '6']
                  }
                ]
              },
              {
                names: 'Uqweqwe',
                surburb: [
                  {
                    name: 'Uqweqwe SP',
                    ward:['14']
                  }
                ]
              },{
                names: 'Vaalbank',
                surburb: [
                  {
                    name: 'Vaalbank SP',
                    ward:['6', '7']
                  }
                ]
              },
              {
                names: 'Vryheid',
                surburb: [
                  {
                    name: 'Bhekuzulu',
                    ward:['7', '10', '11', '13', '22']
                  },
                  {
                    name: 'Vryheid East SP',
                    ward:['7', '11', '13']
                  },
                  {
                    name: 'Vryheid SP',
                    ward:['7', '8', '9','10', '11', '13', '22']
                  }
                ]
              },

            ]
          },
          {
            name: 'eDumbe',
            city: [
              {
                names: 'Balmoral',
                surburb: [
                  {
                    name: 'Balmoral SP',
                    ward: ['5', '6']
                  }
                ]
              },
              {
                names: 'Barofine',
                surburb: [
                  {
                    name: 'Barofine SP',
                    ward: ['7']
                  }
                ]
              },
              {
                names: 'Bellemmerd',
                surburb: [
                  {
                    name: 'Bellemmerd SP',
                    ward: ['1','5', '6', '7']
                  }
                ]
              },
              {
                names: 'Bethane',
                surburb: [
                  {
                    name: 'Bethane SP',
                    ward: ['6']
                  }
                ]
              },
              {
                names: 'Blinkwater',
                surburb: [
                  {
                    name: 'Blinkwater SP',
                    ward: ['2', '4', '8']
                  }
                ]
              },
              {
                names: 'Diamant',
                surburb: [
                  {
                    name: 'Diamant SP',
                    ward: ['2', '4', '6']
                  }
                ]
              },
              {
                names: 'Dordrecht',
                surburb: [
                  {
                    name: 'Dordrecht SP',
                    ward: ['2', '4', '5', '8']
                  }
                ]
              },
              {
                names: 'eDumbe',
                surburb: [
                  {
                    name: 'eDumbe SP',
                    ward: ['1', '3', '8']
                  }
                ]
              },
              {
                names: 'eDumbe NU',
                surburb: [
                  {
                    name: 'eDumbe NU',
                    ward: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '15', '22']
                  }
                ]
              },
              {
                names: 'Eersteling',
                surburb: [
                  {
                    name: 'Eersteling SP',
                    ward: ['6']
                  }
                ]
              },
              {
                names: 'Frischgewaagd',
                surburb: [
                  {
                    name: 'Frischgewaagd SP',
                    ward: ['2', '4']
                  }
                ]
              },
              {
                names: 'Gontshi',
                surburb: [
                  {
                    name: 'Gontshi SP',
                    ward: ['5', '8']
                  }
                ]
              },

              {
                names: 'Gunstelling',
                surburb: [
                  {
                    name: 'Gunstelling SP',
                    ward: ['3', '6', '9']
                  }
                ]
              },
              {
                names: 'Helpmekaar A',
                surburb: [
                  {
                    name: 'Helpmekaar A SP',
                    ward: ['7', '8']
                  }
                ]
              },
              {
                names: 'Helpmekaar B',
                surburb: [
                  {
                    name: 'Helpmekaar B SP',
                    ward: ['5', '7', '8']
                  }
                ]
              },

              {
                names: 'Holspruit A',
                surburb: [
                  {
                    name: 'Holspruit A SP',
                    ward: ['5', '6']
                  }
                ]
              },
              {
                names: 'Holspruit B',
                surburb: [
                  {
                    name: 'Holspruit B SP',
                    ward: ['1', '15']
                  }
                ]
              },
              {
                names: 'Kleinfontein',
                surburb: [
                  {
                    name: 'Kleinfontein SP',
                    ward: ['5', '6']
                  }
                ]
              },
              {
                names: 'Klipspruit',
                surburb: [
                  {
                    name: 'Klipspruit SP',
                    ward: ['2', '4', '8']
                  }
                ]
              },
              {
                names: 'Krommellenboog',
                surburb: [
                  {
                    name: 'Krommellenboog SP',
                    ward: ['6', '9']
                  }
                ]
              },
              {
                names: 'KwaGedlase',
                surburb: [
                  {
                    name: 'KwaGedlase SP',
                    ward: ['6', '7']
                  }
                ]
              },
              {
                names: 'Lujojwana',
                surburb: [
                  {
                    name: 'Lujojwana SP',
                    ward: ['6']
                  }
                ]
              },


              {
                names: 'Mahloni',
                surburb: [
                  {
                    name: 'Mahloni SP',
                    ward: ['7']
                  }
                ]
              },
              {
                names: 'Mahlosani',
                surburb: [
                  {
                    name: 'Mahlosani SP',
                    ward: ['5', '6']
                  }
                ]
              },
              {
                names: 'Meilieplaat',
                surburb: [
                  {
                    name: 'Meilieplaat SP',
                    ward: ['6']
                  }
                ]
              },
              {
                names: 'Mqongwane',
                surburb: [
                  {
                    name: 'Mqongwane SP',
                    ward: ['6']
                  }
                ]
              },
              
              {
                names: 'Msizini',
                surburb: [
                  {
                    name: 'Msizini SP',
                    ward: ['6', '9']
                  }
                ]
              },
              
              {
                names: 'Natal Spa',
                surburb: [
                  {
                    name: 'Natal Spa SP',
                    ward: ['7']
                  }
                ]
              },
              
              {
                names: 'Noukloof A',
                surburb: [
                  {
                    name: 'Noukloof A SP',
                    ward: ['2', '8']
                  }
                ]
              },
              
              {
                names: 'Noukloof B',
                surburb: [
                  {
                    name: 'Noukloof B SP',
                    ward: ['5', '8']
                  }
                ]
              },
              
              {
                names: 'Noukraal',
                surburb: [
                  {
                    name: 'Noukraal SP',
                    ward: ['5']
                  }
                ]
              },
              
              {
                names: 'Opuzane',
                surburb: [
                  {
                    name: 'Opuzane SP',
                    ward: ['5', '7', '8']
                  }
                ]
              },
              
              {
                names: 'Paulpietersburg',
                surburb: [
                  {
                    name: 'Paulpietersburg SP',
                    ward: ['1', '3', '7', '8']
                  }
                ]
              },
              
              {
                names: 'Pivaanspoort',
                surburb: [
                  {
                    name: 'Pivaanspoort SP',
                    ward: ['5', '7']
                  }
                ]
              },
              
              {
                names: 'Riversdale',
                surburb: [
                  {
                    name: 'Riversdale SP',
                    ward: ['2','5', '6']
                  }
                ]
              },
              
              {
                names: 'Schuzwekrans',
                surburb: [
                  {
                    name: 'Schuzwekrans SP',
                    ward: ['1', '6', '7']
                  }
                ]
              },
              
              {
                names: 'Scottshill',
                surburb: [
                  {
                    name: 'Scottshill SP',
                    ward: ['6']
                  }
                ]
              }, 
              {
                names: 'Simdlangentsha',
                surburb: [
                  {
                    name: 'Simdlangentsha SP',
                    ward: ['5', '8']
                  }
                ]
              },
              
              {
                names: 'Tamboekiesdraai',
                surburb: [
                  {
                    name: 'Tamboekiesdraai SP',
                    ward: ['6']
                  }
                ]
              },
              
              {
                names: 'Vlakplaas',
                surburb: [
                  {
                    name: 'Vlakplaas SP',
                    ward: ['5', '6']
                  }
                ]
              },

              
              {
                names: 'Waterval',
                surburb: [
                  {
                    name: 'Waterval SP',
                    ward: ['5']
                  }
                ]
              }

            ]
          },
          {
            name: 'Nongoma',
            city: [
              {
                names: 'Bambelentulo',
                surburb: [
                  {
                    name: 'Bambelentulo SP',
                    ward: ['5', '6', '18', '20']
                  }
                ]
              },
              {
                names: 'Bangamaya',
                surburb: [
                  {
                    name: 'Bangamaya SP',
                    ward: ['3', '18']
                  }
                ]
              },
              {
                names: 'Bendle',
                surburb: [
                  {
                    name: 'Bendle SP',
                    ward: ['11']
                  }
                ]
              },
              {
                names: 'Bhanganomo',
                surburb: [
                  {
                    name: 'Bhanganomo SP',
                    ward: ['1']
                  }
                ]
              },
              {
                names: 'Bhekumteto',
                surburb: [
                  {
                    name: 'Bhekumteto SP',
                    ward: ['8']
                  }
                ]
              },
              {
                names: 'Bombolo',
                surburb: [
                  {
                    name: 'Mpumulwana',
                    ward: ['2']
                  }
                ]
              },
              {
                names: 'Bombolo A',
                surburb: [
                  {
                    name: 'Bombolo A SP',
                    ward: ['1', '2']
                  }
                ]
              },

              {
                names: 'Bombolo B',
                surburb: [
                  {
                    name: 'Bombolo B SP',
                    ward: ['2']
                  }
                ]
              },{
                names: 'Buhlenibenkosi',
                surburb: [
                  {
                    name: 'Buhlenibenkosi SP',
                    ward: ['2']
                  }
                ]
              },

              {
                names: 'Bukalini',
                surburb: [
                  {
                    name: 'Bukalini SP',
                    ward: ['4', '6']
                  }
                ]
              },
              {
                names: 'Bululwane',
                surburb: [
                  {
                    name: 'Bululwane SP',
                    ward: ['1', '15', '21']
                  },
                  {
                    name: 'Ngoqongo',
                    ward: ['15']
                  },
                  {
                    name: 'Odengeni',
                    ward: ['16', '20']
                  }
                ]
              },
              {
                names: 'Bungazeleni A',
                surburb: [
                  {
                    name: 'Bungazeleni A SP',
                    ward: ['20']
                  }
                ]
              },
              {
                names: 'Bungazeleni B',
                surburb: [
                  {
                    name: 'Bungazeleni B SP',
                    ward: ['5' ,'18']
                  }
                ]
              },
              {
                names: 'Cekeni',
                surburb: [
                  {
                    name: 'Cekeni SP',
                    ward: ['20']
                  }
                ]
              },
              {
                names: 'Cisho',
                surburb: [
                  {
                    name: 'Cisho SP',
                    ward: ['2']
                  }
                ]
              },
              {
                names: 'Dayeni',
                surburb: [
                  {
                    name: 'Dayeni A SP',
                    ward: ['5', '13', '14']
                  },
                  {
                    name: 'Dayeni B SP',
                    ward: ['14']
                  }
                ]
              },
              {
                names: 'Dengeni A',
                surburb: [
                  {
                    name: 'Dengeni A SP',
                    ward: ['6', '8']
                  }
                ]
              },
              {
                names: 'Dengeni B',
                surburb: [
                  {
                    name: 'Dengeni B SP',
                    ward: ['6']
                  }
                ]
              },
              {
                names: 'Dleka',
                surburb: [
                  {
                    name: 'Dleka SP',
                    ward: ['1', '3', '18']
                  }
                ]
              },
              {
                names: 'Dongothuli',
                surburb: [
                  {
                    name: 'Dongothuli A SP',
                    ward: ['7']
                  },
                  {
                    name: 'Dongothuli B SP',
                    ward: ['2','7']
                  },
                  {
                    name: 'Dongothuli C SP',
                    ward: ['7']
                  }
                ]
              },
              {
                names: 'Ebumba',
                surburb: [
                  {
                    name: 'Ebumba SP',
                    ward: ['2']
                  }
                ]
              },
              {
                names: 'Efete',
                surburb: [
                  {
                    name: 'Efete SP',
                    ward: ['17']
                  }
                ]
              },

              {
                names: 'Ekujabuleni',
                surburb: [
                  {
                    name: 'Ekujabuleni SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'Emcebo',
                surburb: [
                  {
                    name: 'Emcebo SP',
                    ward: ['4', '20']
                  }
                ]
              },
              {
                names: 'Enengeni',
                surburb: [
                  {
                    name: 'Enengeni A SP',
                    ward: ['16', '21']
                  },
                  {
                    name: 'Enengeni B SP',
                    ward: ['21']
                  }
                ]
              },
              {
                names: 'Enkananeni',
                surburb: [
                  {
                    name: 'Enkananeni A SP',
                    ward: ['7']
                  },
                  {
                    name: 'Enkananeni B SP',
                    ward: ['2','7']
                  },
                ]
              },

              {
                names: 'Entweni',
                surburb: [
                  {
                    name: 'Dwadweni',
                    ward: ['1','5']
                  },
                  {
                    name: 'Entweni A SP',
                    ward: ['1']
                  },
                  {
                    name: 'Entweni B SP',
                    ward: ['1','2']
                  }
                ]
              },
              {
                names: 'Esigwegweni',
                surburb: [
                  {
                    name: 'Esigwegweni SP',
                    ward: ['13', '14']
                  }
                ]
              },
              {
                names: 'Esiphambanweni',
                surburb: [
                  {
                    name: 'Esiphambanweni SP',
                    ward: ['4', '6', '20']
                  }
                ]
              },
              {
                names: 'Esiphethwini',
                surburb: [
                  {
                    name: 'Esiphethwini SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'Ezilonyeni',
                surburb: [
                  {
                    name: 'Ezilonyeni SP',
                    ward: ['13', '14', '21']
                  }
                ]
              },

              {
                names: 'Fakude',
                surburb: [
                  {
                    name: 'Fakude SP',
                    ward: ['5']
                  }
                ]
              },
              {
                names: 'Gagasini',
                surburb: [
                  {
                    name: 'Gagasini SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'Gudu',
                surburb: [
                  {
                    name: 'Gudu SP',
                    ward: ['7']
                  }
                ]
              },
              {
                names: 'Guqe',
                surburb: [
                  {
                    name: 'Guqe SP',
                    ward: ['15']
                  }
                ]
              },
              {
                names: 'Gusenzamo',
                surburb: [
                  {
                    name: 'Gusenzamo SP',
                    ward: ['12', '15']
                  }
                ]
              },
              {
                names: 'Gwebu',
                surburb: [
                  {
                    name: 'Gwebu SP',
                    ward: ['4', '7', '8']
                  }
                ]
              },

              {
                names: 'Hawini',
                surburb: [
                  {
                    name: 'Hawini SP',
                    ward: ['7', '8']
                  },
                  {
                    name: 'Obhicini',
                    ward: ['8']
                  }
                ]
              },

              {
                names: 'Hlanzeni',
                surburb: [
                  {
                    name: 'Hlanzeni SP',
                    ward: ['2']
                  }
                ]
              },
              {
                names: 'Hlathidumayo',
                surburb: [
                  {
                    name: 'Hlathidumayo SP',
                    ward: ['11', '12']
                  }
                ]
              },
              {
                names: 'Indimhlane',
                surburb: [
                  {
                    name: 'Indimhlane SP',
                    ward: ['5']
                  }
                ]
              },
              {
                names: 'Isizinda',
                surburb: [
                  {
                    name: 'Isizinda A SP',
                    ward: ['12']
                  },
                  {
                    name: 'Isizinda B SP',
                    ward: ['12']
                  },
                  {
                    name: 'Isizinda C SP',
                    ward: ['12']
                  }
                ]
              },
              {
                names: 'Ivuna',
                surburb: [
                  {
                    name: 'Ivuna SP',
                    ward: ['13', '14']
                  }
                ]
              },
              {
                names: 'Juba',
                surburb: [
                  {
                    name: 'Juba SP',
                    ward: ['5']
                  }
                ]
              },
              {
                names: 'Khenana',
                surburb: [
                  {
                    name: 'Khenana A SP',
                    ward: ['6']
                  },
                  {
                    name: 'Khenana B SP',
                    ward: ['8']
                  }
                ]
              },
              {
                names: 'Kohlokolo',
                surburb: [
                  {
                    name: 'Kohlokolo SP',
                    ward: ['2', '14', '15']
                  }
                ]
              },{
                names: 'Kuvukeni',
                surburb: [
                  {
                    name: 'Kuvukeni A SP',
                    ward: [ '6', '10']
                  },
                  {
                    name: 'Kuvukeni A SP',
                    ward: [ '10', '11']
                  }
                ]
              },

              {
                names: 'KwaBhidli',
                surburb: [
                  {
                    name: 'KwaBhidli SP',
                    ward: ['1', '10', '11']
                  }
                ]
              },
              {
                names: 'KwaDayeni',
                surburb: [
                  {
                    name: 'KwaDayeni SP',
                    ward: ['5', '14']
                  }
                ]
              },
              {
                names: 'KwaDlabe',
                surburb: [
                  {
                    name: 'KwaDlabe SP',
                    ward: ['4', '9',  '20']
                  }
                ]
              },
              {
                names: 'KwaDlakuse',
                surburb: [
                  {
                    name: 'KwaDlakuse SP',
                    ward: ['3', '14']
                  }
                ]
              },
              {
                names: 'KwaGasela',
                surburb: [
                  {
                    name: 'KwaGasela SP',
                    ward: ['16', '17']
                  }
                ]
              },
              {
                names: 'KwaGcobamadolo',
                surburb: [
                  {
                    name: 'KwaGcobamadolo SP',
                    ward: ['13']
                  }
                ]
              },

              {
                names: 'KwaGudlintaba',
                surburb: [
                  {
                    name: 'KwaGudlintaba SP',
                    ward: ['1', '20']
                  }
                ]
              },
              {
                names: 'KwaHolinyoka',
                surburb: [
                  {
                    name: 'KwaHolinyoka A SP',
                    ward: ['9', '13']
                  },
                  {
                    name: 'KwaHolinyoka B SP',
                    ward: ['9']
                  },
                  {
                    name: 'KwaHolinyoka C SP',
                    ward: ['9']
                  }
                ]
              },
              {
                names: 'KwaKati',
                surburb: [
                  {
                    name: 'KwaKati A SP',
                    ward: ['8']
                  },
                  {
                    name: 'KwaKati B SP',
                    ward: ['8']
                  }
                ]
              },
              {
                names: 'KwaLindizwe',
                surburb: [
                  {
                    name: 'KwaLindizwe A SP',
                    ward: ['4', '9']
                  },
                  {
                    name: 'KwaLindizwe B SP',
                    ward: ['4', '9']
                  }
                ]
              },
              {
                names: 'KwaMaduma',
                surburb: [
                  {
                    name: 'KwaMaduma SP',
                    ward: ['18', '20']
                  }
                ]
              },
              {
                names: 'KwaMahezu',
                surburb: [
                  {
                    name: 'KwaMahezu SP',
                    ward: ['7', '12']
                  }
                ]
              },
               {
                names: 'KwaMahlombe',
                surburb: [
                  {
                    name: 'KwaMahlombe A SP',
                    ward: ['14']
                  }
                ]
              },
               {
                names: 'KwaMajomela',
                surburb: [
                  {
                    name: 'KwaMajomela A SP',
                    ward: ['1', '17']
                  },
                  {
                    name: 'KwaMajomela B SP',
                    ward: ['16', '21']
                  },
                  {
                    name: 'Ophiyaneni',
                    ward: ['16', '17', '21']
                  }
                ]
              },
               {
                names: 'KwaMakhehla',
                surburb: [
                  {
                    name: 'KwaMakhehla SP',
                    ward: ['12', '15']
                  }
                ]
              },
              {
                names: 'KwaMandlakazi',
                surburb: [
                  {
                    name: 'KwaMandlakazi SP',
                    ward: ['10']
                  }
                ]
              }, {
                names: 'KwaManzimakhulu',
                surburb: [
                  {
                    name: 'KwaManzimakhulu SP',
                    ward: ['4']
                  }
                ]
              },
              {
                names: 'KwaMateni',
                surburb: [
                  {
                    name: 'KwaMateni SP',
                    ward: ['4', '13']
                  }
                ]
              },

              {
                names: 'KwaMbuzi',
                surburb: [
                  {
                    name: 'KwaMbuzi A SP',
                    ward: ['1', '3', '18']
                  },
                  {
                    name: 'KwaMbuzi B SP',
                    ward: [ '3', '18']
                  },
                  {
                    name: 'KwaMbuzi C SP',
                    ward: ['1', '3']
                  }
                ]
              },
              {
                names: 'KwaMememe',
                surburb: [
                  {
                    name: 'KwaMememe SP',
                    ward: ['18']
                  }
                ]
              },
              {
                names: 'KwaMngamude',
                surburb: [
                  {
                    name: 'KwaMngamude A SP',
                    ward: ['1', '3']
                  },
                  {
                    name: 'KwaMngamude B SP',
                    ward: ['1']
                  },
                  {
                    name: 'KwaMngamude C SP',
                    ward: ['1']
                  },
                  {
                    name: 'KwaMngamude D SP',
                    ward: ['3', '5']
                  }
                ]
              },
              {
                names: 'KwaMqhakanyeki',
                surburb: [
                  {
                    name: 'KwaMqhakanyeki SP',
                    ward: ['18']
                  }
                ]
              },
              {
                names: 'KwaMshanelo',
                surburb: [
                  {
                    name: 'KwaMshanelo A SP',
                    ward: ['18']
                  },
                  {
                    name: 'KwaMshanelo B SP',
                    ward: ['18']
                  }
                ]
              },

               {
                names: 'KwaMsushwana',
                surburb: [
                  {
                    name: 'KwaMsushwana SP',
                    ward: ['2', '7']
                  }
                ]
              },
               {
                names: 'KwaMthwathube',
                surburb: [
                  {
                    name: 'KwaMthwathube SP',
                    ward: ['16']
                  }
                ]
              },
              {
                names: 'KwaMusi',
                surburb: [
                  {
                    name: 'KwaMusi SP',
                    ward: ['14']
                  }
                ]
              },
              {
                names: 'KwaNcongoma',
                surburb: [
                  {
                    name: 'KwaNcongoma SP',
                    ward: ['5']
                  }
                ]
              },

              {
                names: 'KwaNjoko',
                surburb: [
                  {
                    name: 'KwaNjoko SP',
                    ward: ['1', '2', '5']
                  }
                ]
              },
              {
                names: 'KwaNkawu',
                surburb: [
                  {
                    name: 'KwaNkawu SP',
                    ward: ['1', '6', '8', '10']
                  }
                ]
              },
              {
                names: 'KwaNkulu',
                surburb: [
                  {
                    name: 'KwaNkulu SP',
                    ward: ['7', '12', '13', '14']
                  }
                ]
              },
              {
                names: 'KwaNsele',
                surburb: [
                  {
                    name: 'KwaNsele A SP',
                    ward: ['14']
                  },
                  {
                    name: 'KwaNsele B SP',
                    ward: ['14']
                  }
                ]
              },
              {
                names: 'KwaPangode',
                surburb: [
                  {
                    name: 'KwaPangode SP',
                    ward: ['5', '7', '14']
                  }
                ]
              },

              {
                names: 'KwaSheleza',
                surburb: [
                  {
                    name: 'KwaSheleza SP',
                    ward: ['12']
                  }
                ]
              },
               {
                names: 'KwaSoshamase',
                surburb: [
                  {
                    name: 'KwaSoshamase SP',
                    ward: ['14', '21']
                  }
                ]
              },
               {
                names: 'Kwatweyisa',
                surburb: [
                  {
                    name: 'Kwatweyisa SP',
                    ward: ['5']
                  }
                ]
              },
              {
                names: 'KwaYiphethe',
                surburb: [
                  {
                    name: 'KwaYiphethe A SP',
                    ward: ['9', '19']
                  },
                  {
                    name: 'KwaYiphethe B SP',
                    ward: ['9', '16', '21']
                  },
                  {
                    name: 'KwaYiphethe C SP',
                    ward: ['4']
                  }
                ]
              },
              {
                names: 'Macekaneni',
                surburb: [
                  {
                    name: 'Macekaneni SP',
                    ward: ['11', '12']
                  }
                ]
              },
              {
                names: 'Machibini',
                surburb: [
                  {
                    name: 'Machibini SP',
                    ward: ['1']
                  }
                ]
              },
              {
                names: 'Madwaleni',
                surburb: [
                  {
                    name: 'Madwaleni A SP',
                    ward: ['1', '3', '20']
                  },
                  {
                    name: 'Madwaleni B SP',
                    ward: ['1']
                  }
                ]
              },
              {
                names: 'Magutshwa',
                surburb: [
                  {
                    name: 'Magutshwa SP',
                    ward: ['10']
                  }
                ]
              },

               {
                names: 'Mahashem',
                surburb: [
                  {
                    name: 'Mahashem SP',
                    ward: ['2', '17', '21']
                  }
                ]
              },
               {
                names: 'Makeme',
                surburb: [
                  {
                    name: 'Makeme SP',
                    ward: ['11']
                  }
                ]
              },
               {
                names: 'Malomeni',
                surburb: [
                  {
                    name: 'Malomeni SP',
                    ward: ['1']
                  }
                ]
              },
               {
                names: 'Manhlanhla',
                surburb: [
                  {
                    name: 'Manhlanhla SP',
                    ward: ['12']
                  }
                ]
              },
              {
                names: 'Manqashi',
                surburb: [
                  {
                    name: 'Manqashi SP',
                    ward: ['4', '6']
                  }
                ]
              },
               {
                names: 'Manqushana',
                surburb: [
                  {
                    name: 'Manqushana A SP',
                    ward: ['2', '5']
                  },
                  {
                    name: 'Manqushana A SP',
                    ward: ['6', '20']
                  }
                ]
              },
              {
                names: 'Maphophoma',
                surburb: [
                  {
                    name: 'Maphophoma A SP',
                    ward: ['4', '10', '12']
                  },
                  {
                    name: 'Maphophoma B SP',
                    ward: ['10']
                  }
                ]
              },
               {
                names: 'Maphundu',
                surburb: [
                  {
                    name: 'Maphundu A SP',
                    ward: ['1']
                  },
                  {
                    name: 'Maphundu A SP',
                    ward: ['1', '2']
                  }
                ]
              },

              {
                names: 'Maqhomfini',
                surburb: [
                  {
                    name: 'Maqhomfini SP',
                    ward: ['2', '6', '7']
                  }
                ]
              },
               {
                names: 'Matsheketshe',
                surburb: [
                  {
                    name: 'Matsheketshe A SP',
                    ward: ['2']
                  },
                  {
                    name: 'Matsheketshe B SP',
                    ward: ['2']
                  }
                ]
              },
              {
                names: 'Matshemhlophe',
                surburb: [
                  {
                    name: 'Matshemhlophe SP',
                    ward: ['12']
                  }
                ]
              },
              {
                names: 'Maye',
                surburb: [
                  {
                    name: 'Maye A SP',
                    ward: ['10', '11']
                  },
                  {
                    name: 'Maye B SP',
                    ward: [ '11']
                  },
                  {
                    name: 'Maye C SP',
                    ward: ['11']
                  },
                  {
                    name: 'Maye D SP',
                    ward: ['11']
                  }
                ]
              },
              {
                names: 'Mayoni',
                surburb: [
                  {
                    name: 'Mayoni SP',
                    ward: ['18', '20']
                  }
                ]
              },
              {
                names: 'Mbebe',
                surburb: [
                  {
                    name: 'Mbebe SP',
                    ward: ['7']
                  }
                ]
              },
              {
                names: 'Mbizaneni',
                surburb: [
                  {
                    name: 'Mbizaneni SP',
                    ward: ['11']
                  }
                ]
              }, {
                names: 'Mbokodweni',
                surburb: [
                  {
                    name: 'Mbokodweni A SP',
                    ward: ['4', '12', '13']
                  },
                  {
                    name: 'Mbokodweni B SP',
                    ward: ['9', '13']
                  }
                ]
              },
              {
                names: 'Mbuda',
                surburb: [
                  {
                    name: 'Mbuda SP',
                    ward: ['3']
                  }
                ]
              }, {
                names: 'Meyama',
                surburb: [
                  {
                    name: 'Meyama SP',
                    ward: ['18']
                  }
                ]
              },
               {
                names: 'Mhambuma',
                surburb: [
                  {
                    name: 'Mhambuma SP',
                    ward: ['14', '15']
                  }
                ]
              },
              {
                names: 'Mjeni',
                surburb: [
                  {
                    name: 'Mjeni SP',
                    ward: ['15']
                  }
                ]
              },
              {
                names: 'Mkiwaneni',
                surburb: [
                  {
                    name: 'Mkiwaneni A SP',
                    ward: ['6', '7']
                  },
                  {
                    name: 'Mkiwaneni B SP',
                    ward: ['1']
                  }
                ]
              },
              {
                names: 'Mngxanyeni',
                surburb: [
                  {
                    name: 'Mngxanyeni SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'Mpakaneni',
                surburb: [
                  {
                    name: 'Mpakaneni A SP',
                    ward: ['14']
                  },
                  {
                    name: 'Mpakaneni B SP',
                    ward: ['14']
                  }
                ]
              },
              {
                names: 'Mpisini',
                surburb: [
                  {
                    name: 'Mpisini SP',
                    ward: ['5']
                  }
                ]
              },
              {
                names: 'Mpompo',
                surburb: [
                  {
                    name: 'Mpompo SP',
                    ward: ['5']
                  }
                ]
              },


              {
                names: 'Mpumalanga',
                surburb: [
                  {
                    name: 'Mpumalanga SP',
                    ward: ['21']
                  }
                ]
              }, 
              {
                names: 'Mpumulwana',
                surburb: [
                  {
                    name: 'Mpumulwana SP',
                    ward: ['2']
                  }
                ]
              },
              {
                names: 'Mpunzana',
                surburb: [
                  {
                    name: 'Mpunzana SP',
                    ward: ['16', '21']
                  }
                ]
              },
              {
                names: 'Mpuphusi',
                surburb: [
                  {
                    name: 'Mpuphusi SP',
                    ward: ['3', '5']
                  }
                ]
              },
              {
                names: 'Bambelentulo',
                surburb: [
                  {
                    name: 'Bambelentulo SP',
                    ward: ['5', '6', '18', '20']
                  }
                ]
              },
              {
                names: 'Mpuqwini A',
                surburb: [
                  {
                    name: 'Mpuqwini A SP',
                    ward: ['7', '8']
                  }
                ]
              },
              {
                names: 'Mpuqwini B',
                surburb: [
                  {
                    name: 'Mpuqwini B SP',
                    ward: ['7']
                  }
                ]
              },
              {
                names: 'Msebe',
                surburb: [
                  {
                    name: 'Msebe SP',
                    ward: ['5']
                  }
                ]
              },
              {
                names: 'Mshika',
                surburb: [
                  {
                    name: 'Mshika SP',
                    ward: ['10']
                  }
                ]
              },
              {
                names: 'Msunduze',
                surburb: [
                  {
                    name: 'Msunduze SP',
                    ward: ['2']
                  }
                ]
              },
              {
                names: 'Mtakayise',
                surburb: [
                  {
                    name: 'Mtakayise SP',
                    ward: ['3']
                  }
                ]
              },

              {
                names: 'Mthonjane',
                surburb: [
                  {
                    name: 'Mthonjane SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'Mthwala',
                surburb: [
                  {
                    name: 'Mthwala A SP',
                    ward: ['1', '11']
                  },
                  {
                    name: 'Mthwala B SP',
                    ward: ['11']
                  },
                  {
                    name: 'Mthwala C SP',
                    ward: ['11']
                  }
                ]
              },
              {
                names: 'Mvulazi',
                surburb: [
                  {
                    name: 'Mvulazi A SP',
                    ward: ['8']
                  },
                  {
                    name: 'Mvulazi B SP',
                    ward: ['7','8']
                  },
                  {
                    name: 'Mvulazi C SP',
                    ward: ['7']
                  }
                ]
              },{
                names: 'Ncemaneni',
                surburb: [
                  {
                    name: 'Ncemaneni SP',
                    ward: ['8']
                  }
                ]
              },

              {
                names: 'Ncungu',
                surburb: [
                  {
                    name: 'Ncungu SP',
                    ward: ['16', '21']
                  }
                ]
              },
              {
                names: 'Ndlozana',
                surburb: [
                  {
                    name: 'Ndlozana A SP',
                    ward: ['10', '11']
                  },
                  {
                    name: 'Ndlozana B SP',
                    ward: ['11']
                  }
                ]
              },
              {
                names: 'Ndololwane',
                surburb: [
                  {
                    name: 'Ndololwane SP',
                    ward: ['4', '10']
                  }
                ]
              },
              {
                names: 'Ndunyeni',
                surburb: [
                  {
                    name: 'Ndunyeni SP',
                    ward: ['10']
                  }
                ]
              },
              {
                names: 'Ngolotshe A',
                surburb: [
                  {
                    name: 'Ngolotshe A SP',
                    ward: ['11']
                  }
                ]
              },
              {
                names: 'Ngolotshe B',
                surburb: [
                  {
                    name: 'Ngolotshe B SP',
                    ward: ['1', '11']
                  }
                ]
              },
              {
                names: 'Ngonyamaneni',
                surburb: [
                  {
                    name: 'Ngonyamaneni SP',
                    ward: ['16', '18']
                  }
                ]
              },
              {
                names: 'Ngoqongo A',
                surburb: [
                  {
                    name: 'Ngoqongo A SP',
                    ward: ['1', '15', '21']
                  }
                ]
              },
              {
                names: 'Ngoqongo B',
                surburb: [
                  {
                    name: 'Ngoqongo B SP',
                    ward: ['1', '15', '21']
                  }
                ]
              },
              {
                names: 'Ngoqongo C',
                surburb: [
                  {
                    name: 'Ngoqongo C SP',
                    ward: ['15', '21']
                  }
                ]
              },

              {
                names: 'Ngoshe',
                surburb: [
                  {
                    name: 'Ngoshe SP',
                    ward: ['15']
                  }
                ]
              },
              {
                names: 'Ngqungqu',
                surburb: [
                  {
                    name: 'Ngqungqu SP',
                    ward: ['1', '10', '11']
                  }
                ]
              },
              {
                names: 'Ngware',
                surburb: [
                  {
                    name: 'Ngware SP',
                    ward: ['12']
                  }
                ]
              },
              {
                names: 'Nhleleni',
                surburb: [
                  {
                    name: 'Nhleleni SP',
                    ward: ['3', '18']
                  }
                ]
              },


              {
                names: 'Nhlophenkulu A',
                surburb: [
                  {
                    name: 'Nhlophenkulu A SP',
                    ward: [ '16', '18']
                  }
                ]
              },
              {
                names: 'Nhlophenkulu B',
                surburb: [
                  {
                    name: 'Nhlophenkulu B SP',
                    ward: ['16']
                  }
                ]
              },
              {
                names: 'Njampela A',
                surburb: [
                  {
                    name: 'Njampela A SP',
                    ward: ['4', '9', '13']
                  }
                ]
              },
              {
                names: 'Njampela B',
                surburb: [
                  {
                    name: 'Njampela B SP',
                    ward: ['4']
                  }
                ]
              },
              {
                names: 'Njampela C',
                surburb: [
                  {
                    name: 'Njampela C SP',
                    ward: ['4']
                  }
                ]
              },

              {
                names: 'Nkonjeni',
                surburb: [
                  {
                    name: 'Nkonjeni A SP',
                    ward: ['4']
                  },
                  {
                    name: 'Nkonjeni B SP',
                    ward: ['6', '8']
                  }
                ]
              },
              {
                names: 'Nkungwini',
                surburb: [
                  {
                    name: 'Nkungwini A SP',
                    ward: ['2', '7']
                  },
                  {
                    name: 'Nkungwini B SP',
                    ward: ['7', '8']
                  }
                ]
              },
              {
                names: 'Nkunzana',
                surburb: [
                  {
                    name: 'Nkunzana SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'Nkuwuwini',
                surburb: [
                  {
                    name: 'Nkuwuwini SP',
                    ward: ['2']
                  }
                ]
              },
              {
                names: 'Nkweme',
                surburb: [
                  {
                    name: 'Nkweme A SP',
                    ward: ['2']
                  },
                  {
                    name: 'Nkweme B SP',
                    ward: ['2']
                  },
                  {
                    name: 'Nkweme C SP',
                    ward: ['2', '7']
                  },
                  {
                    name: 'Nkweme D SP',
                    ward: ['2']
                  }
                ]
              },
              {
                names: 'Nongoma',
                surburb: [
                  {
                    name: 'Nongoma SP',
                    ward: ['9', '16', '19', '20']
                  }
                ]
              },
              {
                names: 'Nongoma NU',
                surburb: [
                  {
                    name: 'Nongoma NU',
                    ward: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21']
                  }
                ]
              },
              {
                names: 'Nqokotho',
                surburb: [
                  {
                    name: 'Nqokotho A SP',
                    ward: ['16', '20']
                  },
                  {
                    name: 'Nqokotho B SP',
                    ward: ['16', '18', '20']
                  },
                  {
                    name: 'Nqokotho C SP',
                    ward: ['16']
                  },
                ]
              },
              {
                names: 'Nqulu',
                surburb: [
                  {
                    name: 'Nqulu SP',
                    ward: ['2']
                  }
                ]
              },
              {
                names: 'Ntabayezulu',
                surburb: [
                  {
                    name: 'Ntabayezulu SP',
                    ward: ['1']
                  }
                ]
              },
              {
                names: 'Ntoshoweni',
                surburb: [
                  {
                    name: 'Ntoshoweni SP',
                    ward: ['10', '11']
                  }
                ]
              },{
                names: 'Ntweni',
                surburb: [
                  {
                    name: 'Ntweni A SP',
                    ward: ['1']
                  },
                  {
                    name: 'Ntweni B SP',
                    ward: ['1', '5']
                  }
                ]
              },
              {
                names: 'Nyathini',
                surburb: [
                  {
                    name: 'Nyathini SP',
                    ward: ['2']
                  }
                ]
              },
              {
                names: 'Nzamangamandla',
                surburb: [
                  {
                    name: 'Nzamangamandla SP',
                    ward: ['7', '12']
                  }
                ]
              },
              {
                names: 'Nzondwane',
                surburb: [
                  {
                    name: 'Nzondwane SP',
                    ward: ['18']
                  }
                ]
              },
              {
                names: 'Obane',
                surburb: [
                  {
                    name: 'Obane SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'Obhuqwini',
                surburb: [
                  {
                    name: 'Obhuqwini SP',
                    ward: ['21']
                  }
                ]
              },
              {
                names: 'Odishweni',
                surburb: [
                  {
                    name: 'Odishweni SP',
                    ward: ['6']
                  }
                ]
              },
              {
                names: 'Ogedleni',
                surburb: [
                  {
                    name: 'Ogedleni A SP',
                    ward: ['3']
                  },
                  {
                    name: 'Ogedleni B SP',
                    ward: ['3']
                  },
                  {
                    name: 'Ogedleni C SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'Okhalweni',
                surburb: [
                  {
                    name: 'Okhalweni SP',
                    ward: ['3', '14']
                  }
                ]
              },
              {
                names: 'Okledeni',
                surburb: [
                  {
                    name: 'Okledeni SP',
                    ward: ['8']
                  }
                ]
              },
              {
                names: 'Osingisiningi',
                surburb: [
                  {
                    name: 'Osingisiningi SP',
                    ward: ['4']
                  }
                ]
              },
              {
                names: 'Osuthu',
                surburb: [
                  {
                    name: 'Osuthu SP',
                    ward: ['15']
                  }
                ]
              },
              {
                names: 'Othandweni',
                surburb: [
                  {
                    name: 'Othandweni SP',
                    ward: ['1', '2', '17', '21']
                  }
                ]
              },
              {
                names: 'Othinsangu',
                surburb: [
                  {
                    name: 'Othinsangu A  SP',
                    ward: ['10', '11']
                  },
                  {
                    name: 'Othinsangu B SP',
                    ward: ['2', '7']
                  },
                  {
                    name: 'Othinsangu C SP',
                    ward: ['11']
                  }
                ]
              },

              {
                names: 'Phaphasi',
                surburb: [
                  {
                    name: 'Phaphasi SP',
                    ward: ['5']
                  }
                ]
              },
              {
                names: 'Potukulu',
                surburb: [
                  {
                    name: 'Potukulu A SP',
                    ward: ['2', '6']
                  },
                  {
                    name: 'Potukulu B SP',
                    ward: ['2']
                  },
                  {
                    name: 'Potukulu C SP',
                    ward: ['2', '6']
                  }
                ]
              },
              {
                names: 'Qondile',
                surburb: [
                  {
                    name: 'Qondile SP',
                    ward: ['3']
                  }
                ]
              },
              {
                names: 'Qongqo',
                surburb: [
                  {
                    name: 'Qongqo A SP',
                    ward: ['12', '13']
                  },
                  {
                    name: 'Qongqo B SP',
                    ward: [ '13', '14']
                  }
                ]
              },
              {
                names: 'Qoqoda',
                surburb: [
                  {
                    name: 'Qoqoda SP',
                    ward: ['18']
                  }
                ]
              },

              {
                names: 'Sibomvu',
                surburb: [
                  {
                    name: 'Sibomvu SP',
                    ward: ['5', '14']
                  }
                ]
              },
              {
                names: 'Sidinsi',
                surburb: [
                  {
                    name: 'Sidinsi SP',
                    ward: ['4', '6']
                  }
                ]
              },
              {
                names: 'Sigangeni',
                surburb: [
                  {
                    name: 'Sigangeni SP',
                    ward: ['4', '9', '20']
                  }
                ]
              },
              {
                names: 'Sigubudu',
                surburb: [
                  {
                    name: 'Sigubudu SP',
                    ward: ['12']
                  }
                ]
              },
              {
                names: 'Sinkonkonko',
                surburb: [
                  {
                    name: 'Sinkonkonko SP',
                    ward: ['4', '7']
                  }
                ]
              },
              {
                names: 'Sinqanda',
                surburb: [
                  {
                    name: 'Sinqanda SP',
                    ward: ['5']
                  }
                ]
              },
              {
                names: 'Siwela',
                surburb: [
                  {
                    name: 'Siwela A SP',
                    ward: ['1', '2']
                  },
                  {
                    name: 'Siwela B SP',
                    ward: ['1', '2']
                  },
                  {
                    name: 'Siwela C SP',
                    ward: ['2']
                  },
                  {
                    name: 'Siwela D SP',
                    ward: ['1']
                  },
                  {
                    name: 'Siwela E SP',
                    ward: ['1']
                  },

                  {
                    name: 'Siwela F SP',
                    ward: ['1']
                  },
                  {
                    name: 'Siwela SP',
                    ward: ['1']
                  }
                ]
              },
              {
                names: 'Sovane',
                surburb: [
                  {
                    name: 'Sovane SP',
                    ward: ['3']
                  }
                ]
              },

              {
                names: 'Thokazi',
                surburb: [
                  {
                    name: 'Mjiza',
                    ward: ['17']
                  },
                  {
                    name: 'Thokazi SP',
                    ward: ['1','17', '18']
                  }
                ]
              },
              {
                names: 'Tshonono',
                surburb: [
                  {
                    name: 'Tshonono SP',
                    ward: ['1', '4', '7', '8']
                  }
                ]
              },{
                names: 'Ubani',
                surburb: [
                  {
                    name: 'Ubani SP',
                    ward: ['1', '3']
                  }
                ]
              },
              {
                names: 'Umlaza',
                surburb: [
                  {
                    name: 'Umlaza SP',
                    ward: ['1']
                  }
                ]
              },
              {
                names: 'Usuthu',
                surburb: [
                  {
                    name: 'Usuthu SP',
                    ward: ['14', '15','21']
                  }
                ]
              },

              {
                names: 'Vilani',
                surburb: [
                  {
                    name: 'Vilani SP',
                    ward: ['20']
                  }
                ]
              },
              {
                names: 'Vimbisikhala',
                surburb: [
                  {
                    name: 'Vimbisikhala SP',
                    ward: ['4']
                  }
                ]
              },
              {
                names: 'Vungama A',
                surburb: [
                  {
                    name: 'Vungama A SP',
                    ward: ['1']
                  }
                ]
              },
              {
                names: 'Vungama B',
                surburb: [
                  {
                    name: 'Vungama B SP',
                    ward: ['1', '2']
                  }
                ]
              },
              {
                names: 'Bambelentulo',
                surburb: [
                  {
                    name: 'Bambelentulo SP',
                    ward: ['5', '6', '18', '20']
                  }
                ]
              }, {
                names: 'Wela A',
                surburb: [
                  {
                    name: 'Wela A SP',
                    ward: ['7', '8']
                  }
                ]
              },

              {
                names: 'Wela B ',
                surburb: [
                  {
                    name: 'Wela B SP',
                    ward: ['7']
                  }
                ]
              },

              {
                names: 'White City',
                surburb: [
                  {
                    name: 'White City SP',
                    ward: ['4', '9', '20']
                  }
                ]
              },
               {
                names: 'Zihlakaniphele',
                surburb: [
                  {
                    name: 'Zihlakaniphele SP',
                    ward: ['2', '5']
                  }
                ]
              },
               {
                names: 'Zomboda',
                surburb: [
                  {
                    name: 'Zomboda SP',
                    ward: ['10', '11']
                  }
                ]
              },
               {
                names: 'Zondane',
                surburb: [
                  {
                    name: 'Zondane SP',
                    ward: ['18']
                  }
                ]
              },
               {
                names: 'Zungu',
                surburb: [
                  {
                    name: 'Zungu SP',
                    ward: ['4', '10']
                  }
                ]
              },

            ]
          },
          {
            name: 'Ulundi',
            city: [
              {
                names: 'Babanango',
                surburb: [
                  {
                    name: 'Babanango SP',
                    ward: ['16']
                  }
                ]
              },
              {
                names: 'Basamlilo A',
                surburb: [
                  {
                    name: 'Basamlilo A SP',
                    ward: ['4', '21', '24']
                  }
                ]
              },
              {
                names: 'Basamlilo B',
                surburb: [
                  {
                    name: 'Basamlilo B SP',
                    ward: ['4', '24']
                  }
                ]
              },
              {
                names: 'Bayeni',
                surburb: [
                  {
                    name: 'Bayeni SP',
                    ward: ['6']
                  }
                ]
              },
              {
                names: 'Bhokweni A',
                surburb: [
                  {
                    name: 'Bhokweni A SP',
                    ward: ['7', '14']
                  }
                ]
              },
              {
                names: 'Bhokweni B',
                surburb: [
                  {
                    name: 'Bhokweni B SP',
                    ward: ['7', '8']
                  }
                ]
              },
              {
                names: 'Cengeni',
                surburb: [
                  {
                    name: 'Cengeni SP',
                    ward: ['17', '23']
                  }
                ]
              },
              {
                names: 'Ceza',
                surburb: [
                  {
                    name: 'Ceza SP',
                    ward: ['2', '5']
                  }
                ]
              },
              {
                names: 'Cinseni',
                surburb: [
                  {
                    name: 'Cinseni SP',
                    ward: ['1', '2', '15']
                  }
                ]
              },
              {
                names: 'Cisholo',
                surburb: [
                  {
                    name: 'Cisholo SP',
                    ward: ['9', '10', '17']
                  }
                ]
              },
              {
                names: 'Dindi A',
                surburb: [
                  {
                    name: 'Dindi A SP',
                    ward: ['14', '24']
                  }
                ]
              },
              {
                names: 'Dindi B',
                surburb: [
                  {
                    name: 'Dindi B SP',
                    ward: ['14', '15']
                  }
                ]
              },
              {
                names: 'Dlabane',
                surburb: [
                  {
                    name: 'Dlabane SP',
                    ward: ['4', '5', '6']
                  }
                ]
              },
              {
                names: 'Dlebe A',
                surburb: [
                  {
                    name: 'Dlebe A SP',
                    ward: ['6', '10']
                  }
                ]
              },
              {
                names: 'Dlebe B',
                surburb: [
                  {
                    name: 'Dlebe B SP',
                    ward: ['6']
                  }
                ]
              },
              {
                names: 'Dumaneni',
                surburb: [
                  {
                    name: 'Dumaneni SP',
                    ward: ['20', '24']
                  }
                ]
              },
              {
                names: 'Dwarsrivier',
                surburb: [
                  {
                    name: 'Dwarsrivier SP',
                    ward: ['17', '21', '23']
                  }
                ]
              },
              {
                names: 'Ekudubekeni',
                surburb: [
                  {
                    name: 'Ekudubekeni SP',
                    ward: ['8', '9']
                  }
                ]
              },
              {
                names: 'Ekuthuthukeni',
                surburb: [
                  {
                    name: 'Ekuthuthukeni SP',
                    ward: ['24']
                  }
                ]
              },{
                names: 'Emakhalathini',
                surburb: [
                  {
                    name: 'Emakhalathini Mine',
                    ward: ['15']
                  }
                ]
              },

              {
                names: 'Emakhalathini A',
                surburb: [
                  {
                    name: 'Emakhalathini A SP',
                    ward: ['15']
                  }
                ]
              },{
                names: 'Emakhalathini B',
                surburb: [
                  {
                    name: 'Emakhalathini B SP',
                    ward: ['11', '12', '15']
                  }
                ]
              },

              {
                names: 'Emantungwini',
                surburb: [
                  {
                    name: 'Emantungwini SP',
                    ward: ['1', '15']
                  }
                ]
              },
              {
                names: 'Emkhalaqhude',
                surburb: [
                  {
                    name: 'Emkhalaqhude SP',
                    ward: ['16']
                  }
                ]
              },
              {
                names: 'Endlovana',
                surburb: [
                  {
                    name: 'Endlovana SP',
                    ward: ['17', '21']
                  }
                ]
              },
              {
                names: 'Esikhwebezane',
                surburb: [
                  {
                    name: 'Esikhwebezane SP',
                    ward: ['1', '2', '3']
                  }
                ]
              },
              {
                names: 'Ezidwadweni',
                surburb: [
                  {
                    name: 'Ezidwadweni SP',
                    ward: ['1', '2', '3', '4']
                  }
                ]
              },
              {
                names: 'Ezihlabeni',
                surburb: [
                  {
                    name: 'Ezihlabeni SP',
                    ward: ['18', '20']
                  }
                ]
              },
              {
                names: 'Ezikhumbeni',
                surburb: [
                  {
                    name: 'Ezikhumbeni SP',
                    ward: ['4', '24']
                  }
                ]
              },{
                names: 'Ezingqaqeni',
                surburb: [
                  {
                    name: 'Ezingqaqeni SP',
                    ward: ['2']
                  }
                ]
              },

              {
                names: 'Folose',
                surburb: [
                  {
                    name: 'Folose SP',
                    ward: ['14', '24']
                  }
                ]
              },
              {
                names: 'Gazini',
                surburb: [
                  {
                    name: 'Gazini SP',
                    ward: ['3', '4']
                  }
                ]
              },
              {
                names: 'Godlankomo',
                surburb: [
                  {
                    name: 'Godlankomo SP',
                    ward: ['2', '3', '4']
                  }
                ]
              },{
                names: 'Goje',
                surburb: [
                  {
                    name: 'Goje SP',
                    ward: ['13', '17', '23']
                  }
                ]
              },

              {
                names: 'Goqo',
                surburb: [
                  {
                    name: 'Goqo SP',
                    ward: ['10']
                  }
                ]
              },
               {
                names: 'Gqalabeni',
                surburb: [
                  {
                    name: 'Gqalabeni SP',
                    ward: ['4', '6']
                  }
                ]
              },
               {
                names: 'Hlengile',
                surburb: [
                  {
                    name: 'Hlengile SP',
                    ward: ['3','16']
                  }
                ]
              },
               {
                names: 'Hlophenkulu',
                surburb: [
                  {
                    name: 'Hlophenkulu SP',
                    ward: ['24']
                  }
                ]
              },
               {
                names: 'Insukaze',
                surburb: [
                  {
                    name: 'Insukaze SP',
                    ward: ['6', '10']
                  }
                ]
              },
               {
                names: 'iThaka',
                surburb: [
                  {
                    name: 'iThaka SP',
                    ward: ['4']
                  }
                ]
              },
               {
                names: 'Izihlalo A',
                surburb: [
                  {
                    name: 'Izihlalo A SP',
                    ward: ['10']
                  }
                ]
              },
               {
                names: 'Jikaza',
                surburb: [
                  {
                    name: 'Jikaza SP',
                    ward: ['7', '8']
                  }
                ]
              },
               {
                names: 'KwaGodlankomo',
                surburb: [
                  {
                    name: 'KwaGodlankomo SP',
                    ward: ['2']
                  }
                ]
              },
               {
                names: 'KwaLiphondo',
                surburb: [
                  {
                    name: 'KwaLiphondo SP',
                    ward: ['6', '10']
                  }
                ]
              },
               {
                names: 'KwaMbambo A',
                surburb: [
                  {
                    name: 'KwaMbambo A SP',
                    ward: ['17']
                  }
                ]
              },
               {
                names: 'KwaMbambo B',
                surburb: [
                  {
                    name: 'KwaMbambo B SP',
                    ward: ['17', '21', '23']
                  }
                ]
              },
               {
                names: 'KwaNcwane',
                surburb: [
                  {
                    name: 'KwaNcwane SP',
                    ward: ['9', '11']
                  }
                ]
              },
               {
                names: 'KwaThulwane',
                surburb: [
                  {
                    name: 'KwaThulwane SP',
                    ward: ['17', '21']
                  }
                ]
              }, {
                names: 'Kweyezulu A',
                surburb: [
                  {
                    name: 'Kweyezulu A SP',
                    ward: ['16']
                  }
                ]
              },

               {
                names: 'Kweyezulu B',
                surburb: [
                  {
                    name: 'Kweyezulu B SP',
                    ward: ['23']
                  }
                ]
              },
               {
                names: 'Kweyezulu C',
                surburb: [
                  {
                    name: 'Kweyezulu C SP',
                    ward: ['23']
                  }
                ]
              },
               {
                names: 'KweZibomvu',
                surburb: [
                  {
                    name: 'KweZibomvu SP',
                    ward: ['13', '17', '23']
                  }
                ]
              },
               {
                names: 'Langakazi A',
                surburb: [
                  {
                    name: 'Langakazi A SP',
                    ward: ['10']
                  }
                ]
              },
               {
                names: 'Langakazi B',
                surburb: [
                  {
                    name: 'Langakazi B SP',
                    ward: ['8']
                  }
                ]
              },
               {
                names: 'Langfontein',
                surburb: [
                  {
                    name: 'Langfontein SP',
                    ward: ['2','16']
                  }
                ]
              },
               {
                names: 'Mabedlana A',
                surburb: [
                  {
                    name: 'Mabedlana A SP',
                    ward: ['17', '21']
                  }
                ]
              },
               {
                names: 'Mabedlana B',
                surburb: [
                  {
                    name: 'Mabedlana B SP',
                    ward: ['17', '21']
                  }
                ]
              },
               {
                names: 'Madakwadunuse',
                surburb: [
                  {
                    name: 'Madakwadunuse SP',
                    ward: ['8']
                  }
                ]
              },
               {
                names: 'Mahlabathini',
                surburb: [
                  {
                    name: 'Mahlabathini SP',
                    ward: ['8', '9']
                  }
                ]
              },
               {
                names: 'Makhosini',
                surburb: [
                  {
                    name: 'Makhosini SP',
                    ward: ['16', '23']
                  }
                ]
              },
               {
                names: 'Mame',
                surburb: [
                  {
                    name: 'Mame SP',
                    ward: ['5', '7']
                  }
                ]
              },
               {
                names: 'Manekwane',
                surburb: [
                  {
                    name: 'Manekwane SP',
                    ward: ['20']
                  }
                ]
              },

               {
                names: 'Maqwatha',
                surburb: [
                  {
                    name: 'Maqwatha SP',
                    ward: ['13', '17', '23']
                  }
                ]
              },
               {
                names: 'Mavulusha',
                surburb: [
                  {
                    name: 'Mavulusha SP',
                    ward: ['17']
                  }
                ]
              },
               {
                names: 'Mbambankunzi',
                surburb: [
                  {
                    name: 'Mbambankunzi SP',
                    ward: ['4', '6']
                  }
                ]
              },
               {
                names: 'Mbanda A',
                surburb: [
                  {
                    name: 'Mbanda A SP',
                    ward: ['14']
                  }
                ]
              },
               {
                names: 'Mbanda B',
                surburb: [
                  {
                    name: 'Mbanda B SP',
                    ward: ['14', '15']
                  }
                ]
              },
               {
                names: 'Mbanda C',
                surburb: [
                  {
                    name: 'Mbanda C SP',
                    ward: ['8','12', '15' ]
                  }
                ]
              },
               {
                names: 'Mbilane',
                surburb: [
                  {
                    name: 'Mbilane SP',
                    ward: ['17', '19', '21']
                  }
                ]
              },
               {
                names: 'Mbilane A',
                surburb: [
                  {
                    name: 'Mbilane A SP',
                    ward: ['11', '12', '17', '22']
                  }
                ]
              },
               {
                names: 'Mbotsheni',
                surburb: [
                  {
                    name: 'Mbotsheni SP',
                    ward: ['6', '10']
                  }
                ]
              },
               {
                names: 'Mbudle',
                surburb: [
                  {
                    name: 'Mbudle SP',
                    ward: ['17']
                  }
                ]
              },
               {
                names: 'Mbuzikazi A',
                surburb: [
                  {
                    name: 'Mbuzikazi A SP',
                    ward: ['16', '17', '23']
                  }
                ]
              },

               {
                names: 'Mbuzikazi B',
                surburb: [
                  {
                    name: 'Mbuzikazi B SP',
                    ward: ['23']
                  }
                ]
              },
               {
                names: 'Mganimbobo A',
                surburb: [
                  {
                    name: 'Mganimbobo A SP',
                    ward: ['7', '8', '15']
                  }
                ]
              },
               {
                names: 'Mganimbobo B',
                surburb: [
                  {
                    name: 'Mganimbobo B SP',
                    ward: ['8']
                  }
                ]
              },
               {
                names: 'Mhlahlane A',
                surburb: [
                  {
                    name: 'Mhlahlane A SP',
                    ward: ['6', '10']
                  }
                ]
              },
               {
                names: 'Mhlahlane B',
                surburb: [
                  {
                    name: 'Mhlahlane B SP',
                    ward: ['10']
                  }
                ]
              },
               {
                names: 'Mhlangandlovu',
                surburb: [
                  {
                    name: 'Mhlangandlovu SP',
                    ward: ['2', '5', '15']
                  }
                ]
              },

               {
                names: 'Mkhazane',
                surburb: [
                  {
                    name: 'Mkhazane SP',
                    ward: ['18', '19', '21']
                  }
                ]
              },
               {
                names: 'Mlovu A',
                surburb: [
                  {
                    name: 'Mlovu A SP',
                    ward: ['4', '6']
                  }
                ]
              },
               {
                names: 'Mlovu B',
                surburb: [
                  {
                    name: 'Mlovu B SP',
                    ward: ['4', '6']
                  }
                ]
              },
               {
                names: 'Mpembeni',
                surburb: [
                  {
                    name: 'Mpembeni SP',
                    ward: ['16']
                  }
                ]
              },
               {
                names: 'Mpisini',
                surburb: [
                  {
                    name: 'Mpisini SP',
                    ward: ['6', '10']
                  }
                ]
              },
               {
                names: 'Mpunga',
                surburb: [
                  {
                    name: 'Mpunga SP',
                    ward: ['13']
                  }
                ]
              },
              {
                names: 'Mpungamhlophe',
                surburb: [
                  {
                    name: 'Mpungamhlophe SP',
                    ward: ['13']
                  }
                ]
              },
              {
                names: 'Mpungose',
                surburb: [
                  {
                    name: 'Mpungose SP',
                    ward: ['11', '20', '22']
                  }
                ]
              },
              {
                names: 'Mthinzima',
                surburb: [
                  {
                    name: 'Mthinzima SP',
                    ward: ['10', '13', '17']
                  }
                ]
              },
              {
                names: 'Mthonjeni',
                surburb: [
                  {
                    name: 'Mthonjeni SP',
                    ward: ['14', '20', '24']
                  }
                ]
              },
              {
                names: 'Ncemaneni',
                surburb: [
                  {
                    name: 'Ncemaneni SP',
                    ward: ['14', '15']
                  }
                ]
              },
              {
                names: 'Ncwebeba',
                surburb: [
                  {
                    name: 'Ncwebeba SP',
                    ward: ['5', '7']
                  }
                ]
              },
              {
                names: 'Ngwebu',
                surburb: [
                  {
                    name: 'Ngwebu SP',
                    ward: ['14', '20']
                  }
                ]
              },
              {
                names: 'Nhlazatshe',
                surburb: [
                  {
                    name: 'Nhlazatshe SP',
                    ward: ['4', '13']
                  }
                ]
              },

              {
                names: 'Njojo A',
                surburb: [
                  {
                    name: 'Njojo A SP',
                    ward: ['14']
                  }
                ]
              },
              {
                names: 'Mjojo B',
                surburb: [
                  {
                    name: 'Mjojo B SP',
                    ward: ['14', '20']
                  }
                ]
              },
              {
                names: 'Nkonjeni',
                surburb: [
                  {
                    name: 'Nkonjeni SP',
                    ward: ['24']
                  }
                ]
              },
              {
                names: 'Nomdiya',
                surburb: [
                  {
                    name: 'Nomdiya SP',
                    ward: ['9']
                  }
                ]
              },
              {
                names: 'Nsukaze A',
                surburb: [
                  {
                    name: 'Nsukaze A SP',
                    ward: ['5', '6']
                  }
                ]
              },
              {
                names: 'Nsukaze B',
                surburb: [
                  {
                    name: 'Nsukaze B SP',
                    ward: ['5', '6']
                  }
                ]
              },

              {
                names: 'Ntabankulu',
                surburb: [
                  {
                    name: 'Ntabankulu SP',
                    ward: ['14']
                  }
                ]
              },{
                names: 'Ntamamhlophe',
                surburb: [
                  {
                    name: 'Ntamamhlophe SP',
                    ward: ['17', '23']
                  }
                ]
              },

              {
                names: 'Ntandakuwela A',
                surburb: [
                  {
                    name: 'Ntandakuwela A SP',
                    ward: ['20']
                  }
                ]
              },

              {
                names: 'Ntandakuwela',
                surburb: [
                  {
                    name: 'Ntandakuwela SP',
                    ward: ['20']
                  }
                ]
              },
              {
                names: 'Ntandeka',
                surburb: [
                  {
                    name: 'Ntandeka SP',
                    ward: ['11', '12', '17']
                  }
                ]
              },
              {
                names: 'Ntontiyane',
                surburb: [
                  {
                    name: 'Ntontiyane SP',
                    ward: ['9', '11']
                  }
                ]
              },
              {
                names: 'Ogedleni',
                surburb: [
                  {
                    name: 'Ogedleni SP',
                    ward: ['4', '6']
                  }
                ]
              },

              {
                names: 'Okhukho A',
                surburb: [
                  {
                    name: 'Okhukho A SP',
                    ward: ['15']
                  }
                ]
              },
              {
                names: 'Okhukho B',
                surburb: [
                  {
                    name: 'Okhukho B SP',
                    ward: ['15', '8']
                  }
                ]
              },
              {
                names: 'Ombimbini',
                surburb: [
                  {
                    name: 'Ombimbini SP',
                    ward: ['1', '2', '15']
                  }
                ]
              },

              {
                names: 'Othini',
                surburb: [
                  {
                    name: 'Othini SP',
                    ward: ['9', '10']
                  }
                ]
              },
              {
                names: 'Qubeni A',
                surburb: [
                  {
                    name: 'Qubeni A SP',
                    ward: ['8']
                  }
                ]
              },
              {
                names: 'Qubeni B',
                surburb: [
                  {
                    name: 'Qubeni B SP',
                    ward: ['7', '8']
                  }
                ]
              },


              {
                names: 'Qunyaneni',
                surburb: [
                  {
                    name: 'Qunyaneni SP',
                    ward: ['7', '12', '13', '14']
                  }
                ]
              },
              {
                names: 'Qwasha',
                surburb: [
                  {
                    name: 'Qwasha SP',
                    ward: ['10']
                  }
                ]
              },{
                names: 'Sangoyane A',
                surburb: [
                  {
                    name: 'Sangoyane A SP',
                    ward: ['20']
                  }
                ]
              },

              {
                names: 'Sangoyane B',
                surburb: [
                  {
                    name: 'Sangoyane B SP',
                    ward: ['20']
                  }
                ]
              },
              {
                names: 'Shumayeleni',
                surburb: [
                  {
                    name: 'Shumayeleni SP',
                    ward: ['2', '15']
                  }
                ]
              },
              {
                names: 'Sibomvu',
                surburb: [
                  {
                    name: 'Sibomvu SP',
                    ward: ['5', '7', '14']
                  }
                ]
              },
              {
                names: 'Sidakeni',
                surburb: [
                  {
                    name: 'Sidakeni SP',
                    ward: ['4', '6']
                  }
                ]
              },
              {
                names: 'Silanda',
                surburb: [
                  {
                    name: 'Silanda SP',
                    ward: ['1', '2', '3', '15']
                  }
                ]
              },
              {
                names: 'Simelane',
                surburb: [
                  {
                    name: 'Simelane SP',
                    ward: ['1', '2', '15', '21']
                  }
                ]
              },
              {
                names: 'Siphethu A',
                surburb: [
                  {
                    name: 'Siphethu A SP',
                    ward: ['8', '20']
                  }
                ]
              },{
                names: 'Siphethu B',
                surburb: [
                  {
                    name: 'Siphethu B SP',
                    ward: ['8']
                  }
                ]
              },{
                names: 'Siphina',
                surburb: [
                  {
                    name: 'Siphina SP',
                    ward: ['7', '12']
                  }
                ]
              },

              {
                names: 'Sishili A',
                surburb: [
                  {
                    name: 'Sishili A SP',
                    ward: ['11', '12', '22']
                  }
                ]
              },
              {
                names: 'Sishili B',
                surburb: [
                  {
                    name: 'Sishili B SP',
                    ward: ['9', '11']
                  }
                ]
              },
              {
                names: 'Thokoza',
                surburb: [
                  {
                    name: 'Thokoza SP',
                    ward: ['12', '18', '19', '20', '21', '22']
                  }
                ]
              },
              {
                names: 'Ulundi',
                surburb: [
                  {
                    name: 'Ulundi B',
                    ward: ['12', '17', '19', '21']
                  },
                  {
                    name: 'Ulundi BA',
                    ward: ['12', '18', '19', '22']
                  },
                  {
                    name: 'Ulundi C',
                    ward: ['12', '22']
                  },
                  {
                    name: 'Ulundi D',
                    ward: ['11', '12', '22']
                  },
                  {
                    name: 'Ulundi L',
                    ward: ['18', '22']
                  },
                  {
                    name: 'Ulundi SP',
                    ward: ['18', '19', '21']
                  },
                  {
                    name: 'Zondela',
                    ward: ['18', '22']
                  },

                ]
              },
              {
                names: 'Ulundi NU',
                surburb: [
                  {
                    name: 'Ulundi NU',
                    ward: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '17', '18', '19', '20', '21', '22', '23', '24']
                  }
                ]
              },
              {
                names: 'Vezunyawo',
                surburb: [
                  {
                    name: 'Vezunyawo SP',
                    ward: ['9', '11']
                  }
                ]
              },
              {
                names: 'Vryheid',
                surburb: [
                  {
                    name: 'Vryheid SP',
                    ward: ['4', '6', '10', '13', '17']
                  }
                ]
              },


              {
                names: 'Vuthela',
                surburb: [
                  {
                    name: 'Vuthela SP',
                    ward: ['8', '11', '20']
                  }
                ]
              },
              {
                names: 'Vuthele',
                surburb: [
                  {
                    name: 'Vuthele SP',
                    ward: ['8']
                  }
                ]
              },
              {
                names: 'Xasana',
                surburb: [
                  {
                    name: 'Xasana SP',
                    ward: ['7', '8', '12']
                  }
                ]
              },

              {
                names: 'Xolo',
                surburb: [
                  {
                    name: 'Xolo SP',
                    ward: ['7']
                  }
                ]
              },
              {
                names: 'Xwayisane',
                surburb: [
                  {
                    name: 'Xwayisane SP',
                    ward: ['5']
                  }
                ]
              },
              {
                names: 'Zembeni',
                surburb: [
                  {
                    name: 'Zembeni SP',
                    ward: ['2', '4', '5', '6'], 
                  }
                ]
              }

            ]
          },
          {
            name: 'Uphongolo',
            city: [
              {
                names: 'Atlona',
                surburb: [
                  {
                    name: 'Atlona SP',
                    ward: ['3', '6']
                  }
                ]
              },
              {
                names: 'Beginsel',
                surburb: [
                  {
                    name: 'Beginsel SP',
                    ward: ['7', '8', '13']
                  }
                ]
              },
              {
                names: 'Belgrade',
                surburb: [
                  {
                    name: 'Belgrade SP',
                    ward: ['5', '9', '12']
                  }
                ]
              },
              {
                names: 'Bongaspoort',
                surburb: [
                  {
                    name: 'Bongaspoort SP',
                    ward: ['3', '6']
                  }
                ]
              },
              {
                names: 'Crownsnest',
                surburb: [
                  {
                    name: 'Crownsnest SP',
                    ward: ['4', '8']
                  }
                ]
              },
              {
                names: 'Draaiom Trust',
                surburb: [
                  {
                    name: 'Draaiom Trust SP',
                    ward: ['1', '6']
                  }
                ]
              },
              {
                names: 'Godlwayo',
                surburb: [
                  {
                    name: 'Godlwayo SP',
                    ward: ['4']
                  }
                ]
              },

              {
                names: 'Goedgeloof A',
                surburb: [
                  {
                    name: 'Goedgeloof A SP',
                    ward: ['14']
                  }
                ]
              },
              {
                names: 'Highlands',
                surburb: [
                  {
                    name: 'Highlands SP',
                    ward: ['4', '5', '12']
                  }
                ]
              },
              {
                names: 'Klipwal',
                surburb: [
                  {
                    name: 'Klipwal SP',
                    ward: ['6']
                  }
                ]
              },
              {
                names: 'Kortnek ',
                surburb: [
                  {
                    name: 'Kortnek SP',
                    ward: ['6']
                  }
                ]
              },

              {
                names: 'Kranskloof',
                surburb: [
                  {
                    name: 'Kranskloof SP',
                    ward: ['2', '9', '10', '13']
                  }
                ]
              },
              {
                names: 'KwaSilevu',
                surburb: [
                  {
                    name: 'KwaSilevu SP',
                    ward: ['1']
                  }
                ]
              },
              {
                names: 'Mambovu',
                surburb: [
                  {
                    name: 'Itala Nature Reserve',
                    ward: ['1', '6', '8']
                  }
                ]
              },

              {
                names: 'Magudu',
                surburb: [
                  {
                    name: 'Magudu SP',
                    ward: ['11']
                  }
                ]
              },
              {
                names: 'Mantandeni',
                surburb: [
                  {
                    name: 'Mantandeni SP',
                    ward: ['12']
                  }
                ]
              },
              {
                names: 'Mbekakanye',
                surburb: [
                  {
                    name: 'Mbekakanye SP',
                    ward: ['8', '9', '13']
                  }
                ]
              },{
                names: 'Mkwakweni',
                surburb: [
                  {
                    name: 'Mkwakweni SP',
                    ward: ['4', '7', '8', '13']
                  }
                ]
              },
              {
                names: 'Ncotshane A',
                surburb: [
                  {
                    name: 'Ncotshane A SP',
                    ward: ['10']
                  }
                ]
              },
              {
                names: 'Ncotshane B',
                surburb: [
                  {
                    name: 'Ncotshane B SP',
                    ward: ['2', '10', '11']
                  }
                ]
              },
              {
                names: 'Oranjedal',
                surburb: [
                  {
                    name: 'Oranjedal SP',
                    ward: ['3', '6', '9']
                  }
                ]
              },{
                names: 'Pongola A',
                surburb: [
                  {
                    name: 'Pongola A SP',
                    ward: ['10', '11']
                  }
                ]
              },

              {
                names: 'Pongola B',
                surburb: [
                  {
                    name: 'Pongola B SP',
                    ward: ['11', '14']
                  }
                ]
              },
              {
                names: 'Prudentie',
                surburb: [
                  {
                    name: 'Prudentie SP',
                    ward: ['3', '6', '9']
                  }
                ]
              },
              {
                names: 'Rhebokfontein',
                surburb: [
                  {
                    name: 'Rhebokfontein SP',
                    ward: ['8', '9']
                  }
                ]
              },
              {
                names: 'Rosendal',
                surburb: [
                  {
                    name: 'Rosendal SP',
                    ward: ['4', '7', '8', '12']
                  }
                ]
              },
              {
                names: 'Silwerhout',
                surburb: [
                  {
                    name: 'Silwerhout SP',
                    ward: ['1']
                  }
                ]
              },

              {
                names: 'Spekboom',
                surburb: [
                  {
                    name: 'Spekboom SP',
                    ward: ['3', '6']
                  }
                ]
              },
              {
                names: 'Tobolsk',
                surburb: [
                  {
                    name: 'Tobolsk SP',
                    ward: ['3', '5', '9']
                  }
                ]
              },
              {
                names: 'UPhongolo NU',
                surburb: [
                  {
                    name: 'UPhongolo NU',
                    ward: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '17', '18', '20']
                  }
                ]
              },
              {
                names: 'Whitecliff',
                surburb: [
                  {
                    name: 'Whitecliff SP',
                    ward: ['4', '8', '12']
                  }
                ]
              },
              {
                names: 'Zwartkloof',
                surburb: [
                  {
                    name: 'Zwartkloof SP',
                    ward: ['9', '10', '11']
                  }
                ]
              }
            ]
          }
        ]
        },
        // Add more places and areas for KwaZulu-Natal here
        
      ]
    },
    {
      name: 'Eastern Cape',
      district: [
        {
          name: 'Alfred Nzo',
          municipality: [
            {
              name: 'Matatiele',
              city: [
                {
                  names: 'Afzondering',
                  surburb: [
                    {
                    name: 'Afzondering SP',
                    ward: ['9']
                  }
                ]
                },
                {
                  names: 'Andris',
                  surburb: [
                    {
                    name: 'Andris SP',
                    ward: ['8', '11', '25']
                  }
                ]
                },
                {
                  names: 'Batsoarele',
                  surburb: [
                    {
                    name: 'Batsoarele SP',
                    ward: ['18']
                  }
                ]
                },
                {
                  names: 'Belford',
                  surburb: [
                    {
                    name: 'Belford SP',
                    ward: ['8']
                  }
                ]
                },
                {
                  names: 'Bethel',
                  surburb: [
                    {
                    name: 'Bethel SP',
                    ward: ['3', '4']
                  }
                ]
                },
                {
                  names: 'Bethesda',
                  surburb: [
                    {
                    name: 'Bethesda SP',
                    ward: ['18', '23']
                  }
                ]
                },
                {
                  names: 'Black Diamond',
                  surburb: [
                    {
                    name: 'Black Diamond SP',
                    ward: ['26']
                  }
                ]
                },
                {
                  names: 'Bovini',
                  surburb: [
                    {
                    name: 'Bovini SP',
                    ward: ['7']
                  }
                ]
                },
                {
                  names: 'Caba',
                  surburb: [
                    {
                    name: 'Caba SP',
                    ward: ['10']
                  }
                ]
                },
              ]
            },
            {
              name: 'Mbizana',
              city: [
                {
                  names: 'Abetshawu',
                  surburb: [
                    {
                      name: 'Abetshawu SP', 
                      ward: ['6', '17']
                    }
                  ]
                },
                {
                  names: 'Amantshangase A/a A',
                  surburb: [
                    {
                      name: 'Amantshangase A/a A SP', 
                      ward: ['3']
                    }
                  ]
                },
                {
                  names: 'Amantshangase A/a B',
                  surburb: [
                    {
                      name: 'Amantshangase A/a B SP', 
                      ward: ['3']
                    }
                  ]
                },
                {
                  names: 'Amantshangase A/a C',
                  surburb: [
                    {
                      name: 'Amantshangase A/a C SP', 
                      ward: ['3']
                    }
                  ]
                },
                //Amantshangase A/a A
                {
                  names: 'Amaqeda',
                  surburb: [
                    {
                      name: 'Amaqeda SP', 
                      ward: ['15']
                    }
                  ]
                },
                {
                  names: 'Baleni A',
                  surburb: [
                    {
                      name: 'Baleni A SP', 
                      ward: ['25', '28']
                    }
                  ]
                },
                {
                  names: 'Baleni B',
                  surburb: [
                    {
                      name: 'Baleni B SP', 
                      ward: ['15','16', '25']
                    }
                  ]
                },
                {
                  names: 'Baleni C',
                  surburb: [
                    {
                      name: 'Baleni C SP', 
                      ward: ['25']
                    }
                  ]
                },

              ]
            },


        // Add more places and areas for Gauteng here

      ]
    },
    {
      name: 'Amathole',
      municipality: [
        {
          name: 'Amahlathi',
          city: [
            {
              names: 'Amabele',
              surburb: [
                {
                  name: 'Amabele SP',
                  ward:['9', '14']
                }
              ]
            },
            {
              names: 'Amahlathi NU',
              surburb: [
                {
                  name: 'Amahlathi NU',
                  ward:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18,', '19', '20', '26', '35', '36', '38', '43', '45']
                }
              ]
            },
            {
              names: 'Amazibula',
              surburb: [
                {
                  name: 'Amazibula SP',
                  ward:['14']
                }
              ]
            },
          ]
        },
      ]
    },
  ]
},

    {
      name: 'Limpopo',
      district: [
        {
          name: 'Capricorn',
          municipality: [
            {
              name: 'Aganang',
              city: [
                {
                  names: 'Aganang NU',
                  surburb: [
                    {
                      name: 'Aganang NU', 
                      ward: ['1','2', '3']
                    }
                  ]
                },
                {
                  names: 'Bakone',
                  surburb: [
                    {
                      name: 'Bakone SP', 
                      ward: ['11','16', '17']
                    }
                  ]
                },
                {
                  names: 'Boratapelo ',
                  surburb: [
                    {
                      name: 'Boratapelo SP', 
                      ward: ['10']
                    }
                  ]
                },
                {
                  names: 'Chloe',
                  surburb: [
                    {
                      name: 'Chloe SP ', 
                      ward: ['9','19']
                    }
                  ]
                },
                {
                  names: 'Cornelia SP',
                  surburb: [
                    {
                      name: 'Cornelia SP', 
                      ward: ['11']
                    }
                  ]
                },
              ]
            },
          ]
        },
        
        // Add more places and areas for Gauteng here
      ]
    },
    
    {
      name: 'North West',
      district: [
        {
          name: 'Bojanala',
          municipality: [
            {
              name: 'Kgetlengrivier',
              city: [
                {
                  names: 'Borolelo',
                  surburb: [
                    {
                      name: 'Borolelo Ext 1',
                      ward: ['1']
                    },
                    {
                      name: 'Borolelo Ext 2',
                      ward: ['1', '2']
                    },
                    {
                      name: 'Borolelo Ext 3',
                      ward: ['1', '2']
                    },
                    {
                      name: 'Borolelo SP',
                      ward: ['1', '2']
                    },
                    
                  ]
                },
                {
                  names: 'Derby',
                  surburb: [
                    {
                      name: 'Derby Ext 2',
                      ward: ['6']
                    },
                    {
                      name: 'Derby SP',
                      ward: ['3','6']
                    }
                  ]
                }
                
              ]
            },
          ]
        },
        
        // Add more places and areas for Gauteng here
      ]
    },
    
    {
      name: 'Mpumalanga',
      district: [
        {
          name: 'Ehlanzeni',
          municipality: [
            {
              name: 'Bushbuckridge',
              city: [
                {
                  names: 'Acornhoek',
                  surburb: [
                    {
                      name: 'Acornhoek SP',
                      ward: ['1', '17', '18', '19', '20', '21']
                    },
                    {
                      name: 'Tintswalo',
                      ward: ['1', '2', '18', '19']
                    }
                  ]
                },
                {
                  names: 'Bolla-Tau',
                  surburb: [
                    {
                      name: 'Bolla-Tau SP',
                      ward: ['20', '21']
                    }
                  ]
                },
                {
                  names: 'Burlington',
                  surburb: [
                    {
                      name: 'Burlington SP',
                      ward: ['20', '30']
                    }
                  ]
                },
                {
                  names: 'Bushbuckridge',
                  surburb: [
                    {
                      name: 'Bushbuckridge SP',
                      ward: ['7', '9', '37']
                    }
                  ]
                },
                
              ]
            },
            {
              name: 'Mbembela',
              city: [
                {
                  names: 'Aldie',
                  surburb: [
                    {
                      name: 'Aldie SP',
                      ward: ['2', '4','10' ,'29']
                    }
                  ]
                },
                {
                  names: 'Backdoor',
                  surburb: [
                    {
                      name: 'Backdoor SP',
                      ward: ['32', '38']
                    }
                  ]
                },
                {
                  names: 'Berlin State Forest',
                  surburb: [
                    {
                      name: 'Berlin State Forest SP',
                      ward: ['2', '12', '23']
                    },
                    {
                      name: 'Kaapshcehoop SP',
                      ward: ['12']
                    }

                  ]
                },
                {
                  names: 'Bhekiswayo',
                  surburb: [
                    {
                      name: 'Bhekiswayo SP',
                      ward: ['3', '5', '25', '34']
                    }
                  ]
                },
              ]
            },

          ]
        },
        {
          name: 'Gert Sibande',
          municipality: [
            {
              name: 'Albert Luthuli',
              city: [
                {
                  names: 'Aarnhemburg',
                  surburb: [
                    {
                      name: 'Aarnhemburg SP',
                      ward: ['10', '18', '19']
                    }
                  ]
                },
                {
                  names: 'Albert Luthuli NU',
                  surburb: [
                    {
                      name: 'Albert Luthuli NU',
                      ward: ['1', '2', '3', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16','17', '18', '18', '19', '21', '23', '24', '25']
                    }
                  ]
                },
                {
                  names: 'Avontuur',
                  surburb: [
                    {
                      name: 'Avontuur SP',
                      ward: [ '18']
                    }
                  ]
                },
                {
                  names: 'Badplaas',
                  surburb: [
                    {
                      name: 'Avontuur SH',
                      ward: [ '23']
                    },
                    {
                      name: 'Koppe Alleen',
                      ward: [ '17', '23']
                    },
                    {
                      name: 'Overvaal Game Reserve',
                      ward: ['23']
                    },
                  ]
                },
              ]
            },
          ]
        }
        
        // Add more places and areas for Gauteng here
      ]
    },
    
    {
      name: 'Western Cape',
      district: [
        {
          name: 'Cape Winelands',
          municipality: [
            {
              name: 'Breede Valley',
              city: [
                {
                  names: 'Brandvlei',
                  surburb: [
                    {
                      name: 'Brandvlei Prison',
                      ward: ['21']
                    }
                  ]
                },
                {
                  names: 'Breede Valley NU',
                  surburb: [
                    {
                      name: 'Breede Valley NU',
                      ward: ['1', '2', '3', '4', '5', '6', '7', '8', '10', '12', '13', '15', '16', '18', '20', '21', '25', '28', '31']
                    }
                  ]
                },
                {
                  names: 'De Doorns',
                  surburb: [
                    {
                      name: 'De Doorns East',
                      ward: ['2', '3', '4']
                    },
                    {
                      name: 'De Doorns SP',
                      ward: ['3', '4']
                    },
                    {
                      name: 'Mountain View',
                      ward: ['2', '3', '4']
                    },
                  ]
                },
                {
                  names: 'Ekupumeleni',
                  surburb: [
                    {
                      name: 'Ekupumeleni SP',
                      ward: ['2','3']
                    }
                  ]
                },
              ]
            },
          ]
        }
        
        // Add more places and areas for Gauteng here
      ]
    },
    
    {
      name: 'Northern Cape',
      district: [
        {
          name: 'Frances Baard',
          municipality: [
            {
              name: 'Dikgatlong',
              city: [
                {
                  names: 'Barkly West',
                  surburb: [
                    {
                      name: 'Barkly West SP',
                      ward: ['2', '3', '5']
                    },
                    {
                      name: 'De Beershoogte',
                      ward: ['1','2', '3', '5']
                    }
                  ]
                },
                {
                  names: 'Delportshoop',
                  surburb: [
                    {
                      name: 'Delportshoop SP',
                      ward: ['5', '6', '7']
                    },
                    {
                      name: 'Proteahof',
                      ward: ['5', '6', '7']
                    },
                    {
                      name: 'Rooikoppie',
                      ward: [ '6', '7']
                    },
                  ]
                },
                {
                  names: 'Dikgatlong NU',
                  surburb: [
                    {
                      name: 'Dikgatlong NU',
                      ward: ['1','2', '3', '4', '5', '6','11', '20', '22', '27', '28']
                    }
                  ]
                },
              ]
            },

          ]
        },
        
        // Add more places and areas for Gauteng here
      ]
    },
    /*
    {
      name: 'Free State',
      district: [
        {
          name: 'Johannesburg',
          municipality: ['Sandton', 'Randburg', 'Soweto']
        },
        {
          name: 'Pretoria',
          municipality: ['Centurion', 'Arcadia', 'Hatfield']
        },
        // Add more places and areas for Gauteng here
      ]
    },
    {
      name: 'Gauteng',
      district: [
        {
          name: 'Johannesburg',
          municipality: ['Sandton', 'Randburg', 'Soweto']
        },
        {
          name: 'Pretoria',
          municipality: ['Centurion', 'Arcadia', 'Hatfield']
        },
        // Add more places and areas for Gauteng here
      */


  ]
      
    
    // Add more provinces here

  
  
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  async confirm() {
    // Check if the form is valid and all required fields are selected
    if (this.myForm.valid && this.selectedProvince) {
      // If selectedProvince is 'KwaZulu-Natal', ensure all other fields are selected
      if (this.selectedProvince.name === 'KwaZulu-Natal') {
        if (this.selectedDistrict && this.selectedMunicipality && this.selectedCity && this.selectedSurburb && this.selectedWard) {
          this.isConfirmEnabled = true;
  
          // Create an object to hold the selected location attributes
          const selectedLocation = {
            selectedProvince: this.selectedProvince,
            selectedDistrict: this.selectedDistrict,
            selectedMunicipality: this.selectedMunicipality,
            selectedCity: this.selectedCity,
            selectedSurburb: this.selectedSurburb,
            selectedWard: this.selectedWard,
            AddressLine1: this.AddressLine1,
            AddressLine2: this.AddressLine2
          };
  
          // Dismiss the modal and pass the selected location data to the parent page
          this.modalCtrl.dismiss(selectedLocation, 'confirm');
        } else {
          const toast = await this.toastController.create({
            message: 'Please make sure that all fields are selected.',
            duration: 2000,
            position: 'top',
            color: 'danger',
          });
          toast.present();
        }
      } else {
        // If selectedProvince is not 'KwaZulu-Natal', only check for selectedProvince
        this.isConfirmEnabled = true;
  
        const selectedLocation = {
          selectedProvince: this.selectedProvince,
          selectedDistrict: this.selectedDistrict,
          selectedMunicipality: this.selectedMunicipality,
          selectedCity: this.selectedCity,
          selectedSurburb: this.selectedSurburb,
          selectedWard: this.selectedWard,
          AddressLine1: this.AddressLine1,
          AddressLine2: this.AddressLine2
        };
  
        // Dismiss the modal and pass the selected location data to the parent page
        this.modalCtrl.dismiss(selectedLocation, 'confirm');
      }
    } else {
      const toast = await this.toastController.create({
        message: 'Please make sure that all fields are selected.',
        duration: 2000,
        position: 'top',
        color: 'danger',
      });
      toast.present();
    }
  }
  


  
 

  ngOnInit() {
  }

}