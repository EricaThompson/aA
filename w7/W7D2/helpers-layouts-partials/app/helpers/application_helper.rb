module ApplicationHelper
    def auth_token
        "<input
            type=#{h("hidden")}
            name=#{h("authenticity_token")}
            value=#{form_authenticity_token}
        />".html_safe
    end
end
