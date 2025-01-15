import styles from '../../../ui/dashboard/users/singleUser/singleUser.module.css'
import Image from "next/image";
const singleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="" fill />
                </div>
                John Doe  
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>    
                <label>Username</label>
                <input type='text'name="username" placeholder='John Doe'/>
                <label>Email</label>
                <input type='email'name="email" placeholder='hasansohan007@gmail.com'/>
                <label>Password</label>
                <input type='password'name="Password"/>
                <label>Phone</label>
                <input type='text'name="phone" placeholder='+880-01914305677'/>
                <label>Address</label>
                <input type='text'name="address" placeholder='John Doe'/>
                <label>Is Admin</label>
                <select name="isAdmin" id="isAdmin">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <label>Is Active</label>
                <select name="isActive" id="isAdmin">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <button>Update</button>
                </form>
            </div>
        </div>
    );
};

export default singleUserPage;