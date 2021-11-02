import { FormEvent, useState } from 'react';
import styles from './styles.module.scss';

export function RegisterModal({ close }: any) {

    const [isCustom, setIsCustom] = useState(false);

    function handleFormSunbmit(e: FormEvent) {
        e.preventDefault();
        alert("Registrado!")
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modalFrame}>
                <header className={styles.modalFrameTop}>
                    <div>
                        <h1>Sign up</h1>
                        <p>It’s quick and easy.</p>
                    </div>
                    <span onClick={close}>X</span>
                </header >

                <hr />

                <form className={styles.modalFrameForm} onSubmit={handleFormSunbmit}>
                    <div className={styles.inputName}>
                        <input type="text" placeholder="First name" />
                        <input type="text" placeholder="Last name" />
                    </div>
                    <div className={styles.infoInput}>
                        <input type="text" placeholder="Mobile number or email" />
                        <input type="password" placeholder="New password" />
                    </div>
                    <div className={styles.selectInput}>
                        <label>Birthday</label>
                        <div>
                            <select name="mounth">
                                <option value="Janeiro">Jan</option>
                                <option value="Fevereiro">Feveiro</option>
                                <option value="Março">Março</option>
                                <option value="Abril">Abril</option>
                            </select>

                            <select name="day">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>

                            <select name="year">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.genInput}>
                        <label>Gender</label>
                        <div className={styles.radioDiv}>
                            <div>
                                <label htmlFor="female">Female</label>
                                <input type="radio" name="gender" id="female" value="Female" onChange={() => setIsCustom(false)} />
                            </div>
                            <div>
                                <label htmlFor="Male">Male</label>
                                <input type="radio" name="gender" id="male" value="Male" onChange={() => setIsCustom(false)} />
                            </div>
                            <div>
                                <label htmlFor="custom">Custom</label>
                                <input type="radio" name="gender" id="custom" value="Custom" onChange={() => setIsCustom(!isCustom)} />
                            </div>
                        </div>
                    </div>

                    {isCustom ?
                        (
                            <>
                                <div className={styles.customInput}>
                                    <select name="pronoun">
                                        <option value="" selected disabled hidden>Select yout pronoun</option>
                                        <option value="she">She: "Wish her a happy birthday!"</option>
                                        <option value="he">He: "Wish him a happy birthday!"</option>
                                        <option value="they">They: "Wish them a happy birthday!"</option>
                                    </select>
                                    <span>Your pronoun is visible to everyone.</span>
                                    <input type="text" placeholder="Gender (optional)" />
                                </div>
                            </>
                        )
                        : ""}

                    <span className={styles.signUpButton}>
                        <button type="submit">Sign up</button>
                    </span>
                </form>

            </div>

        </div >
    )
}