import { ErrorToast, SuccessToast } from 'react-native-toast-message';

const toastConfig = (theme) => ({
    success: (props) => (
        <SuccessToast
            {...props}
            contentContainerStyle={{
                paddingHorizontal: 15,
                backgroundColor: theme === 'dark' ? '#222' : '#fff'
            }}
            text1Style={{
                fontSize: 20,
                fontWeight: '400',
                color: theme === 'dark' ? '#fff' : '#222'
            }}
            text2Style={{
                fontSize: 17,
                color: theme === 'dark' ? '#ccc' : '#444'
            }}
        />
    ),
    error: (props) => (
        <ErrorToast
            {...props}
            contentContainerStyle={{
                paddingHorizontal: 15,
                backgroundColor: theme === 'dark' ? '#222' : '#fff'
            }}
            text1Style={{
                fontSize: 20,
                fontWeight: '400',
                color: theme === 'dark' ? '#fff' : '#222'
            }}
            text2Style={{
                fontSize: 17,
                color: theme === 'dark' ? '#ccc' : '#444'
            }}
        />
    )
});

export default toastConfig;
