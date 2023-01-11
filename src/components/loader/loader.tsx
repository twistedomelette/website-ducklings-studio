import LoaderGif from '../../assets/img/loader.gif'
export default function Loader () {
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <img src={LoaderGif} alt="Loader" />
        </div>
    )
}