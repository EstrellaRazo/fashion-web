const productData = [
    {
        index: '01',
        name: 'yellow tracksuit',
        image: 'img1.jpg',
        des: 'Conjunto amarillo casual para mujer'
    },
    {
        index: '02',
        name: 'designer outfit',
        image: 'img2.jpg',
        des: 'Conjunto de diseñador para llevar tu estilo a otro nivel'
    },
    {
        index: '03',
        name: 'chilling mood',
        image: 'img3.jpg',
        des: 'Conjunto ideal para esos días de Netflix n child'
    }
]

const nxtBtn = document.querySelector('.nxt-btn')
const smImgContainer = document.querySelector('.sm-product-img-container')
const smImg = document.querySelector('.sm-product-img')
const productIndex = document.querySelector('.product-index')
const smProductDes = document.querySelector('.sm-product-des')
const productImgContainer = document.querySelector('.product-img-container')
const productImg = document.querySelector('.product-img')
const backdropImg = document.querySelector('.backdrop-img')
const productDetail = document.querySelector('.detail-product')
const productName = document.querySelector('.name-product')
const productDes = document.querySelector('.des-product')

let currentProduct = 0

nxtBtn.addEventListener('click', () => {
    if(currentProduct >= productData.length -1){
        currentProduct = 0
    }
    else{
        currentProduct ++
    }

    productIndex.innerHTML = productData[currentProduct].index
    smProductDes.innerHTML = productData[currentProduct].des.slice(0,80)

    smImgContainer.classList.add('slide')
    productImgContainer.classList.add('slide')
    backdropImg.classList.add('fade')
    productDetail.classList.add('fade')

    setTimeout(() => {
        productName.innerHTML = productData[currentProduct].name
        productDes.innerHTML = productData[currentProduct].des
        smImg.src = productImg.src = backdropImg.src = `images/${productData[currentProduct].image}`
    },500)

    setTimeout(() => {
        smImgContainer.classList.remove('slide')
        productImgContainer.classList.remove('slide')
        backdropImg.classList.remove('fade')
        productDetail.classList.remove('fade')
    },500)
})