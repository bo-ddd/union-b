export default function changeColor(num) {
    let root = document.querySelector(":root");
    localStorage.setItem("theme",num)
     if (num == 'red1') {
      root.style.setProperty("--color", "rgb(255, 241, 240)");
      root.style.setProperty("--textcolor", "rgb(255, 77, 79)");
    } else if (num == 'red2') {
      root.style.setProperty("--color", "rgb(255, 204, 199)");
      root.style.setProperty("--textcolor", "rgb(255, 77, 79)");
    } else if (num == 'red3') {
      root.style.setProperty("--color", "rgb(255, 163, 158)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'red4') {
      root.style.setProperty("--color", "rgb(255, 120, 117)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'red5') {
      root.style.setProperty("--color", "rgb(255, 77, 79)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'red6') {
      root.style.setProperty("--color", "rgb(245, 34, 45)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'red7') {
      root.style.setProperty("--color", "rgb(207, 19, 34)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'red8') {
      root.style.setProperty("--color", "rgb(207, 19, 34)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'red9') {
      root.style.setProperty("--color", "rgb(130, 0, 20)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'red10') {
      root.style.setProperty("--color", "rgb(92, 0, 17)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'volcano1') {
      root.style.setProperty("--color", "rgb(255, 242, 232)");
      root.style.setProperty("--textcolor", "rgb(250, 84, 28)");
    } else if (num == 'volcano2') {
      root.style.setProperty("--color", "rgb(255, 216, 191)");
      root.style.setProperty("--textcolor", "rgb(250, 84, 28)");
    } else if (num == 'volcano3') {
      root.style.setProperty("--color", "rgb(255, 187, 150)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'volcano4') {
      root.style.setProperty("--color", "rgb(255, 156, 110)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'volcano5') {
      root.style.setProperty("--color", "rgb(255, 169, 64)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'volcano6') {
      root.style.setProperty("--color", "rgb(250, 84, 28)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'volcano7') {
      root.style.setProperty("--color", "rgb(212, 56, 13)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'volcano8') {
      root.style.setProperty("--color", "rgb(173, 33, 2)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'volcano9') {
      root.style.setProperty("--color", "rgb(135, 20, 0)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'volcano10') {
      root.style.setProperty("--color", "rgb(97, 11, 0)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'orange1') {
      root.style.setProperty("--color", "rgb(255, 247, 230)");
      root.style.setProperty("--textcolor", "rgb(250, 140, 22)");
    } else if (num == 'orange2') {
      root.style.setProperty("--color", "rgb(255, 231, 186)");
      root.style.setProperty("--textcolor", "rgb(250, 140, 22)");
    } else if (num == 'orange3') {
      root.style.setProperty("--color", "rgb(255, 213, 145)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'orange4') {
      root.style.setProperty("--color", "rgb(255, 192, 105)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'orange5') {
      root.style.setProperty("--color", "rgb(255, 169, 64)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'orange6') {
      root.style.setProperty("--color", "rgb(250, 140, 22)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'orange7') {
      root.style.setProperty("--color", "rgb(212, 107, 8)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'orange8') {
      root.style.setProperty("--color", "rgb(173, 78, 0)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'orange9') {
      root.style.setProperty("--color", "rgb(135, 56, 0)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'orange10') {
      root.style.setProperty("--color", "rgb(97, 37, 0)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } 
    else if (num == 'gold1') {
      root.style.setProperty("--color", "rgb(255, 251, 230)");
      root.style.setProperty("--textcolor", "rgb(250, 173, 20)");
    } else if (num == 'gold2') {
      root.style.setProperty("--color", "rgb(255, 241, 184)");
      root.style.setProperty("--textcolor", "rgb(250, 173, 20)");
    } else if (num == 'gold3') {
      root.style.setProperty("--color", "rgb(255, 229, 143)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'gold4') {
      root.style.setProperty("--color", "rgb(255, 214, 102)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'gold5') {
      root.style.setProperty("--color", "rgb(255, 197, 61)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'gold6') {
      root.style.setProperty("--color", "rgb(250, 173, 20)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'gold7') {
      root.style.setProperty("--color", "rgb(212, 136, 6)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'gold8') {
      root.style.setProperty("--color", "rgb(173, 104, 0)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'gold9') {
      root.style.setProperty("--color", "rgb(135, 77, 0)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'gold10') {
      root.style.setProperty("--color", "rgb(97, 52, 0)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    }
    else if (num == 'yellow1') {
      root.style.setProperty("--color", "rgb(254, 255, 230)");
      root.style.setProperty("--textcolor", "rgb(250, 173, 20)");
    } else if (num == 'yellow2') {
      root.style.setProperty("--color", "rgb(255, 255, 184)");
      root.style.setProperty("--textcolor", "rgb(250, 173, 20)");
    } else if (num == 'yellow3') {
      root.style.setProperty("--color", "rgb(255, 251, 143)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'yellow4') {
      root.style.setProperty("--color", "rgb(255, 245, 102)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'yellow5') {
      root.style.setProperty("--color", "rgb(255, 236, 61)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'yellow6') {
      root.style.setProperty("--color", "rgb(250, 219, 20)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'yellow7') {
      root.style.setProperty("--color", "rgb(212, 177, 6)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'yellow8') {
      root.style.setProperty("--color", "rgb(173, 139, 0)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'yellow9') {
      root.style.setProperty("--color", "rgb(135, 104, 0)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'yellow10') {
      root.style.setProperty("--color", "rgb(97, 71, 0)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    }
    else if (num == 'lime1') {
      root.style.setProperty("--color", "rgb(252, 255, 230)");
      root.style.setProperty("--textcolor", "rgb(160, 217, 17)");
    } else if (num == 'lime2') {
      root.style.setProperty("--color", "rgb(244, 255, 184)");
      root.style.setProperty("--textcolor", "rgb(160, 217, 17)");
    } else if (num == 'lime3') {
      root.style.setProperty("--color", "rgb(234, 255, 143)");
      root.style.setProperty("--textcolor", "rgb(160, 217, 17)");
    } else if (num == 'lime4') {
      root.style.setProperty("--color", "rgb(211, 242, 97)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'lime5') {
      root.style.setProperty("--color", "rgb(186, 230, 55)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'lime6') {
      root.style.setProperty("--color", "rgb(160, 217, 17)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'lime7') {
      root.style.setProperty("--color", "rgb(124, 179, 5)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'lime8') {
      root.style.setProperty("--color", "rgb(91, 140, 0)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'lime9') {
      root.style.setProperty("--color", "rgb(63, 102, 0)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'lime10') {
      root.style.setProperty("--color", "rgb(37, 64, 0)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    }
    else if (num == 'green1') {
      root.style.setProperty("--color", "rgb(246, 255, 237)");
      root.style.setProperty("--textcolor", "rgb(82, 196, 26)");
    } else if (num == 'green2') {
      root.style.setProperty("--color", "rgb(217, 247, 190)");
      root.style.setProperty("--textcolor", "rgb(82, 196, 26)");
    } else if (num == 'green3') {
      root.style.setProperty("--color", "rgb(183, 235, 143)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'green4') {
      root.style.setProperty("--color", "rgb(149, 222, 100)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'green5') {
      root.style.setProperty("--color", "rgb(115, 209, 61)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'green6') {
      root.style.setProperty("--color", "rgb(82, 196, 26)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'green7') {
      root.style.setProperty("--color", "rgb(56, 158, 13)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'green8') {
      root.style.setProperty("--color", "rgb(35, 120, 4)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'green9') {
      root.style.setProperty("--color", "rgb(19, 82, 0)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'green10') {
      root.style.setProperty("--color", "rgb(9, 43, 0)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    }
    else if (num == 'cyan1') {
      root.style.setProperty("--color", "rgb(230, 255, 251)");
      root.style.setProperty("--textcolor", "rgb(19, 194, 194)");
    } else if (num == 'cyan2') {
      root.style.setProperty("--color", "rgb(181, 245, 236)");
      root.style.setProperty("--textcolor", "rgb(19, 194, 194)");
    } else if (num == 'cyan3') {
      root.style.setProperty("--color", "rgb(135, 232, 222)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'cyan4') {
      root.style.setProperty("--color", "rgb(92, 219, 211)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'cyan5') {
      root.style.setProperty("--color", "rgb(54, 207, 201)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'cyan6') {
      root.style.setProperty("--color", "rgb(19, 194, 194)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'cyan7') {
      root.style.setProperty("--color", "rgb(8, 151, 156)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'cyan8') {
      root.style.setProperty("--color", "rgb(0, 109, 117)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'cyan9') {
      root.style.setProperty("--color", "rgb(0, 71, 79)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'cyan10') {
      root.style.setProperty("--color", "rgb(0, 35, 41)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    }
    else if (num == 'blue1') {
      root.style.setProperty("--color", "rgb(230, 247, 255)");
      root.style.setProperty("--textcolor", "rgb(24, 144, 255)");
    } else if (num == 'blue2') {
      root.style.setProperty("--color", "rgb(186, 231, 255)");
      root.style.setProperty("--textcolor", "rgb(24, 144, 255)");
    } else if (num == 'blue3') {
      root.style.setProperty("--color", "rgb(145, 213, 255)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'blue4') {
      root.style.setProperty("--color", "rgb(105, 192, 255)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'blue5') {
      root.style.setProperty("--color", "rgb(64, 169, 255)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'blue6') {
      root.style.setProperty("--color", "rgb(24, 144, 255)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'blue7') {
      root.style.setProperty("--color", "rgb(9, 109, 217)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'blue8') {
      root.style.setProperty("--color", "rgb(0, 80, 179)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'blue9') {
      root.style.setProperty("--color", "rgb(0, 58, 140)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'blue10') {
      root.style.setProperty("--color", "rgb(0, 39, 102)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    }
    else if (num == 'geekblue1') {
      root.style.setProperty("--color", "rgb(240, 245, 255)");
      root.style.setProperty("--textcolor", "rgb(47, 84, 235)");
    } else if (num == 'geekblue2') {
      root.style.setProperty("--color", "rgb(214, 228, 255)");
      root.style.setProperty("--textcolor", "rgb(47, 84, 235)");
    } else if (num == 'geekblue3') {
      root.style.setProperty("--color", "rgb(173, 198, 255)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'geekblue4') {
      root.style.setProperty("--color", "rgb(133, 165, 255)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'geekblue5') {
      root.style.setProperty("--color", "rgb(89, 126, 247)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'geekblue6') {
      root.style.setProperty("--color", "rgb(47, 84, 235)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'geekblue7') {
      root.style.setProperty("--color", "rgb(29, 57, 196)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'geekblue8') {
      root.style.setProperty("--color", "rgb(16, 35, 158)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'geekblue9') {
      root.style.setProperty("--color", "rgb(6, 17, 120)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'geekblue10') {
      root.style.setProperty("--color", "rgb(3, 8, 82)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    }
    else if (num == 'purple1') {
      root.style.setProperty("--color", "rgb(249, 240, 255)");
      root.style.setProperty("--textcolor", "rgb(114, 46, 209)");
    } else if (num == 'purple2') {
      root.style.setProperty("--color", "rgb(239, 219, 255)");
      root.style.setProperty("--textcolor", "rgb(114, 46, 209)");
    } else if (num == 'purple3') {
      root.style.setProperty("--color", "rgb(211, 173, 247)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'purple4') {
      root.style.setProperty("--color", "rgb(179, 127, 235)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'purple5') {
      root.style.setProperty("--color", "rgb(89, 126, 247)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'purple6') {
      root.style.setProperty("--color", "rgb(114, 46, 209)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'purple7') {
      root.style.setProperty("--color", "rgb(83, 29, 171)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'purple8') {
      root.style.setProperty("--color", "rgb(57, 16, 133)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'purple9') {
      root.style.setProperty("--color", "rgb(34, 7, 94)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'purple10') {
      root.style.setProperty("--color", "rgb(18, 3, 56)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    }
    else if (num == 'magenta1') {
      root.style.setProperty("--color", "rgb(255, 240, 246)");
      root.style.setProperty("--textcolor", "rgb(235, 47, 150)");
    } else if (num == 'magenta2') {
      root.style.setProperty("--color", "rgb(255, 214, 231)");
      root.style.setProperty("--textcolor", "rgb(235, 47, 150)");
    } else if (num == 'magenta3') {
      root.style.setProperty("--color", "rgb(255, 173, 210)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'magenta4') {
      root.style.setProperty("--color", "rgb(255, 133, 192)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'magenta5') {
      root.style.setProperty("--color", "rgb(247, 89, 171)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'magenta6') {
      root.style.setProperty("--color", "rgb(235, 47, 150)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'magenta7') {
      root.style.setProperty("--color", "rgb(196, 29, 127)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'magenta8') {
      root.style.setProperty("--color", "rgb(158, 16, 104)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'magenta9') {
      root.style.setProperty("--color", "rgb(120, 6, 80)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    } else if (num == 'magenta10') {
      root.style.setProperty("--color", "rgb(82, 3, 57)");
      root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
    }
     
}