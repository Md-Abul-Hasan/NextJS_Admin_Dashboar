import styles from "../ui/login/login.module.css"

const loginPage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <h1>Login</h1>
                <input type="text" placeholder="username"/>
                <input type="text" placeholder="password"/>
                <button>Login</button>
            </form>
            
        </div>
    );
};

export default loginPage;