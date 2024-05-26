from nelsie import (
    SlideDeck,
    TextStyle,
    Resources,
    Path,
    Arrow,
    Stroke
)

resources = Resources()
resources.load_fonts_dir("Roboto")

deck = SlideDeck(resources=resources)
color = "#0F4057"
color2 = "#0B3142"

deck.update_style("default", TextStyle(size=30, font_family="Roboto", color="black", weight=400))
deck.set_style("title", TextStyle(size=48, color="white", font_family="Roboto", weight=400))
deck.set_style("footer", TextStyle(size=21, color="white", weight=300))
deck.set_style("header", TextStyle(size=33, color="white", weight=400))
deck.set_style("titleMain", TextStyle(size=35, color=color2, font_family="Roboto", weight=600))

deck.set_style("point", TextStyle(size=35, color=color, font_family="Roboto", weight=600))
deck.set_style("numbers", TextStyle(size=30, color=color, font_family="Roboto", weight=600))


@deck.slide()
def main_page(slide):
    block = slide.box(x=0, y="25%", width="100%", height="25%", bg_color=color2)
    block2 = slide.box(x=0, y="50%", width="100%", height="15%", bg_color=color)

    block.text("Simulace zásobníkových automatů", m_bottom=15, style=slide.get_style("title"))
    block.text("Ondřej Just", style=TextStyle(weight=300, color="white"))

    block2.text("Vysoká škola báňská - Technická univerzita Ostrava", m_bottom=10, style=TextStyle(weight=300, color="white"))
    block2.text("2024", style=TextStyle(weight=300, color="white"))


def list_pr(box, type, *texts, depth, segmented=False, segments_show=0):
    cnt = 0
    indent = 15
    top = 12 if type == "ol" else 8
    top_first = 4 if type == "ol" else 0
    style_symbol = "numbers" if type == "ol" else "point"

    if depth == 0:
        symbol = '• '
    else:
        symbol = '- '

    for text in texts:
        cnt += 1

        if type == "ol":
            if depth == 0:
                symbol = str(cnt) + "."
            elif depth == 1:
                symbol = chr(ord('a') + cnt - 1) + ")"

        temp_symbol = symbol

        if isinstance(text, list):
            if cnt == 1:
                inner_box = box.box(p_left=indent + 25, width="100%", justify_content="start", m_top=top_first)
            else:
                inner_box = box.box(p_left=indent + 25, width="100%", justify_content="start", m_top=top)

            list_pr(inner_box, type, *text, depth=depth+1)
            continue

        elif not isinstance(text, str):
            temp_symbol = text[0]
            text = text[1]

        show_cnt = cnt + 1 - segments_show
        to_show = (str(show_cnt if show_cnt > 1 else 1) + "+" if segmented else "1+")

        if cnt == 1:
            wrapper = box.box(m_top=top_first, width="100%", row=True, justify_content="start", show=to_show)
        else:
            wrapper = box.box(m_top=top, width="100%", row=True, justify_content="start", show=to_show)

        wrapper.box(width=20, m_left=indent).text("~" + style_symbol + "{" + temp_symbol + "}")
        wrapper.box().text(text, m_left=20)


def layout(title):
    slide = deck.new_slide()
    header_box = slide.box(x=0, y=0, width="100%", height="8%", bg_color=color2, row=True)
    footer_box = slide.box(x=0, y="94%", width="100%", height="6%", bg_color=color, row=True)

    header_box.text(title, style=slide.get_style("header"), x=35)

    footer_box.box(width="25%").text("Ondřej Just", style=slide.get_style("footer"))
    footer_box.box(width="50%", bg_color=color2, height="100%").text("Simulace zásobníkových automatů", style=slide.get_style("footer"))
    footer_box.box(width="25%").text("$(global_page)/$(global_pages)", m_left="auto", m_right=10, style=slide.get_style("footer"), parse_counters=True)

    return slide.box(height="88%", y="8%", width="100%", justify_content="start")


def unified_block(parent, type, title, *texts, segmented=False, segments_show=0):
    wrapper = parent.box(width="90%", m_top=35)

    show_cnt = 2 - segments_show
    to_show = (str(show_cnt if show_cnt > 1 else 1) + "+" if segmented else "1+")

    if title:
        wrapper.text(title, style=parent.get_style("titleMain"), m_right="auto", m_bottom=10, show=to_show)

    if type == "t":
        for text in texts:
            wrapper.text(text, m_right="auto")
    else:
        list_pr(wrapper.box(width="100%"), type, *texts, depth=0, segmented=segmented, segments_show=segments_show)


