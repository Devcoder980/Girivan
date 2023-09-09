import React from 'react'
import img from '../assets/drawing1.jpeg'
const data = [
    {
        "photo": img,
        "category": "Painting",
        "name": "Colorful Sunset",
        "price": 250,
        "content": "This vibrant painting captures a breathtaking sunset over the ocean."
    },
    {
        "photo": "https://a.1stdibscdn.com/archivesE/upload/f_25383/1516387225434/IMG_2189_master.jpg?width=768",
        "category": "Sculpture",
        "name": "Abstract Marble",
        "price": 500,
        "content": "An abstract marble sculpture that plays with form and texture."
    },
    {
        "photo": "https://pro2-bar-s3-cdn-cf1.myportfolio.com/f574db16829fab9e71c22e7ce68ebd43/281cd2ed-41c6-4d25-86ba-89049bbd08fd_car_4x3.jpg?h=a884a84b0539e1354d9dd2f77e5665e5",
        "category": "Photography",
        "name": "Urban Geometry",
        "price": 150,
        "content": "A photograph showcasing the intriguing geometry of a modern city."
    },
    {
        "photo": "https://i.ytimg.com/vi/1ghlRO6vZcI/maxresdefault.jpg",
        "category": "Drawing",
        "name": "Pencil Sketch",
        "price": 80,
        "content": "A detailed pencil sketch of a serene forest scene."
    }, {
        "photo": "https://th.bing.com/th/id/OIP.BRp69rQtewOSdCJgy3Ze7gHaHI?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "category": "Digital Art",
        "name": "Cyber Dreams",
        "price": 300,
        "content": "A futuristic digital artwork depicting a dreamlike cyberspace."
    }, {
        "photo": "https://th.bing.com/th/id/R.99a32632b7de8a09977601fdf9456ccd?rik=hh4HoRjdXjCdUw&riu=http%3a%2f%2fwww.mixedmediaart.net%2fwp-content%2fuploads%2f2013%2f09%2fPic3-wintertree1.jpg&ehk=sOvKUNU3eYwNq2YS5Wrbs0L1Vv8LECcb46rIfl41CoE%3d&risl=&pid=ImgRaw&r=0",
        "category": "Mixed Media",
        "name": "Nature's Fusion",
        "price": 180,
        "content": "A mixed media piece combining natural elements and abstract forms."
    }, 
    {
        "photo": "https://th.bing.com/th/id/OIP.dZf7o1jguzAzzpgqnCIdwwHaFo?pid=ImgDet&rs=1",
        "category": "Painting",
        "name": "Colorful Sunset",
        "price": 250,
        "content": "This vibrant painting captures a breathtaking sunset over the ocean."
    },
    {
        "photo": "https://a.1stdibscdn.com/archivesE/upload/f_25383/1516387225434/IMG_2189_master.jpg?width=768",
        "category": "Sculpture",
        "name": "Abstract Marble",
        "price": 500,
        "content": "An abstract marble sculpture that plays with form and texture."
    },
    {
        "photo": "https://pro2-bar-s3-cdn-cf1.myportfolio.com/f574db16829fab9e71c22e7ce68ebd43/281cd2ed-41c6-4d25-86ba-89049bbd08fd_car_4x3.jpg?h=a884a84b0539e1354d9dd2f77e5665e5",
        "category": "Photography",
        "name": "Urban Geometry",
        "price": 150,
        "content": "A photograph showcasing the intriguing geometry of a modern city."
    },
    {
        "photo": "https://i.ytimg.com/vi/1ghlRO6vZcI/maxresdefault.jpg",
        "category": "Drawing",
        "name": "Pencil Sketch",
        "price": 80,
        "content": "A detailed pencil sketch of a serene forest scene."
    }, {
        "photo": "https://th.bing.com/th/id/OIP.BRp69rQtewOSdCJgy3Ze7gHaHI?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "category": "Digital Art",
        "name": "Cyber Dreams",
        "price": 300,
        "content": "A futuristic digital artwork depicting a dreamlike cyberspace."
    }, {
        "photo": "https://th.bing.com/th/id/R.99a32632b7de8a09977601fdf9456ccd?rik=hh4HoRjdXjCdUw&riu=http%3a%2f%2fwww.mixedmediaart.net%2fwp-content%2fuploads%2f2013%2f09%2fPic3-wintertree1.jpg&ehk=sOvKUNU3eYwNq2YS5Wrbs0L1Vv8LECcb46rIfl41CoE%3d&risl=&pid=ImgRaw&r=0",
        "category": "Mixed Media",
        "name": "Nature's Fusion",
        "price": 180,
        "content": "A mixed media piece combining natural elements and abstract forms."
    }, 
    {
        "photo": "https://th.bing.com/th/id/OIP.dZf7o1jguzAzzpgqnCIdwwHaFo?pid=ImgDet&rs=1",
        "category": "Painting",
        "name": "Colorful Sunset",
        "price": 250,
        "content": "This vibrant painting captures a breathtaking sunset over the ocean."
    },
    {
        "photo": "https://a.1stdibscdn.com/archivesE/upload/f_25383/1516387225434/IMG_2189_master.jpg?width=768",
        "category": "Sculpture",
        "name": "Abstract Marble",
        "price": 500,
        "content": "An abstract marble sculpture that plays with form and texture."
    },
    {
        "photo": "https://pro2-bar-s3-cdn-cf1.myportfolio.com/f574db16829fab9e71c22e7ce68ebd43/281cd2ed-41c6-4d25-86ba-89049bbd08fd_car_4x3.jpg?h=a884a84b0539e1354d9dd2f77e5665e5",
        "category": "Photography",
        "name": "Urban Geometry",
        "price": 150,
        "content": "A photograph showcasing the intriguing geometry of a modern city."
    },
    {
        "photo": "https://i.ytimg.com/vi/1ghlRO6vZcI/maxresdefault.jpg",
        "category": "Drawing",
        "name": "Pencil Sketch",
        "price": 80,
        "content": "A detailed pencil sketch of a serene forest scene."
    }, {
        "photo": "https://th.bing.com/th/id/OIP.BRp69rQtewOSdCJgy3Ze7gHaHI?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "category": "Digital Art",
        "name": "Cyber Dreams",
        "price": 300,
        "content": "A futuristic digital artwork depicting a dreamlike cyberspace."
    }, {
        "photo": "https://th.bing.com/th/id/R.99a32632b7de8a09977601fdf9456ccd?rik=hh4HoRjdXjCdUw&riu=http%3a%2f%2fwww.mixedmediaart.net%2fwp-content%2fuploads%2f2013%2f09%2fPic3-wintertree1.jpg&ehk=sOvKUNU3eYwNq2YS5Wrbs0L1Vv8LECcb46rIfl41CoE%3d&risl=&pid=ImgRaw&r=0",
        "category": "Mixed Media",
        "name": "Nature's Fusion",
        "price": 180,
        "content": "A mixed media piece combining natural elements and abstract forms."
    }, 
    {
        "photo": "https://th.bing.com/th/id/OIP.dZf7o1jguzAzzpgqnCIdwwHaFo?pid=ImgDet&rs=1",
        "category": "Painting",
        "name": "Colorful Sunset",
        "price": 250,
        "content": "This vibrant painting captures a breathtaking sunset over the ocean."
    },
    {
        "photo": "https://a.1stdibscdn.com/archivesE/upload/f_25383/1516387225434/IMG_2189_master.jpg?width=768",
        "category": "Sculpture",
        "name": "Abstract Marble",
        "price": 500,
        "content": "An abstract marble sculpture that plays with form and texture."
    },
    {
        "photo": "https://pro2-bar-s3-cdn-cf1.myportfolio.com/f574db16829fab9e71c22e7ce68ebd43/281cd2ed-41c6-4d25-86ba-89049bbd08fd_car_4x3.jpg?h=a884a84b0539e1354d9dd2f77e5665e5",
        "category": "Photography",
        "name": "Urban Geometry",
        "price": 150,
        "content": "A photograph showcasing the intriguing geometry of a modern city."
    },
    {
        "photo": "https://i.ytimg.com/vi/1ghlRO6vZcI/maxresdefault.jpg",
        "category": "Drawing",
        "name": "Pencil Sketch",
        "price": 80,
        "content": "A detailed pencil sketch of a serene forest scene."
    }, {
        "photo": "https://th.bing.com/th/id/OIP.BRp69rQtewOSdCJgy3Ze7gHaHI?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "category": "Digital Art",
        "name": "Cyber Dreams",
        "price": 300,
        "content": "A futuristic digital artwork depicting a dreamlike cyberspace."
    }, {
        "photo": "https://th.bing.com/th/id/R.99a32632b7de8a09977601fdf9456ccd?rik=hh4HoRjdXjCdUw&riu=http%3a%2f%2fwww.mixedmediaart.net%2fwp-content%2fuploads%2f2013%2f09%2fPic3-wintertree1.jpg&ehk=sOvKUNU3eYwNq2YS5Wrbs0L1Vv8LECcb46rIfl41CoE%3d&risl=&pid=ImgRaw&r=0",
        "category": "Mixed Media",
        "name": "Nature's Fusion",
        "price": 180,
        "content": "A mixed media piece combining natural elements and abstract forms."
    }, 
    {
        "photo": "https://th.bing.com/th/id/OIP.dZf7o1jguzAzzpgqnCIdwwHaFo?pid=ImgDet&rs=1",
        "category": "Painting",
        "name": "Colorful Sunset",
        "price": 250,
        "content": "This vibrant painting captures a breathtaking sunset over the ocean."
    },
    {
        "photo": "https://a.1stdibscdn.com/archivesE/upload/f_25383/1516387225434/IMG_2189_master.jpg?width=768",
        "category": "Sculpture",
        "name": "Abstract Marble",
        "price": 500,
        "content": "An abstract marble sculpture that plays with form and texture."
    },
    {
        "photo": "https://pro2-bar-s3-cdn-cf1.myportfolio.com/f574db16829fab9e71c22e7ce68ebd43/281cd2ed-41c6-4d25-86ba-89049bbd08fd_car_4x3.jpg?h=a884a84b0539e1354d9dd2f77e5665e5",
        "category": "Photography",
        "name": "Urban Geometry",
        "price": 150,
        "content": "A photograph showcasing the intriguing geometry of a modern city."
    },
    {
        "photo": "https://i.ytimg.com/vi/1ghlRO6vZcI/maxresdefault.jpg",
        "category": "Drawing",
        "name": "Pencil Sketch",
        "price": 80,
        "content": "A detailed pencil sketch of a serene forest scene."
    }, {
        "photo": "https://th.bing.com/th/id/OIP.BRp69rQtewOSdCJgy3Ze7gHaHI?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "category": "Digital Art",
        "name": "Cyber Dreams",
        "price": 300,
        "content": "A futuristic digital artwork depicting a dreamlike cyberspace."
    }, {
        "photo": "https://th.bing.com/th/id/R.99a32632b7de8a09977601fdf9456ccd?rik=hh4HoRjdXjCdUw&riu=http%3a%2f%2fwww.mixedmediaart.net%2fwp-content%2fuploads%2f2013%2f09%2fPic3-wintertree1.jpg&ehk=sOvKUNU3eYwNq2YS5Wrbs0L1Vv8LECcb46rIfl41CoE%3d&risl=&pid=ImgRaw&r=0",
        "category": "Mixed Media",
        "name": "Nature's Fusion",
        "price": 180,
        "content": "A mixed media piece combining natural elements and abstract forms."
    }, 
    {
        "photo": "https://th.bing.com/th/id/OIP.dZf7o1jguzAzzpgqnCIdwwHaFo?pid=ImgDet&rs=1",
        "category": "Painting",
        "name": "Colorful Sunset",
        "price": 250,
        "content": "This vibrant painting captures a breathtaking sunset over the ocean."
    },
    {
        "photo": "https://a.1stdibscdn.com/archivesE/upload/f_25383/1516387225434/IMG_2189_master.jpg?width=768",
        "category": "Sculpture",
        "name": "Abstract Marble",
        "price": 500,
        "content": "An abstract marble sculpture that plays with form and texture."
    },
    {
        "photo": "https://pro2-bar-s3-cdn-cf1.myportfolio.com/f574db16829fab9e71c22e7ce68ebd43/281cd2ed-41c6-4d25-86ba-89049bbd08fd_car_4x3.jpg?h=a884a84b0539e1354d9dd2f77e5665e5",
        "category": "Photography",
        "name": "Urban Geometry",
        "price": 150,
        "content": "A photograph showcasing the intriguing geometry of a modern city."
    },
    {
        "photo": "https://i.ytimg.com/vi/1ghlRO6vZcI/maxresdefault.jpg",
        "category": "Drawing",
        "name": "Pencil Sketch",
        "price": 80,
        "content": "A detailed pencil sketch of a serene forest scene."
    }, {
        "photo": "https://th.bing.com/th/id/OIP.BRp69rQtewOSdCJgy3Ze7gHaHI?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "category": "Digital Art",
        "name": "Cyber Dreams",
        "price": 300,
        "content": "A futuristic digital artwork depicting a dreamlike cyberspace."
    }, {
        "photo": "https://th.bing.com/th/id/R.99a32632b7de8a09977601fdf9456ccd?rik=hh4HoRjdXjCdUw&riu=http%3a%2f%2fwww.mixedmediaart.net%2fwp-content%2fuploads%2f2013%2f09%2fPic3-wintertree1.jpg&ehk=sOvKUNU3eYwNq2YS5Wrbs0L1Vv8LECcb46rIfl41CoE%3d&risl=&pid=ImgRaw&r=0",
        "category": "Mixed Media",
        "name": "Nature's Fusion",
        "price": 180,
        "content": "A mixed media piece combining natural elements and abstract forms."
    }, 
    
]

function header() {
    return (
        <div className='flex flex-wrap justify-center gap-20 h-full w-full items-center'>
            {data.map((a)=>(
    <div className="w-[7cm] h-[10cm] rounded-md">
            <div className="h-[6cm] m-auto pt-1 bg-gray-200 ">
                <img src={a.photo} alt=""  className='w-[6cm] h-[5cm] m-auto mt-3  shadow-gray-700 shadow-xl object-scale-down'/>
            </div>
            <div className='pl-1'>
        <p className='text-red-400 text-lg font-bold'>{a.name}</p>
        <p  className='font-bold'>₹{a.price}</p>

        <p  className='font-snans'>{a.content}</p>
         <button className='bg-blue-400 rounded-sm mt-2 p-1'>Buy Now</button>
        </div>
    </div>
    
      ))}
    </div>
    )
}

export default header;
