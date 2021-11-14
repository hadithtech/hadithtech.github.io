

function setSpeaker(speaker){
    let template = document.querySelector('#speakers');
    let clone = template.content.cloneNode(true);
    let speakerName = clone.querySelector("#name")
    speakerName.textContent = speaker.name;
    let speakerTitle = clone.querySelector("#title")
    speakerTitle.textContent = speaker.title;
    let speakerBio = clone.querySelector("#bio")
    speakerBio.textContent = speaker.bio;
    clone.querySelector("img").src = speaker.imageURL;
    let socialMedia = clone.querySelector("#socials");
    speaker.socialMedia.forEach(function(social){
        socialMedia.innerHTML += createSocialMedia(social);
    });

    return clone
}
function createSocialMedia (social){
    return `<a href="${social.url}" class="text-white p-2"><span class="icon-${social.name}"></span></a>`
}
function addSpeakers(id, speakers){
    let container = document.getElementById(id)
    speakers.forEach(function(speaker){
        container.appendChild(setSpeaker(speaker));
    });
}

addSpeakers("speakersContainer",arabicSpeakers)
addSpeakers("englishSpeakersContainer",englishSpeakers)
addSpeakers("sponsors",sponsors)