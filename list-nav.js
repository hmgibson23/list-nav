/*Remove the passed element from the DOM, and reinsert it later*/

function removeAndInsert(el) {
    var parentNode = el.parentNode;
    var nextSibling = el.nextSibling;
    parentNode.removeChild(el);
    return function() {
        if(nextSibling) {
            parentNode.insertBefore(el, nextSibling);
        } else {
            parentNode.appendChild(el);
        }
    }
}

/*removes a class from an element*/

function removeClass(el, cls) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    el.className = el.className.replace(reg, ' ');
}

function ULSort(ul) {
    var list = ul.getElementsByTagName('li');
    //first assign all of the letters
    for(var i = 0, ii = list.length; i < ii; i++) {
        assignLetter(list[i]);
    }
    //now make an alphabetical list
    var navName = ul.id + '-nav';
    document.getElementById(navName).innerHTML = '<ul><li><a href="#">A</a></li><li><a href="#">B</a></li><li><a href="#">C</a></li><li><a href="#">D</a></li><li><a href="#">E</a></li><li><a href="#">F</a></li><li><a href="#">G</a></li><li><a href="#">H</a></li><li><a href="#">I</a></li><li><a href="#">J</a></li><li><a href="#">K</a></li><li><a href="#">L</a></li><li><a href="#">M</a></li><li><a href="#">N</a></li><li><a href="#">O</a></li><li><a href="#">P</a></li><li><a href="#">Q</a></li><li><a href="#">R</a></li><li><a href="#">S</a></li><li><a href="#">T</a></li><li><a href="#">U</a></li><li><a href="#">V</a></li><li><a href="#">W</a></li><li><a href="#">X</a></li><li><a href="#">Y</a></li><li><a href="#">Z</a></li></ul>';

    var links = document.getElementById(navName).firstChild.getElementsByTagName('a');
    for(var i = 0, ii = links.length; i < ii; i++) {
        links[i].onclick = function(event) {
            var link_val = this.innerHTML.toLowerCase();
            showHide(link_val, ul);
        }
    }

}

function showHide(letter, ul) {
    var list = ul.getElementsByTagName('li');
    for(var i = 0, ii = list.length; i < ii; i++) {
        removeClass(list[i], 'li-show');
        removeClass(list[i], 'li-default');
        list[i].className += ' li-default';
    }

    //show the li that match the letter
    var search = '.' + letter;
    var to_show = document.querySelectorAll(search);
    var insertFunction = removeAndInsert(ul);
    for(var i = 0, ii = to_show.length; i < ii; i++) {
        to_show[i].className += ' li-show';
    }
    insertFunction();
}

function assignLetter(el) {
    //uses a hash table top assign letters to all of the li in the ul so that they can be sorted.
    //hash tables are much more efficient than switch statements in JavaScript
    var first = el.firstChild.innerHTML[0].toLowerCase();
    var cases = {};
    cases['a'] = function() {
        el.setAttribute('class', 'a');
    }
    cases['b'] = function() {
        el.setAttribute('class', 'b');
    }
    cases['c'] = function() {
        el.setAttribute('class', 'c');
    }
    cases['d'] = function() {
        el.setAttribute('class', 'd');
    }
    cases['e'] = function() {
        el.setAttribute('class', 'e');
    }
    cases['f'] = function() {
        el.setAttribute('class', 'f');
    }
    cases['g'] = function() {
        el.setAttribute('class', 'g');
    }
    cases['h'] = function() {
        el.setAttribute('class', 'h');
    }
    cases['i'] = function() {
        el.setAttribute('class', 'i');
    }
    cases['j'] = function() {
        el.setAttribute('class', 'j');
    }
    cases['k'] = function() {
        el.setAttribute('class', 'k');
    }
    cases['l'] = function() {
        el.setAttribute('class', 'l');
    }
    cases['m'] = function() {
        el.setAttribute('class', 'm');
    }
    cases['n'] = function() {
        el.setAttribute('class', 'n');
    }
    cases['o'] = function() {
        el.setAttribute('class', 'o');
    }
    cases['p'] = function() {
        el.setAttribute('class', 'p');
    }
    cases['q'] = function() {
        el.setAttribute('class', 'q');
    }
    cases['r'] = function() {
        el.setAttribute('class', 'r');
    }
    cases['s'] = function() {
        el.setAttribute('class', 's');
    }
    cases['t'] = function() {
        el.setAttribute('class', 't');
    }
    cases['u'] = function() {
        el.setAttribute('class', 'u');
    }
    cases['v'] = function() {
        el.setAttribute('class', 'v');
    }
    cases['w'] = function() {
        el.setAttribute('class', 'w');
    }
    cases['x'] = function() {
        el.setAttribute('class', 'x');
    }
    cases['y'] = function() {
        el.setAttribute('class', 'y');
    }
    cases['z'] = function() {
        el.setAttribute('class', 'z');
    }

    if(typeof cases[first] == 'function') {
        cases[first]();
    }
}