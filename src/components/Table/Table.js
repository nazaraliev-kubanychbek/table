import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {check, getUsers, getUserName, allChange} from "../../redux/reducers/users";

const Table = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers())
    }, []);
    const users = useSelector((s) => s.users.persons);
    const usersName = useSelector((s) => s.users.usersName);
    const status = useSelector((s) => s.users.mainStatus);
    console.log(usersName);
    return (

        <table className='table'>
            <thead className='table__head'>
            <tr>
                <th>
                    <input type="checkbox" checked={status} onChange={() => {
                        dispatch(allChange())
                        dispatch(getUserName())
                    }}/>
                </th>
                <th>
                    name
                </th>
                <th>
                    surname
                </th>
                <th>
                    email
                </th>
            </tr>
            </thead>
            <tbody className='table__body'>
            {users.map((item) => {
                return (
                    <tr key={item.id} className={item.isChecked ? 'active' : ''}>
                        <td>
                            <input type="checkbox" checked={item.isChecked} onChange={() => {
                                dispatch(check(item.id, item.username))
                                dispatch(getUserName())
                            }}/>
                        </td>
                        <td>
                            {item.username}
                        </td>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.email}
                        </td>
                    </tr>
                )
            })}

            </tbody>
            <tfoot>
            <tr>
                <td className='table__foot' colSpan="4">Пользователи: {`${usersName.join(', ')}`}</td>
            </tr>
            </tfoot>
        </table>


    );
};

export default Table;