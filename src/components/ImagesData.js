import React from "react";
import FileSaver, { saveAs } from "file-saver";



function saveImage(imageUrl){
    FileSaver.saveAs("https://cors-anywhere.herokuapp.com/"+imageUrl, "Image.png")
}

function ImageDownloadButton(imageUrl) {

    fetch(imageUrl,{
        headers:{'Access-Control-Allow-Origin': '*'},
        mode: 'no-cors'
    })
    .then(response => response.blob())
    .then(blob => {
      // Crear un objeto de URL para la imagen
      const url = window.URL.createObjectURL(blob);

      // Crear un elemento de ancla
      const link = document.createElement('a');

      // Establecer el atributo de descarga y el nombre de archivo
      link.download = 'imagen.png';

      // Establecer el enlace de descarga a la URL de la imagen
      link.href = imageUrl;

      // Hacer clic en el enlace de descarga
      link.click();

      // Liberar el objeto de URL
      window.URL.revokeObjectURL(url);
    });
    // Obtener los datos de la imagen

}


function ImagesData({ imagesData=[]  }) {
    console.log(imagesData)
    return (
        <div className="row">
            
            {
                imagesData.map((item, index) => (
                    <div key={index} className="col" style={{ minWidth: "100px", maxWidth: "300px" }}>
                        <div className="card card-response">

                            <img  src={item.url} alt="#"></img>


                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="d-grid gap-2">
                                            <button class="btn btn-outline-dark" type="button" onClick={() => {saveImage(item.url)}}><i className="fa fa-download" ></i> Download</button>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-grid gap-2">
                                            <a className="btn btn-outline-dark" data-bs-toggle="tooltip" data-bs-placement="top" title="view image" href={item.url} target="_blank"><i class="fa fa-picture-o" aria-hidden="true"></i> View</a>
                                        </div>
                                    </div>
                                </div>



                            </div>

                        </div>
                    </div>
                ))
            }




        </div>
    )
}


export { ImagesData }