const days = ["H�tf�", "Kedd", "Szerda", "Cs�t�rt�k", "P�ntek"]
const colorMap = {
    //Lyukas �ra
    0: "pink",

    //K�z�s �ra
    1: "lightskyblue",

    //Inf-Tk �ra
    2: "yellow",

    //Angol �ra
    3: "lawngreen",

    //2. idegen nyelv �ra
    4: "orange"
}
const nyf =
    [
        [
            //H�tf�-0
            {
                type: 2,
                data: {
                    szt: {
                        name: "Darab�nt",
                        class: "mt",
                        room: "I.30"
                    }
                }
            },
            //H�tf�-1
            {
                type: 2,
                data: {
                    szt: {
                        name: "Krajny�k",
                        class: "inf",
                        room: "Szt.2"
                    },
                    tk: {
                        name: "Szabados",
                        class: "inf",
                        room: "Tk."
                    }
                }
            },
            //H�tf�-2
            {
                type: 2,
                data: {
                    szt: {
                        name: "Krajny�k",
                        class: "inf",
                        room: "Szt.2"
                    },
                    tk: {
                        name: "P�k",
                        class: "inf",
                        room: "Tk."
                    }
                }
            },
            //H�tf�-3
            {
                type: 4,
                data: {
                    ne1: {
                        name: "Hal�sz",
                        class: "n�",
                        room: "R."
                    },
                    ol: {
                        name: "Gianelli",
                        class: "ol",
                        room: "Ol.2"
                    },
                    ne2: {
                        name: "S�tin�",
                        class: "n�",
                        room: "N."
                    },
                    sp: {
                        name: "Sum",
                        class: "sp",
                        room: "Sp."
                    },
                    fr: {
                        name: "Szabolcsi",
                        class: "fr",
                        room: "Fr."
                    }
                }
            },
            //H�tf�-4
            {
                type: 0
            },
            //H�tf�-5
            {
                type: 3,
                data: {
                    an2: {
                        name: "Hajba",
                        class: "a",
                        room: "Szt.3"
                    },
                    an3: {
                        name: "Seprenyi",
                        class: "a",
                        room: "II.41"
                    },
                    an4: {
                        name: "T�th",
                        class: "a",
                        room: "A.3"
                    },
                    an1: {
                        name: "Varga Bo.",
                        class: "a",
                        room: "I.30"
                    }
                }
            },
            //H�tf�-6
            {
                type: 3,
                data: {
                    an2: {
                        name: "Bert�k",
                        class: "a",
                        room: "Szt.3"
                    },
                    an3: {
                        name: "Seprenyi",
                        class: "a",
                        room: "II.41"
                    },
                    an4: {
                        name: "T�th",
                        class: "a",
                        room: "A.3"
                    },
                    an1: {
                        name: "Varga Bo.",
                        class: "a",
                        room: "I.30"
                    }
                }
            },
            //H�tf�-7
            {
                type: 0
            },
            //H�tf�-8
            {
                type: 0
            }
        ],
        [
            //Kedd-0
            {
                type: 0
            },
            //Kedd-1
            {
                type: 4,
                data: {
                    ne1: {
                        name: "Hal�sz",
                        class: "n�",
                        room: "N."
                    },
                    ol: {
                        name: "Gianelli",
                        class: "ol",
                        room: "Ol.1"
                    },
                    ne2: {
                        name: "S�tin�",
                        class: "n�",
                        room: "A.1"
                    },
                    sp: {
                        name: "Sum",
                        class: "sp",
                        room: "Sp."
                    },
                    fr: {
                        name: "Szabolcsi",
                        class: "fr",
                        room: "Fr."
                    }
                }
            },
            //Kedd-2
            {
                type: 4,
                data: {
                    ne1: {
                        name: "Hal�sz",
                        class: "n�",
                        room: "N."
                    },
                    ol: {
                        name: "Gianelli",
                        class: "ol",
                        room: "Ol.1"
                    },
                    ne2: {
                        name: "S�tin�",
                        class: "n�",
                        room: "A.1"
                    },
                    sp: {
                        name: "Sum",
                        class: "sp",
                        room: "Sp."
                    }
                }
            },
            //Kedd-3
            {
                type: 2,
                data: {
                    szt: {
                        name: "T�th",
                        class: "a",
                        room: "F.10"
                    },
                    tk: {
                        name: "Krajny�k",
                        class: "mt",
                        room: "I.30"
                    }
                }
            },
            //Kedd-4
            {
                type: 2,
                data: {
                    szt: {
                        name: "Darab�nt",
                        class: "mt",
                        room: "I.30"
                    },
                    tk: {
                        name: "Papp L",
                        class: "inf",
                        room: "Tk."
                    }
                }
            },
            //Kedd-5
            {
                type: 2,
                data: {
                    szt: {
                        name: "Krajny�k",
                        class: "inf",
                        room: "Szt.2"
                    },
                    tk: {
                        name: "Papp L",
                        class: "inf",
                        room: "Tk."
                    }
                }
            },
            //Kedd-6
            {
                type: 3,
                data: {
                    an2: {
                        name: "Bert�k",
                        class: "a",
                        room: "A.2"
                    },
                    an4: {
                        name: "Juh�sz A.",
                        class: "a",
                        room: "A.3"
                    },
                    an3: {
                        name: "Seprenyi",
                        class: "a",
                        room: "II.41"
                    },
                    an1: {
                        name: "Varga Bo.",
                        class: "a",
                        room: "N."
                    }
                }
            },
            //Kedd-7
            {
                type: 0
            },
            //Kedd-8
            {
                type: 0
            }
        ],
        [
            //Szerda-0
            {
                type: 4,
                data: {
                    ol: {
                        name: "Gianelli",
                        class: "ol",
                        room: "Ol.1"
                    },
                    sp: {
                        name: "Sum",
                        class: "sp",
                        room: "Sp."
                    }
                }
            },
            //Szerda-1
            {
                type: 1,
                data: {
                    lesson: {
                        name: "Krajny�k",
                        class: "of",
                        room: "I.30"
                    }
                }
            },
            //Szerda-2
            {
                type: 3,
                data: {
                    an2: {
                        name: "Bert�k",
                        class: "a",
                        room: "A.1"
                    },
                    an4: {
                        name: "Hajba",
                        class: "a",
                        room: "Szt.3"
                    },
                    an3: {
                        name: "Seprenyi",
                        class: "a",
                        room: "A.2"
                    },
                    an1: {
                        name: "Varga Bo.",
                        class: "a",
                        room: "I.30"
                    }
                }
            },
            //Szerda-3
            {
                type: 3,
                data: {
                    an2: {
                        name: "Husz�r",
                        class: "a",
                        room: "I.30"
                    },
                    an3: {
                        name: "Seprenyi",
                        class: "a",
                        room: "A.2"
                    },
                    an4: {
                        name: "T�th",
                        class: "a",
                        room: "F.18"
                    },
                    an1: {
                        name: "Varga Bo.",
                        class: "a",
                        room: "A.1"
                    }
                }
            },
            //Szerda-4
            {
                type: 0
            },
            //Szerda-5
            {
                type: 2,
                data: {
                    szt: {
                        name: "P.-P�sztor",
                        class: "i",
                        room: "I.39."
                    },
                    tk: {
                        name: "Krajny�k",
                        class: "mt",
                        room: "T.2"
                    }
                }
            },
            //Szerda-6
            {
                type: 0
            },
            //Szerda-7
            {
                type: 0
            },
            //Szerda-8
            {
                type: 0
            }
        ],
        [
            //Cs�t�rt�k-0
            {
                type: 3,
                data: {
                    an3: {
                        name: "Seprenyi",
                        class: "a",
                        room: "II.41"
                    }
                }
            },
            //Cs�t�rt�k-1
            {
                type: 3,
                data: {
                    an2: {
                        name: "Husz�r",
                        class: "a",
                        room: "A.2"
                    },
                    an3: {
                        name: "Seprenyi",
                        class: "a",
                        room: "II.41"
                    },
                    an4: {
                        name: "T�th",
                        class: "a",
                        room: "I.30"
                    },
                    an1: {
                        name: "Varga Bo.",
                        class: "a",
                        room: "F.8"
                    }
                }
            },
            //Cs�t�rt�k-2
            {
                type: 4,
                data: {
                    ne1: {
                        name: "Hal�sz",
                        class: "n�",
                        room: "Szt.3"
                    },
                    ol: {
                        name: "Gianelli",
                        class: "ol",
                        room: "F.9"
                    },
                    ne2: {
                        name: "S�tin�",
                        class: "n�",
                        room: "II.51"
                    },
                    sp: {
                        name: "Sum",
                        class: "sp",
                        room: "D."
                    },
                    fr: {
                        name: "Szabolcsi",
                        class: "fr",
                        room: "II.42"
                    }
                }
            },
            //Cs�t�rt�k-3
            {
                type: 2,
                data: {
                    szt: {
                        name: "Krajny�k",
                        class: "inf",
                        room: "Szt.1"
                    },
                    tk: {
                        name: "P.-P�sztor",
                        class: "ny",
                        room: "I.30"
                    }
                }
            },
            //Cs�t�rt�k-4
            {
                type: 2,
                data: {
                    szt: {
                        name: "Darab�nt",
                        class: "mt",
                        room: "M."
                    },
                    tk: {
                        name: "Krajny�k",
                        class: "mt",
                        room: "T.2"
                    }
                }
            },
            //Cs�t�rt�k-5
            {
                type: 2,
                data: {
                    tk: {
                        name: "Papp L.",
                        class: "inf",
                        room: "Tk."
                    }
                }
            },
            //Cs�t�rt�k-6
            {
                type: 0
            },
            //Cs�t�rt�k-7
            {
                type: 0
            },
            //Cs�t�rt�k-8
            {
                type: 0
            }
        ],
        [
            //P�ntek-0
            {
                type: 0
            },
            //P�ntek-1
            {
                type: 0
            },
            //P�ntek-2
            {
                type: 3,
                data: {
                    an2: {
                        name: "Husz�r",
                        class: "a",
                        room: "I.32"
                    },
                    an3: {
                        name: "Seprenyi",
                        class: "a",
                        room: "Szt.3"
                    },
                    an4: {
                        name: "T�th",
                        class: "a",
                        room: "R."
                    },
                    an1: {
                        name: "Varga Bo.",
                        class: "a",
                        room: "I.30"
                    }
                }
            },
            //P�ntek-2
            {
                type: 3,
                data: {
                    an2: {
                        name: "Husz�r",
                        class: "a",
                        room: "I.32"
                    },
                    an3: {
                        name: "Seprenyi",
                        class: "a",
                        room: "Szt.3"
                    },
                    an4: {
                        name: "T�th",
                        class: "a",
                        room: "R."
                    },
                    an1: {
                        name: "Varga Bo.",
                        class: "a",
                        room: "I.30"
                    }
                }
            },
            //P�ntek-4
            {
                type: 2,
                data: {
                    szt: {
                        name: "P.-P�sztor",
                        class: "ny",
                        room: "I.30."
                    },
                    tk: {
                        name: "T�th",
                        class: "a",
                        room: "F.18"
                    }
                }
            },
            //P�ntek-6
            {
                type: 0
            },
            //P�ntek-6
            {
                type: 4,
                data: {
                    ol: {
                        name: "Gianelli",
                        class: "ol",
                        room: "L."
                    },
                    ne2: {
                        name: "S�tin�",
                        class: "n�",
                        room: "N."
                    },
                    sp: {
                        name: "Sum",
                        class: "sp",
                        room: "Sp."
                    }
                }
            },
            //P�ntek-7
            {
                type: 0
            },
            //P�ntek-8
            {
                type: 0
            }
        ]
    ]