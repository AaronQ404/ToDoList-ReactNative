import { ErrorToast, SuccessToast } from 'react-native-toast-message';

const toastConfig = {
    success: (props) => (
        <SuccessToast
            {...props}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontSize: 20,
                fontWeight: '400'
            }}
            text2Style={{
                fontSize: 17
            }}
        />
    ),
    error: (props) => (
        <ErrorToast
            {...props}
            text1Style={{
                fontSize: 20
            }}
            text2Style={{
                fontSize: 17
            }}
        />
    )
};

export default toastConfig;
