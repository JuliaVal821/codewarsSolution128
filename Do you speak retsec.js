https://www.codewars.com/kata/5516ab668915478845000780/train/javascript

    function reverseByCenter(s){
        let slen = s.length;
        let m = Math.floor(slen / 2);
        return slen % 2 === 0 ? s.slice(m) + s.slice(0, m) : s.slice(m + 1) + s[m] + s.slice(0, m);
    }