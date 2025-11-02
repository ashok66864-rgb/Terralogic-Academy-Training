import MyInput from "./MyInput";

const MyForm = () => {
    const formConfig = {
        name: {
            label: "Your Name",
            type:"text",
            validation: { required: true},
        },
        email: {
            label: "Your Email",
            type: "email",
            validation: { required: true, isEmail: true},
        },
    };
    return (
        <form>
            {Object.keys(formConfig).map((key) => (
                <MyInput
                  key = {key}
                  label= {formConfig[key].label}
                  type={formConfig[key].type}
                  />
            ))}
        </form>
    )
};

export default MyForm;