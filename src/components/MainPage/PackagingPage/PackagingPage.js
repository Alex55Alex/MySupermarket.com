import React from 'react';
import s from './PackagingPage.module.css'

const PackagingPage = (props) => {
    return (
        <div className={s.containerWrap}>
            <div className={s.title}><h3>Packaging Data Enrichment Service</h3></div>
            <div className={s.description}>
                <div className={s.descriptionForm}>

                    <div className={`${s.formInput} ${s.formInputLabel}`}>
                        <input type="text" name="Name" id="URL" placeholder=" "/>
                        <label htmlFor="URL">Enter Product URL</label>
                    </div>

                    <div className={s.wrapInputFile}>
                        <label>Or fill this form manually:</label>
                        <label className={s.customFileUpload}>
                            <input type="file"/>
                            <span>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.58579 11.4142L5.29289 12.1213L4.58579 11.4142ZM7.41421 11.4142L6.70711 12.1213H6.70711L7.41421 11.4142ZM7.58579 11.5858L8.29289 10.8787H8.29289L7.58579 11.5858ZM10.4142 11.5858L9.70711 10.8787H9.70711L10.4142 11.5858ZM12.5858 9.41421L11.8787 8.70711V8.70711L12.5858 9.41421ZM15.4142 9.41421L16.1213 8.70711V8.70711L15.4142 9.41421ZM2 2H16V0H2V2ZM16 2V16H18V2H16ZM16 16H2V18H16V16ZM2 16V2H0V16H2ZM2 16H0C0 17.1046 0.895431 18 2 18V16ZM16 16V18C17.1046 18 18 17.1046 18 16H16ZM16 2H18C18 0.895431 17.1046 0 16 0V2ZM2 0C0.895431 0 0 0.895431 0 2H2V0ZM1.70711 15.7071L5.29289 12.1213L3.87868 10.7071L0.292893 14.2929L1.70711 15.7071ZM6.70711 12.1213L6.87868 12.2929L8.29289 10.8787L8.12132 10.7071L6.70711 12.1213ZM11.1213 12.2929L13.2929 10.1213L11.8787 8.70711L9.70711 10.8787L11.1213 12.2929ZM14.7071 10.1213L16.2929 11.7071L17.7071 10.2929L16.1213 8.70711L14.7071 10.1213ZM13.2929 10.1213C13.6834 9.73079 14.3166 9.73079 14.7071 10.1213L16.1213 8.70711C14.9497 7.53553 13.0503 7.53553 11.8787 8.70711L13.2929 10.1213ZM6.87868 12.2929C8.05025 13.4645 9.94975 13.4645 11.1213 12.2929L9.70711 10.8787C9.31658 11.2692 8.68342 11.2692 8.29289 10.8787L6.87868 12.2929ZM5.29289 12.1213C5.68342 11.7308 6.31658 11.7308 6.70711 12.1213L8.12132 10.7071C6.94975 9.53553 5.05025 9.53553 3.87868 10.7071L5.29289 12.1213ZM6.691 5.846C6.691 6.31272 6.31172 6.692 5.845 6.692V8.692C7.41629 8.692 8.691 7.41728 8.691 5.846H6.691ZM5.845 6.692C5.37964 6.692 5 6.31307 5 5.846H3C3 7.41693 4.27436 8.692 5.845 8.692V6.692ZM5 5.846C5 5.37893 5.37964 5 5.845 5V3C4.27436 3 3 4.27507 3 5.846H5ZM5.845 5C6.31172 5 6.691 5.37928 6.691 5.846H8.691C8.691 4.27471 7.41629 3 5.845 3V5Z"
                                        fill="#31A4E4"/>
                                </svg>
                                Select Image
                            </span>
                        </label>
                    </div>

                    <div className={`${s.formInput} ${s.formInputLabel}`}>
                        <input type="text" name="Name" id="productName" placeholder=" "/>
                        <label htmlFor="productName">Product name</label>
                    </div>

                    <div className={`${s.formInput} ${s.formInputLabel}`}>
                        <input type="text" name="Name" id="Brand" placeholder=" "/>
                        <label htmlFor="Brand">Brand</label>
                    </div>

                    <div className={`${s.formInput} ${s.formInputLabel}`}>
                        <input type="text" name="Name" id="Manufacturer" placeholder=" "/>
                        <label htmlFor="Manufacturer">Manufacturer</label>
                    </div>

                    <div className={`${s.formInput} ${s.formInputLabel}`}>
                        <input type="text" name="Name" id="Packaging" placeholder=" "/>
                        <label htmlFor="Packaging ">Packaging </label>
                    </div>

                    <div className={`${s.formInput} ${s.formInputLabel}`}>
                        <input type="text" name="Name" id="Size" placeholder=" "/>
                        <label htmlFor="Size">Size </label>
                    </div>

                    <button className={s.buttonForm}>Submit</button>
                </div>
                <div className={s.descriptionImage}>
                    <img src="/images/big/milk01.png" alt=""/>
                </div>

            </div>

            <div className={s.resultWrap}>
                <h4>Result</h4>
                <div className={s.resultSummary}>
                    <div className={s.packaging}>
                        <h5>Packaging type: Milk Bottle</h5>
                        <div className={s.info}>70% Confidence</div>
                    </div>
                    <div className={s.component}>
                        <h5>Component 1: Bottle</h5>
                        <p> Material: HDPE</p>
                        <p>Approx. weight: 45 — 50 g.</p>
                    </div>
                    <div className={s.component}>
                        <h5>Component 2: Cap</h5>
                        <p> Material: HDPE</p>
                        <p>Approx. weight: 1 — 2 g.</p>
                    </div>
                </div>
            </div>
            <div className={s.footer}><span>© 2020 — 2021</span></div>
        </div>


    )

}
export default PackagingPage;