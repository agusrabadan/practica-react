import React from "react";



function Card () {
    return (
        <div class="card">
  <div class="card-header text-danger">
    <h2>Inmobiliaria Valencia</h2>
  </div>
  <div class="card-body">
    <h5 class="card-title">Atico Paiporta 60mt + 60mt Terraza</h5>
    <p class="card-text">Excelente propiedad situada en la zona nueva de Paiporta, a 5 minutos de Valencia, conectada con metro zona A. Enorme terraza con barbacoa, 2 habitaciones, 1 baño, cocina totalmente equipada. No dejes pasar esta oportunidad</p>
    
<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Contact
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Agustin Rabadan</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Telf: 679 657 912</p>
        <p>Mail: agusrabadan85@gmail.com</p>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
  </div>
</div>
    )
}

export default Card;
