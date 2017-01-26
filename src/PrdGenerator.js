import prd1Img from './img/prd1.jpg';
import prd2Img from './img/prd2.jpg';
import prd3Img from './img/prd3.jpg';
import prd4Img from './img/prd4.jpg';
import prd5Img from './img/prd5.jpg';
import defaultImg from './img/default.png';

const ITEMS_TO_GENERATE = 20;
const defaultProduct = {
  description: '',
  options: '',
  image: defaultImg,
  price: 0,
  id: 0,
  rate: 0,
  available: false,
};
class PrdGenerator {
  constructor(items) {
    this.generate = this.generate.bind(this);
    this.add = this.add.bind(this);
    this.get = this.get.bind(this);
    this.getById = this.getById.bind(this);
    this.descriptions = [
      'Laptop Apple MacBook Pro 15 Retina cu procesor Intel® Quad Core™ i7 2.20GHz, Haswell™, 15.4", Ecran Retina, 16GB, 256GB SSD, Intel® Iris™ Pro Graphics, OS X Yosemite, ROM KB',
      'Telefon mobil Apple iPhone 6S, 16GB, Space Gray, OS X Yosemite, ROM KB',
      'Laptop Apple MacBook Pro 13 cu procesor Intel® Dual Core™ i5 2.70GHz, Broadwell™, 13.3", Ecran Retina, 8GB, 128GB SSD, Intel® Iris™ Graphics 6100, OS X Yosemite, ROM KB',
      'RESIGILAT: Laptop Apple MacBook Air 11 cu procesor Intel® Dual Core™ i5 1.60GHz, Broadwell™, 11.6", 4GB, 128GB SSD, Intel® HD Graphics 6000, OS X Yosemite, ROM KB',
      'Laptop Apple MacBook Pro 15 Retina cu procesor Intel® Quad Core™ i7 2.20GHz, Haswell™, 15.4", 16GB, 256GB SSD, Intel® Iris™ Pro Graphics, OS X Yosemite, INT KB',
    ];

    this.options = [
      'Tastatura',
      'Memorie interna',
      'Culoare',
    ];

    this.images = [
      prd1Img,
      prd2Img,
      prd3Img,
      prd4Img,
      prd5Img,
    ];

    this.prices = [
      9699,
      2499,
      6099,
      4199,
      9499,
    ];

    this.rate = [
      3.15,
      2,
      4.5,
      1.2,
      4.9,
      3.3,
      4,
    ]

    this.products = [];
    this.generate(items);

    this.cart = [];
  }

  generate(n) {
    for (let i=0; i<=n; i++) {
      let product = {
          description: this.descriptions[i % this.descriptions.length],
          options: this.options[i % this.options.length],
          image: this.images[i % this.images.length],
          price: this.prices[i % this.prices.length],
          id: i,
          available: (i%2 === 0)? true : false,
          rate: this.rate[i % this.rate.length],
      };
      this.products.push(product);
    }
  }

  add(product) {
    return new Promise((res, rej) => {
      const newProduct = Object.assign({}, defaultProduct, product);
      newProduct.id = this.products[this.products.length - 1].id + 1;
      this.products = this.products.concat(newProduct);

      setTimeout(() => {
        res(newProduct);
      }, 300);
    });
  }

  get(callback, productsPerPage, page){
    let res = [];
    let n = this.products.length;

    let pages = Math.ceil(n/productsPerPage);
    let p = (page>pages) ? pages : page;

    let start = (p-1)*productsPerPage;
    let end = start + productsPerPage;
    setTimeout(()=>{
      res = this.products.slice(start, end);
      callback(res, n);
    }, 300);
  }

  getPrdByIdSync(id){
       const product = this.products.find((prd) => (prd.id === parseInt(id)));
       return product;
  }

  getById(id){
    return new Promise((res, rej) => {
      setTimeout(() => {
        const product = this.getPrdByIdSync(id);
        const newProduct = Object.assign({}, product);
        res(newProduct);
      }, 300);
    });
  }

  delete(id){
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.products = this.products.filter((v) => {return v.id !== parseInt(id)});
        res();
      }, 300);
    });
  }

  // addToCart(id){
  //   return new Promise((res, rej) => {
  //     setTimeout(() => {
  //       const z = this.cart.find((v) => (v.id === id)) ;
  //       console.log(z);
  //       if(z !== undefined){
  //         console.log("mai este!!");
  //       }
  //
  //       const product = this.getPrdByIdSync(id);
  //       const newProduct = Object.assign({}, product);
  //       this.cart = this.cart.concat(newProduct);
  //
  //       res(newProduct);
  //     }, 200);
  //   });
  // }

  // getMyCart(){
  //   return new Promise((res, rej) => {
  //     setTimeout(() => {
  //         const myProducts = this.cart;
  //         res(myProducts);
  //     }, 400);
  //   });
  // }
  //
  // removeFromMyCart(id){
  //   return new Promise((res, rej) => {
  //     setTimeout(() => {
  //       this.cart = this.cart.filter((v) => {return v.id !== parseInt(id)});
  //       res();
  //     }, 240);
  //   });
  // }

}

export default new PrdGenerator(ITEMS_TO_GENERATE);
