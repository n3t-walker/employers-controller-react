import "./app-info.css";

const AppInfo = ({employers, increased}) => {

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Hentaichik YK inc.</h1>
            <h6>Общее число сотрудников: {employers}</h6>
            <h6>Премию получат: {increased}</h6>
        </div>
    );
}

export default AppInfo;