import { PickerOverlay } from "filestack-react";

const UploadImage = (props: { setPhoto: any; setIsPicker: any; setDisabled: any; }) => {
    const { setPhoto, setIsPicker, setDisabled } = props;
    return (
        <>
            <PickerOverlay
                // apikey={process.env.REACT_APP_FILESTACK_API_KEY}
                apikey="AF7nRI60DRz2W8VeFOsx4z"
                onSuccess={(res: any) => {
                    setPhoto(res.filesUploaded[0].url);
                    setIsPicker(false);
                    setDisabled(true);
                }}
                onError={(res) => alert(res)}
                pickerOptions={{
                    maxFiles: 1,
                    accept: ["image/*"],
                    errorsTimeout: 2000,
                    maxSize: 1 * 1000 * 1000,
                }}
            />
        </>
    );
};

export default UploadImage;