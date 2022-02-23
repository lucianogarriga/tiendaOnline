import S21 from '../../assets/s21-silver.jpg'
import Motorola from '../../assets/motorola.png'
import Iphone11 from '../../assets/iphone11.jpg'
import Iphone12 from '../../assets/iphone12pro.jpg'
import S20fe from '../../assets/s20fe.jpg' 
import Band5 from '../../assets/band5.jpg'
import Buds from '../../assets/dots.jpg'
import Watch from '../../assets/watch.jfif'

const productos = [
        {
            id: 's21', 
            title: 'Samsung S21', 
            description: 'El Samsung S21 viene a cambiar los paradigmas normales de los smartphones. Posee triple camara trasera, una camara frontal que sirve para el desbloqueo de la pantalla a traves del Face ID',
            price: 120000, 
            stock: 3,
            category: 'celulares',
            pictureUrl: S21
        },
        {
            id: 'moto-edge', 
            description: 'Motorola Edge tiene incorporado 128GB 4GB RAM de memoria para datos (fotos, música, vídeo, etc.). Motorola Edge está equipado con un chipset Qualcomm SDM765 Snapdragon 765G (7 nm). El tamaño de la pantalla principal es de 6.7 pulgadas, 110.2 cm2 con la resolución 1080 x 2340 píxeles, 19.5:9 ratio',
            title: 'Motorola Edge', 
            price: 100000, 
            stock: 5,
            category: 'celulares',
            pictureUrl: Motorola
        },
            {id: 'iphone-11', 
            description: 'El Apple iPhone 11 es el sucesor del iPhone Xr para el 2019. Este año el iPhone 11 llega con una pantalla de 6.1 pulgadas con resolución Liquid Retina y potenciado por un procesador Apple A13 Bionic con 64GB, 128GB o 256GB de almacenamiento interno.',
            title: 'Iphone 11', 
            price: 190000, 
            stock: 2,
            category: 'celulares',
            pictureUrl: Iphone11
        },
            {id: 'iphone-12-pro', 
            description: 'El dispositivo Apple iPhone 12 Pro tiene 128GB, 256GB, 512GB de memoria incorporada. Apple iPhone 12 Pro está equipado con un chipset Apple A14 Bionic (5 nm). El tamaño de la pantalla principal es de 6.1 pulgadas, 90.2 cm2 con la resolución 1170 x 2532 píxeles, 19.5:9 ratio.',
            title: 'Iphone 12 Pro', 
            price: 250000, 
            stock: 1,
            category: 'celulares',
            pictureUrl: Iphone12
        },
            {id: 's20-fe', 
            description: 'El dispositivo Samsung Galaxy S20 FE tiene 128GB 6GB RAM, 128GB 8GB RAM, 256GB 8GB RAM de memoria incorporada. Samsung Galaxy S20 FE está equipado con un chipset Exynos 990 (7 nm+). El tamaño de la pantalla principal es de 6.5 pulgadas, 101.0 cm2 con la resolución 1080 x 2400 píxeles, 20:9 ratio .',
            title: 'Samsung S20 FE', 
            price: 80000, 
            stock: 5,
            category: 'celulares',
            pictureUrl: S20fe
        },
            {id: 'band5', 
            description: 'La Mi Band 5 tiene la guía que rodea el contorno de la pastilla algo más gruesa que la Mi Band 4, por lo que habrá correas que no terminen de encajar a la perfección. Xiaomi mantiene la ligera protuberancia para los sensores PPC del ritmo cardíaco, también el conector de pines para recargar el dispositivo en la parte inferior de la cara trasera.',
            title: 'Xiaomi Band 5', 
            price: 3500, 
            stock: 7,
            category: 'accesorios',
            pictureUrl: Band5
        },
            {id: 'earbuds', 
            description: 'Xiaomi Bluetooth Earphones Earbuds Basic S Value Edition es un verdadero auricular inalámbrico Bluetooth, lo que significa que la conexión entre los auriculares izquierdo y derecho desaparece, pero la experiencia sigue siendo simple. Está equipado con tecnología Bluetooth 5.0 y se conecta instantáneamente a la velocidad más rápida.',
            title: 'Xiaomi Earbuds', 
            price: 3200, 
            stock: 4,
            category: 'accesorios',
            pictureUrl: Buds
        },
            {id: 'active', 
            description: 'El Galaxy Watch Active utiliza diversos sensores de movimientos para registrar de forma automática hasta siete actividades distintas, para que asi te centres únicamente en disfrutar del deporte. Y por si fuera poco, tiene GPS incorporado y es resistente al agua hasta 5 ATM. Maneja tus niveles de estrés de forma segura.',
            title: 'Samsung Active', 
            price: 23200, 
            stock: 2,
            category: 'accesorios',
            pictureUrl: Watch
        }
    ]

export default productos