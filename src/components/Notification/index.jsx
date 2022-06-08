export default function () {
    const notifyMe = () => {
        console.log('dfdd')
        const notification = new Notification('hello', {
            tag: 'ache-mail',
            body: 'stop working',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADmCAMAAABruQABAAAAflBMVEX///8AAAD+/v76+vqFhYXGxsaxsbHr6+upqanj4+O7u7u4uLiLi4vm5ubV1dVPT0+ZmZl/f3+fn58WFhbz8/ORkZEhISHc3NxiYmKtra01NTVqamobGxs6OjonJydTU1MNDQ1ISEjPz89vb29KSkp4eHguLi43NzdBQUHDw8NWHqArAAAL8klEQVR4nO1dD1/iPAweRYYgIggKKieIrxx+/y/4ChvQNGmbdilsHs/vTt2WdnmWrH/TLssoKPIsA4yEtcy7sZB5KLRIyrxDRX4Nfrgqtf9x+K/9ofxnZUSS5L23o9KInv7AZ2VETmcVO2GUhv8aLvzW/rPPPRKMApzh4CHvQOq8neUkdVZGhC7hZG9Pcv5laJjrMSof47zS/1CEUA1RTe/uOh8NbuqEwShfdys/le7L26RVT0zeXirwa+cPlybgwUPejmI2Ha0urToDq9E0nNrtpbVm4zaQ2fD10hoH4HUWQm10aXUDMWIza88vrWsw5swyZbq5tKYR2LCKlO7i0npGYcGo7KbNpPZDzm+5JhWQEK++RmTzipET3tzUqBr7eZwPu+06oTvMx8+Eps5a/J54GGuvG18G6zes7L1DHrWNl72z6RqO3tJU98Eu3Ddl++dTNAoBCr8bL1qdjVagZ7x27zZB4ym8RvQezg6zEWUz3B8gNWkCtR9ycFzgDy01hE9g1oCBoB1mUO0hKTQGMqE9vssB1sljUgY0JLdnVrAKtrriC3xdGS7ZKc+ypr64ItEJ3SId5JRA5AePusAGs68xQFn5iC4r2Epuztu2A3jj5oQAqAWrj9qeE11d9Wd8va1ft9QStQWomfHQSU+//HUB/argS1cetxTX7vex3gDlIO6UgYL07gL6VcGdrnwHXe64L4diet8b9nrTMzXbPMp7LgdMj97fjR8ObZzJ9uul50tovxH39nbllfuyPW/i7OwJj9xOxusKenNuX81uPPQ/ELECm9u4iTIm0nPruwbbVynL3tTcZjabHfBcvYSyISU3xZvW+krlmFbllfMy7pyAsyWmaDiNxAa2GRh5825PKK/LV7Jbjx3MkMYvE/qkMdLiRC5Eh628spqVE1wUQu1Ajps3TwQrD+Tj7dZthSGBW6byyTY1o+KE/HB1Km7kjN1qPhi9PD69kbw34lVBIm7EjN3fx5NlujlRO4h3fdNwwy/b1kw8xJaVfuUC625WQaawR+YZTrg2I8PeWYUkX8RQ3uxMxNnNLP7/0ANkKBpHeIwwiU8aE61La+fzBgpOZIuTFNwMszmmZE1ysoZLwQ1Op2+cQwbQLV9jKFiRgNsU2sId6teG7Wl6niwSMdw8Yzdg6Mwe6EcVZpZ5MjKhX4Qq5DXE2A242btXE1CLT3i34CGBTwJDvHjFYcnjinMJhTw3ONPMKNXBBKdkR06eW64n+WQkAG1PzgvHhTw3UGVxQojAXNF/gfq7IM8NFCWs2Ui9GrCG8ERAnhuY0WOlAE9DMDZHnps+jMybaQUhLILzzvLc9NA2agYdY3DlFoy03JasFM3hpr9vvFLvU79JrcuSDz0Ja/YXNEwEu6eCc8IlgBU4fRYQw/KXlmFMnGLI2w1MS3GmDkGcB6/04UGe27ee5IORAFRvT4H6uyDPDXa7/SPhwCVFxygT9N/A2h1/RwAOQUuOdCXgBseufCsjodlcY2LBSMANlA3eTgt8EqKDeCnG8OBiCXdRCYeCZCM0U3B7hPq6khnLmDzruQKRgpsxQOmowLsrrmQMkswHPBnkvi1yM4Mar2nNRhJupuFaA1IsN8WCVpv7kWZuEU2bbnHYaQ9N0nEGxUKQaE74w9S7tYSpZ59IYiW9jCkRt14LYzH+7u2aHe37zhO17tj2VkYjVZwCnPA44f393XLlRo4UT/n42Blj1tAL0dYWS/kK8VzEgl0H/iQINEwYqxZCLgW1pLGhuCi0YZskPDRpTO+gxcM8zYKBtPHK3y0OGIMqqj+4GYW2Ni3Kq0zhxX9aCKI6iWSns5kelrP/OfXvMrHb10fpuRB5lzXKsgtFMv2uQG9X8KeHegD6nmBDzkjYsdM0CerfpV8foG4dYctPnHaW1h9chZBLzm3nBd90vPn2hVU8gq5uiOXOsWYl2+2gNzf7ao/MHo3Riw8gdyZuP1C979H4c7l8+Px6upuxKzSDWohbno9bHBC1H8txY1DOzi2smiao8d2y3nYjqbHdstbcrCuVViy3rDM3xyIsllvWmJvFIUvLMcjVl5tv6ZzfLWvLzbsq0P/O1ZUbdkjU5va6ZU25Yas9wnCGPTyWqyc3ilrWRuQ8bllLbiQ1kpzTLdPMdTzOHz4jN3DOrNQock63dK41Usy1RsaK3XKmY7KO283ISk1liiRnyzvBWqOTbt+hTWOY3KC2Q9A7lzYuKGLHQye1H3IflOVo2JT3mJV2A+xRfXOduc83zSlXzSHL/yQ5Mm/pcS7zsQdazmO1HbDlbG4p7JNYtyBy2GpEwAnbLa1jr8VP59jr6fDwi2oE9o0sS9c5JtQ8iaZm3EhZ3BLnLeqTdPuWbTmc3BImhMmRbinpk7amO5McyyELtP9DsgQ5QW5YtyByAdTI0hJHM8pxc3W4GOSCqJFuiciJcbNbjUUukNoPOfxFFNMtY7hR7Sg3tXJPNntEtYcatUzd75ZUY5hPnU3Ns+FcsNX25HCBAsnJ+CTWDc/cOMhFUfO7ZWWftHnUGJ27g4lPuVipubeVcbglYzMIpt1o3WzkmMlZcLulgE/adMORQSS5CtRItzyRq87NrhvLcji5f9m0Ts5hOVtbuQB2WVV8OPAgYaFWiBDk8l1CLRciBOX2eHelDjcqE6Hb7/7ClptlRd6o83m4KdNubo/yuiWmFmS1vRlwkdxjKe/j5ntZPG5Z0SFLcja3rMbNrxu2nLbynnTICJBuWZEbRzeHWwo4ZFbUWLRbVuHGK72tbinikCU/siqowI372C1uGWS1sJ1C9phFcqNLb5tuJDl88sVFw9f8otwSLHqCgz0ENy0vGzVKCeKd8zhkCMHyEJFbgVUK3rFXPzVaGUZgdk4mdECZR+5NSvnvW2gR542AldiTxUmOzS289PZYTma7GRc5kxtqTyo3NddAv5NcfhBzTxc4RJSPXMfsvtF2c7Y1rHC4pdwmQXZyPJ+MbU5YLSe5/5GVHIsbpsbVzWI52T16beQ43OIcsgBJTnr7YQs5Brd4q2Vk6gQ7K9Pk/NxsVuO2IxA5mpqrAeIXIcmBtQ+KqANIasW0V9HRPyRU5SntoBAZ4OSGSHFjZy6WvI+3p8h1tBEFYohvXc0hCwyqJeeBIAfbk8qcDsd9d7BT93EKVIEDeBZ02+7cCUPz1g7oTYDBOhfIDSHuozKDasn9IHvinrKEtlo4+vslp1vZRfgmTMuFcavwssw6HcmNJkkY5IK41f4rR9AtQ7gdrMaofWgwRBgJXbcHlgvgVnurZcYmMXxuTaAWNM7VMGpx3JpBLYpbQ6g5uZltLoKaeHmoyD/j8nZwQ9NzR2qMYRv6LFckekgI5I24wUeBuTXFIbPw961B1EK5GTEiANU6y7IJ9wdhPhkRN35BBNmtSQ6ZhXFr1qeSa7rWSAhS8ZNS1bhMz6eAUPxkLXH1yUYWk75vJf/mb1z/5m+T/+ZvymdgVbXoTrPJAT6w94wuG1+pM0Kk1aHbpA4HWkKWiNJFYEJdhG4q+24PQmfmxE3A+7gxmXshWRWHioDvT1PlIPyiUpNqONjM1ycfjg9loUtsM0oEnInuxXkSBucNVhQvSGEY/ticrgDcTpf+FJTxgUHhbYKTAX7xy7YpNaglWhPpzXTTYAr3qQM1szr96sMnsJliETysSJb2lIj51hBn6by12+M3b7qBSlvHQoyNdZ+TzwpWwo5oz9jHxf4pG8Nw9R8RClEYBXEv5b9HLYcemsantzcuPPneFG613nCXoR5YE7sDH14i8t0kvljdeh7nw267TugO8zG1SamnTvbv2lpfeL8l8ffSGkbD8hEoDdOFP5daYsFoa3SbSW7B6k6bVX0jsGG2ENFX0uuPObmN1ml95+nAv/1ezTDKsnLFqkbChhn1KYq64tXVHaPGaKhavJ64tZOwYTpa+fO9OFajuG5mO8cLIOuFh/it+HY7eL859l+/KCZvL74qTRXx6FkZom4c7Pmt89Hgpk4YjPJ1weugKk3iimZCq7rV8eBg1eNBuXsDLZI5RHDeFpEEeV9xxRVXyEAV/4pBanU8zuAqMnUcwWaLGHln58/7iiuuuEIA/wORVpSTga3bnwAAAABJRU5ErkJggg=='
        });
    }



    const notifSet = () => {
        console.log('fff')
        if (!('Notification' in window)) {
            console.log('unsupported');
        } else if (Notification.permission === 'granted') {
            setTimeout(notifyMe, 2000);
        } else if (Notification.permission === 'denied') {
            Notification.requestPermission(function (permission) {
                if (!('permission' in Notification)) {
                    Notification.permission = permission;
                    setTimeout(notifyMe, 2000);
                }
            })
        }
    }

    return (
        <div>
            <button onClick={notifSet}>Notification</button>
        </div>
    )

}