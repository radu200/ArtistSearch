
import _ from 'lodash';


  const ARTIST = [
    
    {
            name: 'Ed Sheeran',
            date: '17.08.2017',
            price: '$50',
            location: 'London , Wembley Stadium',
            time:'21:45',
            image:'https://preview.ibb.co/gesp2Q/ed_sheeran.jpg'            
        },
        {
            name: 'Enrique Iglesias',
            date: '18.08.2017',
            price: '$70',
            location: 'London , Wembley Stadium',
            time:'21:00',
            image:'https://preview.ibb.co/nHyRGk/ESINGLEEICUANDOMEENAMORO.jpg'

        },
        {
            name: 'ADELE',
            date: '19.08.2017',
            price: '$40',
            location: 'London , Wembley Stadium',
            time:'23:00',
            image:'https://preview.ibb.co/crqL95/adele_25_packshot.jpg'
        },
        {
            name: 'Taylor Swift',
            date: '10.08.2017',
            price: '$30',
            location: 'London , Wembley Stadium',
            time:'22:00',
            image:'https://preview.ibb.co/hkaywk/Taylor_Swift_revenge_nerds.jpg'
        },
        {
            name: 'Sam Smith',
            date: '21.08.2017',
            price: '$65',
            location: 'London , Wembley Stadium',
            time:'21:30',
            image:'https://preview.ibb.co/fhxWhQ/sam_smith_in_the_lonely_hour_track_list_album_cover_1_e1402968875856.jpg'
        },
          {
            name: 'Beyonce',
            date: '26.08.2017',
            price: '$95',
            location: 'London , Wembley Stadium',
            time:'19:00',
            image:'https://image.ibb.co/hcvCp5/e85fd35e33ce9d10b74c57aeadf2e01c_beyonce_album_music_lovers.jpg'
        },
          {
            name: 'AC/DC',
            date: '29.08.2017',
            price: '$55',
            location: 'London , Wembley Stadium',
            time:'20:00',
            image:'https://preview.ibb.co/n5zSNQ/38a2b5da3d6202e9e020fd9c7b0642db_960x699x1.jpg'
        }
  ];
export default function (state = ARTIST, action ){
    switch(action.type){
        case 'ARTIST_SEARCH':
        return _.filter(ARTIST, artist => artist.name.match(action.payload))
        default:
        return state;
    }
}

