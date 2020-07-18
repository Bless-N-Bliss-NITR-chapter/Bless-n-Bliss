//FILTER-THE-LIST FUNCTION
function filterList(){
    const searchInput = document.querySelector('#search-input').value.toLowerCase();

    const Cards = document.querySelectorAll('.blog-wrapper');

    Cards.forEach( blogCard => {
        const td1Text = blogCard.querySelector('.s1').textContent.toLowerCase();
        
        const td2Text = blogCard.querySelector('.s2').textContent.toLowerCase();

        if(td1Text.indexOf(searchInput) > -1 || td2Text.indexOf(searchInput) > -1){//if searchInput text is found/matches to td1Text then in indexOf() returns some positive value else it returns -1
            blogCard.style.display = "";
        }
        else{
            blogCard.style.display = "none";
        }
    });
}
