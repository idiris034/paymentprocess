import React from 'react';
import CardElement from './CardElement';
import HeadCenter from '../DefaultComp/HeadCenter'


function Card() {
    return (
    <>
    <HeadCenter centerheading ='Payment Method'/>
       <main>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">  
            <CardElement 
              ServiceName=' Hair Cut'
              ServiceFor='For Men'
              Price='30'
              Off='20%'
              offtonew='$24'
              description='Men’s Haircut and Hair Styling'
              detail1='Regular cut'
              detail2='Razor cut'
              detail3='Clipper cut'
            />
             <CardElement
              ServiceName='Hair cut'
              ServiceFor=' For Women'
              Price='50'
              Off='20%'
              offtonew='$42'
              description='Women’s Haircut and Hair Styling'
              detail1='Japanese permanent hair straightening'
              detail2='Full head colour'
              detail3='Root touch-up'
            />
             <CardElement
              ServiceName='Hair Extension'
              ServiceFor='For Special Occasion'
              Price='120'
              Off='25%'
              offtonew='$90'
              description='Hair updos and Hairtsyles for Events'
              detail1='Full head '
              detail2='Half head'
              detail3='Clip-on hair extensions'
            />
            </div>
        </main>
    </>
  );
}

export default Card;
