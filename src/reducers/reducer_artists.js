
import _ from 'lodash';


  const ARTIST = [
    
    {
            name: 'Ed Sheeran',
            date: '17.08.2017',
            price: '$50',
            location: 'London , Wembley Stadium',
            time:'21:45'
            
        },
        {
            name: 'Enrique Iglesias',
            date: '18.08.2017',
            price: '$70',
            location: 'London , Wembley Stadium',
            time:'21:00'
        },
        {
            name: 'ADELE',
            date: '19.08.2017',
            price: '$40',
            location: 'London , Wembley Stadium',
            time:'23:00'
        },
        {
            name: 'Taylor Swift',
            date: '10.08.2017',
            price: '$30',
            location: 'London , Wembley Stadium',
            time:'22:00'
        },
        {
            name: 'Sam Smith',
            date: '21.08.2017',
            price: '$65',
            location: 'London , Wembley Stadium',
            time:'21:30'
        },
          {
            name: 'Beyonce',
            date: '26.08.2017',
            price: '$95',
            location: 'London , Wembley Stadium',
            time:'19:00'
        },
          {
            name: 'AC/DC',
            date: '29.08.2017',
            price: '$55',
            location: 'London , Wembley Stadium',
            time:'20:00'
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

