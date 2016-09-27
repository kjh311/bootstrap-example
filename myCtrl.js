var app = angular.module("myApp", []);


// Start from specific index in array:
  app.filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
  });


// Limit number of characters in a string:
  String.prototype.trunc = String.prototype.trunc ||
function(n){

    // this will return a substring and
    // if its larger than 'n' then truncate and append '...' to the string and return it.
    // if its less than 'n' then return the 'string'
    return this.length>n ? this.substr(0,n-1)+'...' : this.toString();
};



  app.controller("myCtrl", ['$scope', function($scope) {
    $scope.articles = [
            {
                'title':'Article #1 Title',
                'author':'Author #1',
                'image': "img/blue.jpg",
                'text':'Lorem ipsum dolor sit amet, nullam eu, accumsan aliquet vestibulum, fringilla mi nunc suspendisse. Aliquet fringilla, odio amet augue enim, nam turpis sed senectus eget, risus venenatis vitae luctus, laoreet massa suspendisse augue. Eget non hendrerit fusce orci in, conubia penatibus elit aut ornare sed, nunc quis phasellus aliquam rhoncus, nisi ultricies massa bibendum id elementum. Urna leo dolor dui. Leo et.'
            },
            {
                'title':'Article #2 Title',
                'author':'Author #2',
                'image': "img/board.jpg",
                'text':'Vel sem elit ut, augue nullam donec, leo venenatis accumsan, viverra fusce tellus tristique. Hendrerit vestibulum morbi porta, ac semper lacus rhoncus. Lacinia tellus cumque est a, fermentum lacus. Nulla libero, provident ullamcorper dapibus, lobortis bibendum eum adipiscing sociosqu, massa cras tempus sapien elit morbi. Ullamcorper iaculis iaculis quis morbi senectus fermentum. Eget in, quis luctus maecenas rhoncus ex placerat amet. Magna scelerisque ante platea rhoncus dolor, nunc nec eros luctus sit. Facilisis aenean ut, hac elit rhoncus eget augue, lorem tempus varius mattis quisque lacus, mus sed amet ut et lacinia, id praesent vehicula et justo ullamcorper.'
            },
            {
                'title':'Article #3 Title',
                'author':'Author #3',
                'image': "img/brain.jpg",
                'text':'At vitae et cubilia nostrum sed vel. Orci elit integer sed pede duis lacus, id tempor quis, id elit consequat. Est amet felis, faucibus metus dictum id pellentesque duis phasellus, tellus nec sociosqu molestie donec, ornare at, in praesent. In commodo, nisl eu neque faucibus rhoncus nec nisi, praesent vel laoreet in dui id, eu felis lorem sollicitudin sit, egestas sed quam. In ultrices a feugiat erat massa, velit nunc pellentesque magna leo vel, nulla nulla, mauris euismod tristique vehicula blandit quam elit, ridiculus gravida ipsum massa. Sit dolor aliquam mauris lorem, sociis quis eu tristique.'
            },
            {
                'title':'Article #4 Title',
                'author':'Author #4',
                'image': "img/chip.jpg",
                'text':'Odio aspernatur velit risus ornare, nulla sed cursus ut euismod tristique, eu fusce. Nec non dui, tortor egestas praesent dapibus lorem quam ante, vitae varius amet vestibulum potenti, neque quam asperiores ut. Eu pellentesque posuere, mi quam quam aliquam tellus, praesent arcu orci. Felis ut mauris vehicula accumsan libero morbi, consequat laboris commodo taciti. Suspendisse sem in vitae, vehicula sociis velit litora turpis dui ut, risus dis etiam, aenean aptent turpis nisl, ultrices vivamus mauris varius nunc urna. Nulla luctus suscipit platea diam pellentesque massa, auctor amet risus sed semper sed. Enim eget lacus ipsum, urna vel mauris suscipit, elit lorem, lobortis rhoncus purus metus.'
            },
            {
                'title':'Article #5 Title',
                'author':'Author #5',
                'image': "img/cyborg.jpeg",
                'text':'Pede mauris, duis nunc natoque risus hendrerit sit, et non odio, vel magna vitae adipiscing volutpat. Sit magnis mattis, nulla in eget pellentesque nonummy, sem lorem aptent habitasse dictumst velit, consectetuer integer consequat auctor elit metus, amet litora vitae sed. Eget vitae ut sodales mauris in, nulla turpis, nibh placerat, egestas interdum in vehicula blandit vel, convallis dictumst commodo est. Elit adipiscing, magna vehicula integer, at odio maecenas platea sapien, tortor cum libero suscipit, erat sit ut consectetuer interdum vivamus. Massa fermentum magna quis.'
            },
            {
                'title':'Article #6 Title',
                'author':'Author #6',
                'image': "img/dish.jpg",
                'text':'Vulputate lectus sodales, erat libero consectetuer a ornare praesent et, commodo morbi ac semper reiciendis, amet leo proin in velit. Amet morbi tellus sollicitudin pulvinar luctus dui, nec nonummy suspendisse mauris quam iaculis et. Luctus dolor libero, vestibulum duis orci et metus ut at, auctor blandit vitae auctor. Felis aenean, sollicitudin cras ultricies neque lectus, enim magna posuere nunc. Metus eget massa consectetuer, a arcu turpis justo at proin fusce, non augue ullamcorper. Porta nibh et consectetuer dui habitasse elit, volutpat integer maecenas. Sodales vel, consequat sint suscipit, faucibus venenatis amet class aliquam.'
            },
            {
                'title':'Article #7 Title',
                'author':'Author #7',
                'image': "img/eye.jpg",
                'text':'Quis istud possit, inquit, negare? Duo Reges: constructio interrete. Verum hoc idem saepe faciamus. Igitur neque stultorum quisquam beatus neque sapientium non beatus. Mene ergo et Triarium dignos existimas, apud quos turpiter loquare? Putabam equidem satis, inquit, me dixisse. Sed ut iis bonis erigimur, quae expectamus, sic laetamur iis, quae recordamur. Non est enim vitium in oratione solum, sed etiam in moribus.'
            },
            {
                'title':'Article #8 Title',
                'author':'Author #8',
                'image': "img/globe.jpg",
                'text':'Si verbum sequimur, primum longius verbum praepositum quam bonum. Fortemne possumus dicere eundem illum Torquatum? Qui ita affectus, beatum esse numquam probabis; Primum in nostrane potestate est, quid meminerimus? Mihi, inquam, qui te id ipsum rogavi? Hoc tu nunc in illo probas. Haec bene dicuntur, nec ego repugno, sed inter sese ipsa pugnant. Nunc omni virtuti vitium contrario nomine opponitur. Mihi quidem Antiochum, quem audis, satis belle videris attendere. Urgent tamen et nihil remittunt.'
            },
            {
                'title':'Article #9 Title',
                'author':'Author #9',
                'image': "img/hands.jpeg",
                'text':'Nam si propter voluptatem, quae est ista laus, quae possit e macello peti? An quod ita callida est, ut optime possit architectari voluptates? Bonum liberi: misera orbitas. Quamquam haec quidem praeposita recte et reiecta dicere licebit. Tamen a proposito, inquam, aberramus. Inscite autem medicinae et gubernationis ultimum cum ultimo sapientiae comparatur.'
            },
            {
                'title':'Article #10 Title',
                'author':'Author #10',
                'image': "img/keyboard.jpeg",
                'text':' Si qua in iis corrigere voluit, deteriora fecit. Ad corpus diceres pertinere-, sed ea, quae dixi, ad corpusne refers? Luxuriam non reprehendit, modo sit vacua infinita cupiditate et timore. Legimus tamen Diogenem, Antipatrum, Mnesarchum, Panaetium, multos alios in primisque familiarem nostrum Posidonium. Hanc ergo intuens debet institutum illud quasi signum absolvere.'
            },
            {
                'title':'Article #11 Title',
                'author':'Author #11',
                'image': "img/lock.jpg",
                'text':'LBona autem corporis huic sunt, quod posterius posui, similiora. Quid de Platone aut de Democrito loquar? Et quidem, inquit, vehementer errat; An ea, quae per vinitorem antea consequebatur, per se ipsa curabit? Sed fortuna fortis; Quasi ego id curem, quid ille aiat aut neget. Bona autem corporis huic sunt, quod posterius posui, similiora. Quid de Platone aut de Democrito loquar? Et quidem, inquit, vehementer errat; An ea, quae per vinitorem antea consequebatur, per se ipsa curabit? Sed fortuna fortis; Quasi ego id curem, quid ille aiat aut neget.'
            },
            {
                'title':'Article #12 Title',
                'author':'Author #12',
                'image': "img/map.jpg",
                'text':'Sed quid attinet de rebus tam apertis plura requirere? Quod iam a me expectare noli. Certe non potest. Videmus igitur ut conquiescere ne infantes quidem possint. Sed quod proximum fuit non vidit. Si enim ita est, vide ne facinus facias, cum mori suadeas. Primum cur ista res digna odio est, nisi quod est turpis?'
            },
            {
                'title':'Article #13 Title',
                'author':'Author #13',
                'image': "img/mrDNA.jpeg",
                'text':'Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali. Si quae forte-possumus. An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia? Quae diligentissime contra Aristonem dicuntur a Chryippo. Dic in quovis conventu te omnia facere, ne doleas. Sic, et quidem diligentius saepiusque ista loquemur inter nos agemusque communiter.'
            },
            {
                'title':'Article #14 Title',
                'author':'Author #14',
                'image': "img/rainbow.jpg",
                'text':'Sic enim censent, oportunitatis esse beate vivere. Nam si amitti vita beata potest, beata esse non potest. Paupertas si malum est, mendicus beatus esse nemo potest, quamvis sit sapiens. Atque hoc loco similitudines eas, quibus illi uti solent, dissimillimas proferebas.'
            },
            {
                'title':'Article #15 Title',
                'author':'Author #15',
                'image': "img/robot.jpg",
                'text':'Haec quo modo conveniant, non sane intellego. Eam tum adesse, cum dolor omnis absit; Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; Sine ea igitur iucunde negat posse se vivere? Sed in rebus apertissimis nimium longi sumus. Torquatus, is qui consul cum Cn. Minime vero, inquit ille, consentit. Praeteritis, inquit, gaudeo.'
            },
            {
                'title':'Article #16 Title',
                'author':'Author #16',
                'image': "img/satelite.jpeg",
                'text':'Nos paucis ad haec additis finem faciamus aliquando; Ergo illi intellegunt quid Epicurus dicat, ego non intellego? Age nunc isti doceant, vel tu potius quis enim ista melius? Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? Primum cur ista res digna odio est, nisi quod est turpis? Hoc ille tuus non vult omnibusque ex rebus voluptatem quasi mercedem exigit. Virtutibus igitur rectissime mihi videris et ad consuetudinem nostrae orationis vitia posuisse contraria.'
            },
            {
                'title':'Article #17 Title',
                'author':'Author #17',
                'image': "img/sound.jpeg",
                'text':'Est enim tanti philosophi tamque nobilis audacter sua decreta defendere. Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. Haec et tu ita posuisti, et verba vestra sunt. Si quicquam extra virtutem habeatur in bonis. Duo Reges: constructio interrete. Sed residamus, inquit, si placet. Intellegi quidem, ut propter aliam quampiam rem, verbi gratia propter voluptatem, nos amemus;'
            },
            {
                'title':'Article #18 Title',
                'author':'Author #18',
                'image': "img/steve-jobs.jpeg",
                'text':'Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis. Avaritiamne minuis? Haec et tu ita posuisti, et verba vestra sunt. Frater et T. Itaque ab his ordiamur. Nemo igitur esse beatus potest. Ut pulsi recurrant? Ut in geometria, prima si dederis, danda sunt omnia.'
            }
            ];
}]);
