const Router = require('./router')
const Htmlurl = "https://static-links-page.signalnerve.workers.dev"



addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

const links = [
    { "name": "WebTv", "url": "https://github.com/NeelShah9/Web-Development-Tools-and-Methods/tree/master/project" },
    { "name": "Cloudflare", "url": "https://www.cloudflare.com/" },
    { "name": "Northeastern University", "url": "https://www.northeastern.edu/" },
    { "name": "SignalNerve", "url": "https://github.com/signalnerve" }
]

const socialLinks = [
    { "name": "Twitter", "url": "https://twitter.com/iamneelshah9", 'icon': '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter icon</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path></svg>' },
    { "name": "LinkedIn", "url": "https://www.linkedin.com/in/neel-shah-0909/", 'icon': '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>' },
    { "name": "GitHub", "url": "https://github.com/NeelShah9", 'icon': '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>' }
    
]


class TransformBodyLinks {
    async element(element) {
        element.setAttribute('class', 'bg-red-700')
    }
}

class TransformHeadLinks {
    async element(element) {
        if (element.getAttribute('id') === 'name') {
            element.setInnerContent('Neel Shah')
        }
    }
}

class TransformDivLinks {
    constructor(links, socialLinks) {
        this.links = links
        this.socialLinks = socialLinks
    }

    async element(element) {
        if (element.getAttribute('id') === 'links') {
            this.links.forEach(link => {
                element.append(`<a href="${link.url}">${link.name}</a>`, { html: true })
            })
        }
        else if (element.getAttribute('id') === 'profile') {
            element.removeAttribute('style')
        }
        else if (element.getAttribute('id') === 'social') {
            element.removeAttribute('style')
            this.socialLinks.forEach(link => {
                element.append(`<a href="${link.url}">${link.icon}</a>`, { html: true })
            })
        }
    }
}

class TransformImageLinks {
    async element(element) {
        if (element.getAttribute('id') === 'avatar') {
            element.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpdigZ2Z6YXzpqcXEQPHjzTHjSmvYIzgOlRA&usqp=CAU')
        }
    }
}

class TransformTitleLinks {
    async element(element) {
        element.setInnerContent('Neel Shah')
    }
}


async function handler(request) {
    let res = await fetch(Htmlurl)
    return new HTMLRewriter()
        .on("div#links", new TransformDivLinks(links, socialLinks))
        .on("div#profile", new TransformDivLinks(links, socialLinks))
        .on("div#social", new TransformDivLinks(links, socialLinks))
        .on("img#avatar", new TransformImageLinks())
        .on("h1#name", new TransformHeadLinks())
        .on('title', new TransformTitleLinks())
        .on('body', new TransformBodyLinks())
        .transform(res)
}

function linksHandler() {
    const init = {
        headers: { 'content-type': 'application/json' },
    }
    return new Response(JSON.stringify(links), init)
}
async function handleRequest(request) {
    const r = new Router()
    r.get('/links', () => linksHandler())
    r.get('/.*', request => handler(request))

    const resp = await r.route(request)
    return resp
}

