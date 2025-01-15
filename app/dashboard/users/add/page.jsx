import styles from '../../../ui/dashboard/users/addUser/addUser.module.css'

const addUsertPage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder="username" name="username" required/>
                <input type="email" placeholder="email" name="email" required/>
                <input type="password" placeholder="password" name="password" required/>
                <input type="phone" placeholder="phone" name="phone"/>
                <select name="isAdmin" id="isAdmin">
                    <option value={false} selected>Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isAdmin" id="isAdmin">
                    <option value={true} selected>Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <textarea name="address" id="address"  row="16" placeholder="description"></textarea>
                <button type='submit'>submit</button>
            </form>
        </div>
    );
};

export default addUsertPage;