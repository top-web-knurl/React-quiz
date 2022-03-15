export function createControl(config, validation) {
    let id = 0;
    return {
        ...config,
        validation,
        valid: !validation,
        touched: false,
        value: '',
        id: id++
    }
}
export function validate(value, validation = null) {

    if (!validation) return true;

    let isValid = true;

    if (validation.required) {
        isValid = value.trim() !== '' && isValid;
    }
    return isValid;
}

export function validateForm(formControls) {
    let isFormValid = true;

    Object.values(formControls).forEach(control => {
        isFormValid = control.valid && isFormValid;
    })

    return isFormValid;
}