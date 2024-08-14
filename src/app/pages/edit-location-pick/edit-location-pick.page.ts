import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { City, District, Municipality, Province, Surburb } from './editlocation';

@Component({
  selector: 'app-edit-location-pick',
  templateUrl: './edit-location-pick.page.html',
  styleUrls: ['./edit-location-pick.page.scss'],
})
export class EditLocationPickPage implements OnInit {
  @Input() selectedLocation: any;
  Location: any;
  City: any;
  District: any;
  Ward: any;
  Suburb: any;
  Municipality: any;
  Province: any;

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) { 
    this.selectedLocation = this.navParams.get('selectedLocation');
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
                  name: 'Durban Centarl',
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
                  name: 'KwaDabeka L',
                  ward: ['20', '22', '92']
                },
                {
                  name: 'KwaDabeka L',
                  ward: ['20', '22', '92']
                },
                {
                  name: 'KwaDabeka L',
                  ward: ['20', '22', '92']
                },
                {
                  name: 'KwaDabeka L',
                  ward: ['20', '22', '92']
                },
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
              },{
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
              },{
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
              },{
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
              },{
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
              },{
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
              },{
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
              },{
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
              },{
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
              },{
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
              },{
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
              },{
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
              },{
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
              },{
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
              },{
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
              },{
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
              },{
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
            ]
          }
        ]
        },
        
        ]
    }
    // Add more provinces here
  ];
  
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  selectedProvince: Province | null = null;
  selectedDistrict: District | null = null;
  selectedMunicipality: Municipality | null = null;
  selectedCity: City | null = null;
  selectedSurburb: Surburb | null = null;
  selectedWard: String | null = null;
 
  saveLocation() {
    // Update this.selectedLocation with the edited data
    this.selectedLocation.selectedProvince = this.selectedProvince;
    this.selectedLocation.selectedDistrict = this.selectedDistrict;
    this.selectedLocation.selectedMunicipality = this.selectedMunicipality;
    this.selectedLocation.selectedCity = this.selectedCity;
    this.selectedLocation.selectedSuburb = this.selectedSurburb;
    this.selectedLocation.selectedWard = this.selectedWard;
  
    // Pass the updated location data back to the EditEventPage
    this.modalCtrl.dismiss({
      role: 'confirm',
      data: this.selectedLocation,
    });
  }
  

  ngOnInit() {
    this.selectedLocation = {
      selectedProvince: null,
      selectedDistrict: null,
      selectedMunicipality: null,
      selectedCity: null,
      selectedSuburb: null,
      selectedWard: null,
    };
  
    if (this.navParams.get('selectedLocation')) {
      // If you have existing location data, update the selectedLocation object accordingly.
      const existingLocation = this.navParams.get('selectedLocation');
      this.selectedLocation.selectedProvince = existingLocation.selectedProvince;
      this.selectedLocation.selectedDistrict = existingLocation.selectedDistrict;
      this.selectedLocation.selectedMunicipality = existingLocation.selectedMunicipality;
      this.selectedLocation.selectedCity = existingLocation.selectedCity;
      this.selectedLocation.selectedSuburb = existingLocation.selectedSuburb;
      this.selectedLocation.selectedWard = existingLocation.selectedWard;
    }
  }
  

}
