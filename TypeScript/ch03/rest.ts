let address: any={
    country: 'Korea',
    city: 'Seoul',
    address1: 'Gangname-gu',
    address2: 'Sinsa-dong',
    address3: '789 street'
}
const {country, city, ...detail} = address  // 잔여 연산자
console.log(detail)