function getEle(id) {
    return document.getElementById(id);
}

function edit(id, content) {
    let tagH1 = getEle(id);
    tagH1.innerHTML = content;
}

function click1() {
    edit("tagH1","Edit Success!")
}

function click2(){
    edit("tagP", "ok");
}