def presentation():
    
    # Cíle
    slide = layout("Cíle práce")
    unified_block(
        slide,
        "ul",
        "Cíl",
        "Aplikace pro simulaci zásobníkových automatů",
        [
            "Vytvořit zásobníkový automat",
            "Nahrát automat ze souboru",
            "Stáhnout automat jako soubor",
            "Editovat automat",
            "Simulovat činnost zásobníkového automatu"
        ],
        "Ukázkové příklady"
    )
    
    # Technologie
    slide = layout("Technologie")
    unified_block(
        slide,
        "ul",
        "Použité technologie",
        "HTML",
        "Tailwind",
        "TypeScript"
    )

    # Aplikace
    slide = layout("Návrh tříd simulátoru")
    unified_block(
        slide,
        "t",
        "Třídní diagram tříd simulátoru"
    )
    slide.image("./img/SimulatorClasses.drawio.png", width="95%", m_y="auto")
    
    slide = layout("Stránka pro tvorbu automatů")
    unified_block(
        slide,
        "t",
        "Ukázka tvorby automatu se smazaným stavem q2"
    )
    slide.image("./img/PDABuilder.png", width="95%", m_y="auto")
    
    slide = layout("Formulář nahrání souboru")
    unified_block(
        slide,
        "t",
        "Nahrání zásobníkového automatu ze souboru"
    )
    slide.image("./img/PrntScrn_UI_Upload.png", width="95%", m_y="auto")
    
    slide = layout("Výpis úložiště")
    unified_block(
        slide,
        "t",
        "Výpis automatů uložených v localStorage"
    )
    slide.image("./img/PDAStorage.png", width="60%", m_y="auto")
    
    slide = layout("Simulátor")
    unified_block(slide, "t", "Ukázka simulace")
    slide.image("./img/1.png", width="110%")
    
    slide = layout("Simulátor")
    unified_block(slide, "t", "Ukázka simulace")
    slide.image("./img/2.png", width="110%")
    
    slide = layout("Simulátor")
    unified_block(slide, "t", "Ukázka simulace")
    slide.image("./img/3.png", width="110%")
    
    slide = layout("Simulátor")
    unified_block(slide, "t", "Ukázka simulace")
    slide.image("./img/4.png", width="110%")
    
    slide = layout("Simulátor")
    unified_block(slide, "t", "Ukázka simulace")
    slide.image("./img/5.png", width="110%")
    
    slide = layout("Simulátor")
    unified_block(slide, "t", "Ukázka simulace")
    slide.image("./img/6.png", width="110%")
    
    slide = layout("Simulátor")
    unified_block(slide, "t", "Ukázka simulace")
    slide.image("./img/7.png", width="110%")
    
    slide = layout("Ukázkové příklady")
    unified_block(
        slide,
        "ul",
        "Seznam ukázkových příkladů",
        "Chybové hlášky",
        ["error_testing.json"],
        "a^nb^n, n>=1",
        ["anbn_AS.json", "anbn_ES.json"],
        "Uzávorkování",
        ["brackets_and_parentheses.json"],
        "Palindromy",
        ["palindrome_AS.json", "palindrome_ES.json"],
        "Aritmetické výrazy",
        ["mathExpr_ES.json"]
    )
    
    slide = layout("Shrnutí")
    unified_block(
        slide,
        "ul",
        False,
        "Webová aplikace",
        [
            "Vytvoření automatu",
            "Nahrání souboru",
            "Stažení automatu",
            "Ukládání automatů do localStorage",
            "Simulace funkce automatu"    
        ],
        "Ukázkové příklady",
        [
            "5 příkladů",
            "1 chybový a 4 korektní",
            "Některé ve dvou verzích"
        ]
    )
    
    #Otázky vedoucí
    slide = layout("Otázka vedoucí - 1/x")
    unified_block(
        slide,
        "ul",
        "TODO",
        "..."
    )
    
    # Otázky Oponent
    slide = layout("Otázka oponent - 1/2")
    unified_block(
        slide,
        "ul",
        "Uzávorkování",
        "..."
    )
    
    slide = layout("Otázka oponent - 2/2")
    unified_block(
        slide,
        "ul",
        "Automat z kapitoly 2",
        "..."
    )

presentation()

deck.render("slides.pdf")
