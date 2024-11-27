const venta = document.querySelector('#venta')

let casas =[
    {
        titulo: 'Apartamento de lujo en zona exclusiva',
        src:'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitacion: '4 Habitaciones',
        banios: '4 Baños',
        precio: '5.000',
        fumar: false,
        mascotas: false
    },

    {
        titulo: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitacion: '2 Habitaciones',
        banios: '1 Baños',
        precio: '1.200',
        fumar: true,
        mascotas: true
    },

    {
        titulo: 'Penthouse de lujo con terraza panorámica',
        src: 'https://lanacionar-la-nacion-ar-prod.web.arc-cdn.net/resizer/v2/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg?auth=f0a77ece3c9deb238be2b6bd03c400054cf3f0d57fda67c39c21dfb9fd2f4e56&width=768&quality=80',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitacion: '3 Habitaciones',
        banios: '3 Baños',
        precio: '4.500',
        fumar: false,
        mascotas: true
    },

    {
        titulo: 'Casa en excelente vecindario en lugar privado',
        src: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg',
        descripcion: 'Esta casa ofrece un amplio jardín y excelente ubicación',
        ubicacion: '368 Andreas Avenue, Los Santos City, CA 53576',
        habitacion: '4 Habitaciones',
        banios: '4 Baños',
        precio: '1.500',
        fumar: false,
        mascotas: true
    },


    {
        titulo: 'Casa moderna a las afueras de la ciudad',
        src: 'https://as2.ftcdn.net/v2/jpg/02/09/12/47/1000_F_209124760_sEIPfgAurKyrJMIUmdg2cLyiDdxZ8dBr.jpg',
        descripcion: 'Esta casa es ideal apra los amantes de la naturaleza',
        ubicacion: '368 Santos Avenue, Los Santos City, CA 65432',
        habitacion: '4 Habitaciones',
        banios: '4 Baños',
        precio: '1.700',
        fumar: true,
        mascotas: true
    },


    {
        titulo: 'Bella casa de 2 pisos en zona exclusiva',
        src: 'https://as1.ftcdn.net/v2/jpg/01/57/36/74/1000_F_157367489_FSqP231EvpCB9fqD5s5PhCp8MOuEcfih.jpg',
        descripcion: 'Esta casa ofrece un amplio jardín y excelente ubicación',
        ubicacion: '368 Dry Dock Street, Los Santos City, CA 67895',
        habitacion: '5 Habitaciones',
        banios: '4 Baños',
        precio: '4.800',
        fumar: true,
        mascotas: true
    },



    {
        titulo: 'Casa en zona conrubada en Los Santos',
        src: 'https://as2.ftcdn.net/v2/jpg/03/61/16/25/1000_F_361162520_bgRKQmlB8lm2Z45NQ7GBaNT675tMOCGq.jpg',
        descripcion: 'Casa en vecindario cerca de Glory Way',
        ubicacion: '368 San Andreas Avenue, Los Santos City, CA 44321',
        habitacion: '2 Habitaciones',
        banios: '3 Baños',
        precio: '1.000',
        fumar: true,
        mascotas: true
    }
]



for (const casa of casas) {
    
    venta.innerHTML += `
    <div class="col-md-4 mb-4" >
        <div class="card">
            <img class="class="card-img-top"" src=${casa.src}>   
            <div class='card-body'>
                <h3>${casa.titulo}</h3>
                <p>${casa.descripcion}</p>
                <p>
                    <i class="fas fa-map-marker-alt"></i>
                    ${casa.ubicacion}
                </p>
                <p>
                    <i class="fas fa-bed"></i> ${casa.habitacion} |
                    <i class="fas fa-bath"></i> ${casa.banios}
                    <p><i class="fas fa-dollar-sign"></i> ${casa.precio}</p>
                    ${casa.fumar ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar </p>': '<p class="text-danger"><i class="fas fa-smoking"></i> Permitido fumar </p>' }
                    ${casa.mascotas ? '<p class="text-success"> <i class="fas fa-paw"></i> Mascotas permitidas</p>': '<p class="text-danger"> <i class="fas fa-paw"></i> Mascotas permitidas</p>' }
                </p>
            </div>
        </div>
    </div>
    
    `
    
    
}