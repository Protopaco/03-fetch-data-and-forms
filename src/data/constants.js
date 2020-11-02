import 'fontsource-roboto';
export const primaryColor = '#003A70';
export const secondaryColor = '#FFCB05';
export const accentColor = '#ff1f1f';
export const secondaryAccentColor = '#5db9ff'
export const textColor = 'white';


export const elementFrame = {
    backgroundColor: secondaryColor,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '85vh',
    minWidth: '1050px',
    width: '90vw',
    overflow: 'auto',
}

export const headerFrame = {
    backgroundColor: secondaryColor,
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    color: '#003A70',
    marginBottom: '10px',
}

export const listItemCard = {
    width: '300px',
    height: '300px',
    color: textColor,
    margin: '20px',
    display: 'grid',
    gridTemplateRows: '5fr .1fr 1fr',
}

export const listItemImageDiv = {
    width: '100%',
    height: 'auto',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 100%',
}

export const listItemCardBreakDiv = {
    backgroundColor: secondaryAccentColor,
}

export const listItemCardContent = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: primaryColor,
    padding: '10px',
}

export const galleryList = {
    display: 'inline-flex',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: '1200px',
    justifyContent: 'center',
}

export const dashboardForm = {
    display: 'inline-flex',
    paddingTop: '35px',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',

}
export const searchMenuDiv = {
    display: 'inline-flex',
    width: '100%',
    justifyContent: 'center'
}

export const inputStyle = {
    paddingLeft: '5px',
    paddingRight: '5px',
    width: '150px',
}


export const detailItemCard = {
    width: '450px',
    height: '700px',
    color: textColor,
    margin: '20px',
    marginBottom: '10px',
    display: 'grid',
    gridTemplateRows: '4fr .1fr 4fr',
}

export const detailItemImageDiv = {
    width: 'auto',
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 100%',
    display: 'flex',
    flexDirection: 'column-reverse',
    JustifyItems: 'flex-end'
}

export const detailItemCardBreakDiv = {
    backgroundColor: secondaryAccentColor,
}

export const detailItemCardContent = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: primaryColor,
    padding: '10px',
}
