import React, {useState, useEffect} from 'react';

const EmployerItem = ({elem, isCheckedAll, handleCheck, selected}) => {
    const [isChecked, setIsChecked] = useState(false)

useEffect(() => {
      setIsChecked(isCheckedAll)
    console.log(elem.name)
}, [isCheckedAll])


    return (
            <tbody>
            <tr className='table-success'>
                <td className='table-success'>
                    <input type="checkbox" placeholder='отметить все'
                           checked={isChecked} onChange={(e) => {
                        setIsChecked(e.target.checked)
                        handleCheck(elem.id, e.target.checked, elem.name)
                    }}  />
                </td>
                <td className='table-success'>{elem.name}</td>
                <td className='table-success'>{elem.surname}</td>
                <td className='table-success'>{elem.age}</td>
            </tr>
            </tbody>
    );
};

export default EmployerItem;