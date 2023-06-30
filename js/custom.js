function shouldBeVisible(element) {
    if($(element).hasClass("seen")) return;
    const rect = element.getBoundingClientRect();    

    if($(element).attr("id") === "about"){
        return (
            rect.top > 0
        );
    }else{
        return (
            rect.top > 0 && rect.top < window.innerHeight && (rect.top/window.innerHeight > 0.50)
        );
    }
}

function showSection(section){
    $(section).addClass("seen");
    $(section).find(" > *").each((index, el) =>{
        $(el).removeClass("hidden");
        $(el).css("display", "flex");
        $(el).css("flex-direction", "column");
        $(el).addClass("animate__fadeInUp");
        $(el).addClass("animate__animated");
    });
}

function revealAllSectionsUpUntil(sectionId){
    for(let i = 0; i < sections.length; i++){
        showSection(sections[i]);
        if(sectionId === $(sections[i]).attr("id")) break;
    }
}

//== Set Up ==

const sections = document.querySelectorAll('.full-page-section');
$(window).on("scroll", function(){
    sections.forEach(function(section) {
        if (shouldBeVisible(section)) {
            showSection(section);
        }
    });
})

$('html, body').animate({ scrollTop: 0 }, 'fast', function(){
    let id = window.location.hash;
    if(id && id !== "#"){
        let noHashId = id.substring(1);
        let section = document.getElementById(noHashId);
        revealAllSectionsUpUntil(noHashId);
        window.scroll(0, section.offsetTop);
    }
    else{
        let section = document.getElementById("about");
        showSection(section);
    }
});

$(".nav-item > a").each((index, link) =>{
    $(link).on("click", (e) => {
        revealAllSectionsUpUntil($(e.target).attr("href"));
        if(window.matchMedia("(max-width: 900px)").matches){
            $(".navbar-toggler").trigger("click");
        }
    });
});