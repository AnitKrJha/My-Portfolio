import FeaturedProject from "./featured.component"

const FeaturedProjects = ()=>{
    return <section className="featured-projects-directory max-w-[1000px] m-auto mt-20">
        <FeaturedProject heading={'Best Project Ever'} tags={['ExpressJs','NodeJs','HTML']} gitLink={'a'} externalLink={'b'} right/>
        <FeaturedProject heading={'Best Project Ever'} tags={['ExpressJs','NodeJs','HTML']} gitLink={'a'} externalLink={'b'} />
        <FeaturedProject heading={'Best Project Ever'} tags={['ExpressJs','NodeJs','HTML']} gitLink={'a'} externalLink={'b'} right/>
        <FeaturedProject heading={'Best Project Ever'} tags={['ExpressJs','NodeJs','HTML']} gitLink={'a'} externalLink={'b'} />
        <FeaturedProject heading={'Best Project Ever'} tags={['ExpressJs','NodeJs','HTML']} gitLink={'a'} externalLink={'b'} right/>
        <FeaturedProject heading={'Best Project Ever'} tags={['ExpressJs','NodeJs','HTML']} gitLink={'a'} externalLink={'b'} />
        
    </section>
}
export default FeaturedProjects