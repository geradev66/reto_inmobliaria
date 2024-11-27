const ventaCasa = document.querySelector('#ventasCasa')

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

const cortes = casas.slice(1,4)




for (const corte of cortes) {
    
    ventaCasa.innerHTML += `
    <div class="col-md-4 mb-4" >
        <div class="card">
            <img class="class="card-img-top"" src=${corte.src}>   
            <div class='card-body'>
                <h3>${corte.titulo}</h3>
                <p>${corte.descripcion}</p>
                <p>
                    <i class="fas fa-map-marker-alt"></i>
                    ${corte.ubicacion}
                </p>
                <p>
                    <i class="fas fa-bed"></i> ${corte.habitacion} |
                    <i class="fas fa-bath"></i> ${corte.banios}
                    <p><i class="fas fa-dollar-sign"></i> ${corte.precio}</p>
                    ${corte.fumar ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar </p>': '<p class="text-danger"><i class="fas fa-smoking"></i> Permitido fumar </p>' }
                    ${corte.mascotas ? '<p class="text-success"> <i class="fas fa-paw"></i> Mascotas permitidas</p>': '<p class="text-danger"> <i class="fas fa-paw"></i> Mascotas permitidas</p>' }
                </p>
            </div>
        </div>
    </div>
    
    `
    
    
}






const renta = document.querySelector('#alquilerCasa')

let hogares =[
    {
        titulo: 'Apartamento en el centro de la ciudad',
        src:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitacion: '2 Habitaciones',
        banios: '2 Baños',
        precio: '2.000',
        fumar: false,
        mascotas: true
    },

    {
        titulo: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitacion: '3 Habitaciones',
        banios: '3 Baños',
        precio: '2,500',
        fumar: true,
        mascotas: true
    },

    {
        titulo: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitacion: '2 Habitaciones',
        banios: '2 Baños',
        precio: '2,200',
        fumar: false,
        mascotas: false
    },

    {
        titulo: 'Casa de 3 pisos con excelente vista y naturaleza',
        src: 'https://cdn.pixabay.com/photo/2020/03/07/15/50/hampstead-4910147_960_720.jpg',
        descripcion: 'Esta casa ofrece cochera y un hermoso jardín patio amplio',
        ubicacion: '340 Orange Avenue, Los Santos City, CA 67850',
        habitacion: '6 Habitaciones',
        banios: '4 Baños',
        precio: '5.500',
        fumar: true,
        mascotas: true
    },

    {
        titulo: 'Apartamento en excelente ubicación',
        src: 'https://cdn.pixabay.com/photo/2015/07/08/10/29/appartment-building-835817_960_720.jpg',
        descripcion: 'Este apartamento es centrico con rutas accesibles a cualquier lugar',
        ubicacion: '368 Fierro Avenue, San fierro City, CA 45632',
        habitacion: '2Habitaciones',
        banios: '2 Baños',
        precio: '1000',
        fumar: false,
        mascotas: false
    },

    {
        titulo: 'Casa en privada a las orillas de la ciudad',
        src: 'https://cdn.pixabay.com/photo/2024/08/31/11/18/living-room-9011266_960_720.jpg',
        descripcion: 'Este apartamento minimaista con excelente vista a la ciudad ubicada en el centro',
        ubicacion: '368 liberty Avenue, Liberty City, CA 34678',
        habitacion: '4 Habitaciones',
        banios: '4 Baños',
        precio: '1.500',
        fumar: false,
        mascotas: true
    },

    {
        titulo: 'Casa en fraccionamiento con alberca y parque',
        src: 'https://t4.ftcdn.net/jpg/04/62/81/43/240_F_462814326_Rg1qXonBpF4T6DAQ8T03LBXIGK497yc9.jpg',
        descripcion: 'Esta casa ofrece un amplio jardín y excelente ubicación',
        ubicacion: '368 andreas Avenue, Los Santos City, CA 53576',
        habitacion: '4 Habitaciones',
        banios: '4 Baños',
        precio: '4.500',
        fumar: false,
        mascotas: true
    }
]

const rebanadas = hogares.slice(1,4)

for (const rebanar of rebanadas) {
    
    renta.innerHTML += `
    <div class="col-md-4 mb-4" >
        <div class="card">
            <img class="class="card-img-top"" src=${rebanar.src}>   
            <div class='card-body'>
                <h3>${rebanar.titulo}</h3>
                <p>${rebanar.descripcion}</p>
                <p>
                    <i class="fas fa-map-marker-alt"></i>
                    ${rebanar.ubicacion}
                </p>
                <p>
                    <i class="fas fa-bed"></i> ${rebanar.habitacion} |
                    <i class="fas fa-bath"></i> ${rebanar.banios}
                    <p><i class="fas fa-dollar-sign"></i> ${rebanar.precio}</p>
                    ${rebanar.fumar ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar </p>': '<p class="text-danger"><i class="fas fa-smoking"></i> Permitido fumar </p>' }
                    ${rebanar.mascotas ? '<p class="text-success"> <i class="fas fa-paw"></i> Mascotas permitidas</p>': '<p class="text-danger"> <i class="fas fa-paw"></i> Mascotas permitidas</p>' }
                </p>
            </div>
        </div>
    </div>
    
    `
    
    
}