var ListNav = (function() {
    var LN = function(ul) {
        this.ul = ul;
    };

    LN.prototype = {
        start: function() {
            var list = this.ul.getElementsByTagName('li');
            //first assign all of the letters
            for (var i = 0, ii = list.length; i < ii; i++) {
                this.assignLetter(list[i]);
            }

            var navName = this.ul.id + '-nav';

            var links = document.getElementById(navName).getElementsByTagName('a');

            var ul = this.ul; //alias for simplicity - I got bored of typing this.id

            for (var i = 0, ii = links.length; i < ii; i++) {
                links[i].onclick = function(event) {
                    var evt = window.event || event; //event standadisation
                    evt.preventDefault ? evt.preventDefault() : evt.returnValue = false; //IE8 does not support event.preventDefault() - thanks Microsoft.
                    var link_val = this.innerHTML.toLowerCase();
                    LN.prototype.showHide(link_val, ul);
                };
            }
            //create and bind the 'All' link
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.setAttribute('id', 'all-link');
            a.setAttribute('href', '#/all');
            a.innerHTML = "All";
            li.appendChild(a);
            document.getElementById(navName).insertBefore(li, document.getElementById(navName).firstChild);
            var that = this; //alias
            document.getElementById('all-link').onclick = function() {
                var insertFunction = that.removeAndInsert(ul);
                var to_show = ul.getElementsByTagName('li');
                for (var i = 0, ii = to_show.length; i < ii; i++) {
                    to_show[i].style.display = 'inline-block';
                }
                insertFunction();
            };


        },


        showHide: function(letter, ul) {
            var list = ul.getElementsByTagName('li');
            for (var i = 0, ii = list.length; i < ii; i++) {
                list[i].style.display = 'none';
            }

            //show the li that match the letter
            var search = '.' + letter;
            var to_show = document.querySelectorAll(search);
            var insertFunction = this.removeAndInsert(ul);
            for (var i = 0, ii = to_show.length; i < ii; i++) {
                to_show[i].style.display = 'inline-block';
            }
            insertFunction();
        },


        removeAndInsert: function(el) {
            var parentNode = el.parentNode;
            var nextSibling = el.nextSibling;
            parentNode.removeChild(el);
            return function() {
                if (nextSibling) {
                    parentNode.insertBefore(el, nextSibling);
                } else {
                    parentNode.appendChild(el);
                }
            };
        },

        assignLetter: function(el) {
            //uses a hash table top assign letters to all of the li in the ul so that they can be sorted.
            //hash tables are much more efficient than switch statements in JavaScript
            var first = el.getElementsByTagName('a')[0].innerHTML.charAt(0).toLowerCase();
            var cases = {};
            cases['a'] = function() {
                el.className += ' a';
            };
            cases['b'] = function() {
                el.className += ' b';
            };
            cases['c'] = function() {
                el.className += ' c';
            };
            cases['d'] = function() {
                el.className += ' d';
            };
            cases['e'] = function() {
                el.className += ' e';
            };
            cases['f'] = function() {
                el.className += ' f';
            };
            cases['g'] = function() {
                el.className += ' g';
            };
            cases['h'] = function() {
                el.className += ' h';
            };
            cases['i'] = function() {
                el.className += ' i';
            };
            cases['j'] = function() {
                el.className += ' j';
            };
            cases['k'] = function() {
                el.className += ' k';
            };
            cases['l'] = function() {
                el.className += ' l';
            };
            cases['m'] = function() {
                el.className += ' m';
            };
            cases['n'] = function() {
                el.className += ' n';
            };
            cases['o'] = function() {
                el.className += ' o';
            };
            cases['p'] = function() {
                el.className += ' p';
            };
            cases['q'] = function() {
                el.className += ' q';
            };
            cases['r'] = function() {
                el.className += ' r';
            };
            cases['s'] = function() {
                el.className += ' s';
            };
            cases['t'] = function() {
                el.className += ' t';
            };
            cases['u'] = function() {
                el.className += ' u';
            };
            cases['v'] = function() {
                el.className += ' v';
            };
            cases['w'] = function() {
                el.className += ' w';
            };
            cases['x'] = function() {
                el.className += ' x';
            };
            cases['y'] = function() {
                el.className += ' y';
            };
            cases['z'] = function() {
                el.className += ' z';
            };

            if (typeof cases[first] == 'function') {
                cases[first]();
            }
        }
        //end prototype
    };

    return {
        init: function(ul) {
            return new LN(ul);
        }
    }

})(ListNav);