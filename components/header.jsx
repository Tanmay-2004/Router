import React from "react"

function header(){
    return(
        <header class="bg-blue-600 text-white p-4">
             <h1 class="text-4xl font-bold">Welcome to My Page</h1>
              <nav class="mt-2">
                 <ul class="flex space-x-4">
                     <li><a href="#" class="text-white hover:underline">Home</a>
                     </li> 
                     <li><a href="#" class="text-white hover:underline">About</a></li> 
                     <li><a href="#" class="text-white hover:underline">Contact</a></li> 
                     </ul> 
                     </nav> 
                     </header>
    )
}

export default header