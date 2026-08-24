"""Iconos de la app: cuadrado del color de la guia con una inicial en Cormorant.

La tipografia esta en el repo (cormorant.ttf) para no depender de la red.
"""
import pathlib
from PIL import Image, ImageDraw, ImageFont

AQUI = pathlib.Path(__file__).parent
TTF = AQUI / "cormorant.ttf"
CLARO = (253, 245, 248)          # #FDF5F8, el fondo claro de las guias


def _hex(c):
    c = c.lstrip("#")
    return tuple(int(c[i:i + 2], 16) for i in (0, 2, 4))


def _icono(px, fondo, letra, radio_rel=0.22, margen=False):
    s = px * 4                   # se dibuja en grande y se reduce, para que quede suave
    img = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    dr = ImageDraw.Draw(img)
    dr.rounded_rectangle([0, 0, s - 1, s - 1], radius=int(s * radio_rel), fill=fondo + (255,))
    f = ImageFont.truetype(str(TTF), int(s * (0.52 if margen else 0.62)))
    try:
        f.set_variation_by_axes([600])          # semibold, como los titulos de la guia
    except Exception:
        pass
    caja = dr.textbbox((0, 0), letra, font=f)
    dr.text(((s - (caja[2] - caja[0])) / 2 - caja[0],
             (s - (caja[3] - caja[1])) / 2 - caja[1]), letra, font=f, fill=CLARO + (255,))
    return img.resize((px, px), Image.LANCZOS)


def generar(destino, color, letra):
    """Escribe icon-192, icon-512 y apple-touch-icon en la carpeta destino."""
    destino = pathlib.Path(destino)
    fondo = _hex(color)
    for px, nombre in ((192, "icon-192.png"), (512, "icon-512.png")):
        _icono(px, fondo, letra).save(destino / nombre)
    # iOS recorta las esquinas por su cuenta y no admite transparencia: cuadrado lleno
    _icono(180, fondo, letra, radio_rel=0, margen=True).convert("RGB").save(
        destino / "apple-touch-icon.png")


if __name__ == "__main__":
    import sys
    generar(sys.argv[1], sys.argv[2], sys.argv[3])
