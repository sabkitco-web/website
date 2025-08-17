import { Fragment, useRef, useState } from 'react';
import styles from './convert-modal.module.css';
import { AUDIO_FORMATS, DEFAULT_ERROR, FILE_DOWNLOAD } from '@/utility/const';
import Button from '@/components/atoms/button/button';

export default function ConvertModal({ file, closeModal = () => { } }) {

    const [audioFormat, setAudioFormat] = useState('mp3');
    const [isProcessing, setIsProcessing] = useState(false);

    const isProcessingRef = useRef(false);

    function resetValues() {
        setIsProcessing(false)
        setAudioFormat("mp3")
        closeModal()
        isProcessingRef.current = false;
    }

    function downloadAudioFromBuffer(responseData, format = "mp3") {
        try {
            // Convert JSON buffer to Uint8Array
            const audioArray = new Uint8Array(responseData.data);

            // Create a Blob with the correct MIME type
            const blob = new Blob([audioArray], { type: "audio/mp3" });

            // Create URL and download
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `audio.${format}`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
        } catch (err) {
            console.error("ERROR - Downloading audio ::::", err);
        }
    }

    async function getAudio() {

        try {

            if (!file) {
                return null;
            }
            if (isProcessingRef.current) return;
            isProcessingRef.current = true;
            setIsProcessing(true)
            const formData = new FormData();
            formData.append('file', file);
            formData.append('format', audioFormat);
            const { extractAudio } = await import('../../../apis/video-audio/index');
            const response = await extractAudio(formData, { responseType: 'json' })
            downloadAudioFromBuffer(response, audioFormat)
            import('react-toastify').then((module) => {
                const toast = module.toast;
                toast.success(FILE_DOWNLOAD);
            });
        }
        catch (err) {
            console.log("EROOR - Getting audio ::::", err)
            import('react-toastify').then((module) => {
                const toast = module.toast;
                toast.error(DEFAULT_ERROR);
            });
        }
        finally {
            resetValues()
        }
    }

    function getBtnData() {
        if (isProcessing) {
            return {
                text: "Getting Audio ...",
                func: () => { }
            }
        }
        return {
            text: "Convert Audio",
            func: getAudio
        }
    }

    return (
        <Fragment>
            <h2 className={styles.modalTitle}>Selected File</h2>
            {file && (
                <strong className={styles.SelectedFile} >
                    {file.name}
                </strong>
            )}
            <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="audioFormat"> Choose audio format: </label>
                <select
                    id="audioFormat"
                    value={audioFormat}
                    onChange={e => setAudioFormat(e.target.value)}
                    style={{
                        padding : "0 0.5rem"
                    }}
                >
                    {
                        AUDIO_FORMATS.map(format => (
                            <option key={format} value={format}>
                                {format.toUpperCase()}
                            </option>
                        ))
                    }
                </select>
            </div>
            <Button
                style={styles.convertBtn}
                btnText={getBtnData().text}
                onClick={getBtnData().func}
            />
        </Fragment>
    )

}