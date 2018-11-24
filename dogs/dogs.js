var indeksSlike = 1;

function predhodna () {
    if (indeksSlike == 1) {
        indeksSlike = 9;
    } else {
        indeksSlike --;
    }
    document.getElementById('dog').src = 
                'Slike/dog' + indeksSlike + ".jpg";

}

function sledeca () {
    if (indeksSlike == 9) {
        indeksSlike = 1;
    } else {
        indeksSlike ++;
    }
    document.getElementById('dog').src = 
                'Slike/dog' + indeksSlike + ".jpg";

}



