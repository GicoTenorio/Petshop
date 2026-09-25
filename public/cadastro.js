const petForm = document.getElementById('petForm');

petForm.addEventListener('submit', async(e) =>{
    e.preventDefault();

    const formData = new FormData();
    formData.append(document.getElementById('tutor').value.trim());
    formData.append(document.getElementById('nomePet').value.trim());
    formData.append(document.getElementById('raca').value.trim());
    formData.append(document.getElementById('genero').value);
    formData.append(document.getElementById('peso').value);
    formData.append(document.getElementById('idade').value);

    const imagemInput = document.getElementById("imagem");

    if (imagemInput.files[0]){
        formData.append('imagem', imagemInput.files[0])
    }
    try {
        const response = await fetch ('http://localhost:3000/api/pets', {
            method: 'POST',
            body: formData,
       });
       
       const data = await response.json();

       if (response.ok) {
            alert(data.message);
            petForm.reset();
            window.location.href = 'dashboard.html';
       } else {
        alert(data.message);
       }
    } catch (error) {
        console.error ('Erro na requisição:', error);
        alert('Erro ao conectar com o servidor');
    }
})