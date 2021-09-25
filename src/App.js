import React, {useState, useEffect} from 'react';
import axios from 'axios'
import EmployerItem from "./Components/EmployerItem/EmployerItem";


const App = () => {
    const [employers, setEmployers] = useState([])
    const [isCheckedAll, setIsCheckedAll] = useState(false)
    const [selected, setSelected] = useState([])


    useEffect(() => {
        axios('https://61195fa77b5c0f00175920da.mockapi.io/employers')
            .then(({data}) => setEmployers(data))
    }, [])

    const handleCheck = (id, add) => {
         (setSelected(add && selected.filter((item) => item.id !== id)? [...selected, employers.find((item) => item.id === id)]
            : selected.filter((item) => item.id !== id && [...selected])))
            setIsCheckedAll( false)
    }



    return (
        <div className='container'>
            <div className="row ">
                <div className="col-6">
                    <table className='table table-success table-striped mt-5 offset-md-3'>
                        <thead>
                        <tr>
                            <th><input type="checkbox" placeholder='отметить все'
                            onChange={(e) => setIsCheckedAll(e.target.checked)}/></th>
                            <th>Имя</th>
                            <th>Фамилия</th>
                            <th>Возраст</th>
                        </tr>
                        </thead>
                        {
                            employers.map(elem =>
                               <EmployerItem elem={elem} key={elem.id} isCheckedAll={isCheckedAll}
                               handleCheck={handleCheck} employers={employers} />
                            )
                        }
                    </table>
                    <h4>Пользователи: </h4>
                    {
                        selected.map(item =>
                        <p>{item.name}</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default App;