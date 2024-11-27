const renta = document.querySelector('#renta')

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



for (const hogar of hogares) {
    
    renta.innerHTML += `
    <div class="col-md-4 mb-4" >
        <div class="card">
            <img class="class="card-img-top"" src=${hogar.src}>   
            <div class='card-body'>
                <h3>${hogar.titulo}</h3>
                <p>${hogar.descripcion}</p>
                <p>
                    <i class="fas fa-map-marker-alt"></i>
                    ${hogar.ubicacion}
                </p>
                <p>
                    <i class="fas fa-bed"></i> ${hogar.habitacion} |
                    <i class="fas fa-bath"></i> ${hogar.banios}
                    <p><i class="fas fa-dollar-sign"></i> ${hogar.precio}</p>
                    ${hogar.fumar ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar </p>': '<p class="text-danger"><i class="fas fa-smoking"></i> Permitido fumar </p>' }
                    ${hogar.mascotas ? '<p class="text-success"> <i class="fas fa-paw"></i> Mascotas permitidas</p>': '<p class="text-danger"> <i class="fas fa-paw"></i> Mascotas permitidas</p>' }
                </p>
            </div>
        </div>
    </div>
    
    `
    
    
}