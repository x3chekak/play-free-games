import './style.css'

export const FetchError: React.FC = () => {

    return (
        <div className='main'>
            <div className='fetch-error'>
                <span>Error</span>
                <p>Произошла ошибка.</p><p> Возможно этот сайт не доступен в вашем регионе.</p>
            </div>
        </div>
    );
}

