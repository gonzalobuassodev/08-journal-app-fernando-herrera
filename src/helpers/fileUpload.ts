

export const fileUpload = async (file: File) => {

    if (!file) throw new Error('No file');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/lansis/image/upload'

    const formData = new FormData();

    formData.append('upload_preset', 'react-journal');
    formData.append('file', file)

    try {

        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (!resp.ok) throw new Error('No se pudo subir la imagen');
        
        const cloudResp = await resp.json();

        return cloudResp.secure_url;
        
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error('Error al subir la imagen')
        }
    }
}