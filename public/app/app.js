function BiLineViewModel() {
    var self = this;
    self.partners = ko.observableArray();
    self.blogposts = ko.observableArray();
    self.onHomePage = ko.observable(true);
    self.currPage = ko.observable('');
    self.langMap = {
        ru: '?l=ru',
        en: '?l=en',
        hy: '?l=hy'
    };
    var cookie = jQuery.cookie('bi_lang');
    if(Object.keys(self.langMap).indexOf(cookie) === -1){
        self.currLang = 'en';
        jQuery.cookie('bi_lang', 'en');
        location.search = self.langMap.en;
    }else{
        self.currLang = cookie  || 'en';
        if(location.search == self.langMap.ru){
            self.currLang = 'ru';
        }
        if(location.search == self.langMap.hy){
            self.currLang = 'hy';
        }
    }
    jQuery.getJSON('/api/v1/partners'+self.langMap[self.currLang], function (_partners) {
        self.partners(_partners);
    });
    jQuery.getJSON('/api/v1/blogposts'+self.langMap[self.currLang], function (_posts) {
        self.blogposts(_posts);
    });
    self.changeLang = function (l) {
        return function () {
            self.currLang = l;
            jQuery.cookie('bi_lang', l);
            location.replace(self.langMap[self.currLang]+location.hash)
        }
    };
    self.goTo = function (to) {
        return function () {
            location.hash = to;
        }
    };
    Sammy(function () {
        this.get('#home', function () {
            location.replace(self.langMap[self.currLang])
            /*self.currPage(location.hash);
            jQuery('#inner-content').load('/home'+self.langMap[self.currLang], function () {
                ko.cleanNode(jQuery('#home-page')[0]);
                self.onHomePage(false);
                jQuery('#home-page').ready(function(){
                    ko.applyBindings(HomePageViewModel(), jQuery('#home-page')[0]);
                    jQuery('#caroufredsel-blog-posts-container').carouFredSel({
                        responsive: true,
                        scroll: 1,
                        circular: false,
                        infinite: false,
                        items: {
                            visible: {
                                min: 1,
                                max: 3
                            }
                        },
                        prev: '#blog-posts-prev',
                        next: '#blog-posts-next',
                        auto: {
                            play: false
                        }
                    });
                })

            });*/
        });
        this.get('#aboutus', function () {
            self.currPage(location.hash);
            jQuery('#inner-content').load('/aboutus'+self.langMap[self.currLang]);
            self.onHomePage(false);
        });
        this.get('#services', function () {
            self.currPage(location.hash);
            jQuery('#inner-content').load('/services'+self.langMap[self.currLang], function () {
                ko.cleanNode(jQuery('#services')[0]);
                self.onHomePage(false);
                ko.applyBindings(ServicesViewModel(), jQuery('#services')[0]);
            });
        });
        this.get('#projects', function () {
            self.currPage(location.hash);
            jQuery('#inner-content').load('/projects'+self.langMap[self.currLang], function () {
                ko.cleanNode(jQuery('#projects')[0]);
                self.onHomePage(false);
                ko.applyBindings(ProjectsViewModel(), jQuery('#projects')[0]);
            });
        });
        this.get('#news', function () {
            self.currPage(location.hash);
            jQuery('#inner-content').load('/news'+self.langMap[self.currLang], function () {
                ko.cleanNode(jQuery('#news')[0]);
                self.onHomePage(false);
                ko.applyBindings(NewsViewModel(), jQuery('#news')[0]);
            });
        });
        this.get('#contacts', function () {
            self.currPage(location.hash);
            jQuery('#inner-content').load('/contacts'+self.langMap[self.currLang], function () {
                ko.cleanNode(jQuery('#contacts')[0]);
                self.onHomePage(false);
                ko.applyBindings(ContactsViewModel(), jQuery('#contacts')[0]);
            });
        });
        this.get('#clients', function () {
            self.currPage(location.hash);
            jQuery('#inner-content').load('/clients'+self.langMap[self.currLang]);
            self.onHomePage(false);
        })
    }).run();
    self.onAbout = ko.computed(function () {
        return location.hash === '#aboutus';
    });
    self.onServices = ko.computed(function () {
        return location.hash === '#services';
    });
    self.onPage = function (page) {
      return self.currPage() == page;
    };
    self.goToNews = function () {

    };
};
function ContactsViewModel() {
    var self = this;
};
function HomePageViewModel() {
    var self = this;
    self.partners = ko.observableArray();
    self.blogposts = ko.observableArray();

    jQuery.getJSON('/api/v1/partners', function (_partners) {
        self.partners(_partners);
    });
    jQuery.getJSON('/api/v1/blogposts', function (_posts) {
        self.blogposts(_posts);
    });
}
function ServicesViewModel() {
    var self = this;
    self.currServ = ko.observable({});
    self.expandService = function (n) {
        console.log(n);
        return function () {
            var temp = self.currServ();
            temp[n] = !temp[n];
            self.currServ(temp);
        }
    }
}
function ProjectsViewModel() {
    var self = this;
    self.projs = ko.observable();
    self.years = ko.observableArray();
    jQuery.getJSON('/api/v1/projects'+location.search, function (_projects) {
        self.projs(_projects);
        self.years(Object.keys(self.projs()).reverse());
        var obj = {};
        obj[self.years()[0]] = true;
        obj[self.years()[1]] = true;
        self.currProject(obj);
    });
    self.getProjects = function (year) {
        return ko.observableArray(self.projs()[year]);
    }
    self.currProject = ko.observable({});
    self.expandService = function (n) {
        return function () {
            var temp = self.currProject();
            temp[n] = !temp[n];
            self.currProject(temp);
        }
    }
}
function NewsViewModel() {
    var self = this;
    self.news = ko.observable();
    self.years = ko.observableArray();
    jQuery.getJSON('/api/v1/news', function (_news) {
        self.news(_news);
    });
}
ko.applyBindings(BiLineViewModel());
initJQ();
function initJQ() {
    console.log('initJQ');
    var tpj = jQuery;
    tpj.noConflict();
    tpj(document).ready(function () {
        // Revolution Slider
        if (tpj.fn.cssOriginal != undefined)
            tpj.fn.css = tpj.fn.cssOriginal;
        tpj('.fullwidthbanner').revolution({
            delay: 9000,
            startwidth: 1200,
            startheight: 400,
            onHoverStop: "on",
            thumbWidth: 100,
            thumbHeight: 50,
            thumbAmount: 3,
            hideThumbs: 0,
            navigationType: "none",
            navigationArrows: "solo",
            navigationStyle: "round",
            navigationHAlign: "left",
            navigationVAlign: "bottom",
            navigationHOffset: 30,
            navigationVOffset: 30,
            soloArrowLeftHalign: "left",
            soloArrowLeftValign: "center",
            soloArrowLeftHOffset: 0,
            soloArrowLeftVOffset: 0,
            soloArrowRightHalign: "right",
            soloArrowRightValign: "center",
            soloArrowRightHOffset: 0,
            soloArrowRightVOffset: 0,
            stopAtSlide: -1,
            stopAfterLoops: -1,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            hideSliderAtLimit: 0,
            fullWidth: "on",
            fullScreen: "off",
            fullScreenOffsetContainer: "#topheader-to-offset",
            shadow: 0
        });
        // PrettyPhoto
        tpj("a[rel^='prettyPhoto']").prettyPhoto({
            theme: 'light_square',
            social_tools: false
        });
        // FitVids
        tpj(".responsive-video-wrapper").fitVids();
        // jflickrfeed
        tpj('.flickr-photos-list').jflickrfeed({
            limit: 9,
            qstrings: {
                id: '71865026@N00'
            },
            itemTemplate: '<li><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
        });
        // jQuery UItoTop
        tpj().UItoTop({ easingType: 'easeOutQuart' });
        // Skin Chooser
        tpj(".skin-chooser-toggle").click(function () {
            tpj(".skin-chooser-wrap").toggleClass("show");
        });
        tpj(".color-skin").click(function () {
            var cls = this.id;
            tpj(".color-skin").removeClass("active");
            tpj(this).addClass("active");
            tpj("#utter-wrapper").removeClass();
            tpj("#utter-wrapper").addClass(cls);
        });
    });
// jQuery CarouFredSel
    var caroufredsel = function () {
        tpj('#caroufredsel-portfolio-container').carouFredSel({
            responsive: true,
            scroll: 1,
            circular: false,
            infinite: false,
            items: {
                visible: {
                    min: 1,
                    max: 3
                }
            },
            prev: '#portfolio-prev',
            next: '#portfolio-next',
            auto: {
                play: false
            }
        });
        tpj('#caroufredsel-blog-posts-container').carouFredSel({
            responsive: true,
            scroll: 1,
            circular: false,
            infinite: false,
            items: {
                visible: {
                    min: 1,
                    max: 3
                }
            },
            prev: '#blog-posts-prev',
            next: '#blog-posts-next',
            auto: {
                play: false
            }
        });
        tpj('#caroufredsel-clients-container').carouFredSel({
            responsive: true,
            scroll: 1,
            circular: false,
            infinite: false,
            items: {
                visible: {
                    min: 1,
                    max: 4
                }
            },
            prev: '#client-prev',
            next: '#client-next',
            auto: {
                play: false
            }
        });
    };
    tpj(window).load(function () {
        caroufredsel();
    });
    tpj(window).resize(function () {
        caroufredsel();
    });
}